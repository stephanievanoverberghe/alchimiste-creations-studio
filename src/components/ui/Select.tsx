'use client';

import { forwardRef, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  options: SelectOption[];
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
  panelClassName?: string;
};

export const Select = forwardRef<HTMLInputElement, SelectProps>(function Select(
  {
    value,
    defaultValue = '',
    onChange,
    onBlur,
    options,
    placeholder = 'Sélectionnez une option',
    name,
    disabled,
    className,
    triggerClassName,
    panelClassName,
  },
  ref,
) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const listboxId = useId();
  const activeValue = isControlled ? (value ?? '') : internalValue;

  const selectedIndex = useMemo(() => {
    const foundIndex = options.findIndex((option) => option.value === activeValue);
    return foundIndex >= 0 ? foundIndex : 0;
  }, [activeValue, options]);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === activeValue),
    [activeValue, options],
  );

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        onBlur?.();
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [onBlur]);

  useEffect(() => {
    if (!isOpen || !listRef.current) return;

    const activeElement = listRef.current.querySelector<HTMLElement>(
      `[data-option-index="${highlightedIndex}"]`,
    );

    activeElement?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex, isOpen]);

  function openSelect() {
    if (disabled) return;
    setHighlightedIndex(selectedIndex);
    setIsOpen(true);
  }

  function closeSelect() {
    setIsOpen(false);
    onBlur?.();
  }

  function toggleSelect() {
    if (isOpen) {
      closeSelect();
      return;
    }

    openSelect();
  }

  function updateValue(nextValue: string) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
    setIsOpen(false);
    onBlur?.();
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();

        if (!isOpen) {
          openSelect();
          return;
        }

        setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1));
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();

        if (!isOpen) {
          openSelect();
          return;
        }

        setHighlightedIndex((prev) => Math.max(prev - 1, 0));
        break;
      }

      case 'Home': {
        if (!isOpen) return;
        event.preventDefault();
        setHighlightedIndex(0);
        break;
      }

      case 'End': {
        if (!isOpen) return;
        event.preventDefault();
        setHighlightedIndex(options.length - 1);
        break;
      }

      case 'Enter':
      case ' ': {
        event.preventDefault();

        if (!isOpen) {
          openSelect();
          return;
        }

        const option = options[highlightedIndex];
        if (option) {
          updateValue(option.value);
        }
        break;
      }

      case 'Escape': {
        if (isOpen) {
          event.preventDefault();
          closeSelect();
        }
        break;
      }

      case 'Tab': {
        if (isOpen) {
          closeSelect();
        }
        break;
      }

      default:
        break;
    }
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <input ref={ref} type="hidden" name={name} value={activeValue} />

      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={toggleSelect}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex h-12 w-full items-center cursor-pointer justify-between rounded-[0.95rem] border border-white/10 bg-white/4 px-4 text-left text-sm text-foreground outline-none transition-all duration-200',
          'focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
          'disabled:cursor-not-allowed disabled:opacity-60',
          isOpen && 'border-primary/30 bg-white/5',
          triggerClassName,
        )}
      >
        <span className={cn('truncate', selectedOption ? 'text-foreground' : 'text-foreground/35')}>
          {selectedOption?.label ?? placeholder}
        </span>

        <ChevronDown
          className={cn(
            'ml-3 h-4 w-4 shrink-0 text-foreground/45 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen ? (
        <div
          id={listboxId}
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className={cn(
            'absolute left-0 top-[calc(100%+0.6rem)] z-50 max-h-72 w-full overflow-y-auto rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.98),rgba(9,14,28,0.98))] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl',
            panelClassName,
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === activeValue;
            const isHighlighted = index === highlightedIndex;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                data-option-index={index}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => updateValue(option.value)}
                className={cn(
                  'flex w-full cursor-pointer items-center justify-between rounded-[0.9rem] px-3 py-3 text-left text-sm transition',
                  isHighlighted
                    ? 'bg-white/[0.07] text-foreground'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                  isSelected && 'text-foreground',
                )}
              >
                <span className="pr-4">{option.label}</span>

                <span className="ml-3 flex h-5 w-5 items-center justify-center">
                  {isSelected ? <Check className="h-4 w-4 text-primary" /> : null}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
});
