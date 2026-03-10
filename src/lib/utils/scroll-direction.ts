// src/lib/utils/scroll-direction.ts
export type ScrollDirection = 'up' | 'down' | 'none';

type GetScrollDirectionParams = {
  currentY: number;
  previousY: number;
  threshold?: number;
};

export function getScrollDirection({
  currentY,
  previousY,
  threshold = 6,
}: GetScrollDirectionParams): ScrollDirection {
  const delta = currentY - previousY;

  if (Math.abs(delta) < threshold) return 'none';
  return delta > 0 ? 'down' : 'up';
}

export function isNearTop(scrollY: number, topOffset = 64) {
  return scrollY <= topOffset;
}
