import Image from 'next/image';

import { Container, Heading, Section } from '@/components/ui';
import type { PortfolioProjectPageContent } from '@/domain/portfolio/page';
import type { PortfolioProject, PortfolioProjectImage } from '@/domain/portfolio/types';

type PortfolioProjectGalleryProps = {
  project: PortfolioProject;
  content: PortfolioProjectPageContent;
};

export function PortfolioProjectGallery({ project, content }: PortfolioProjectGalleryProps) {
  if (!project.images) return null;

  const { desktop, mobile } = project.images;

  if (!desktop.length && !mobile?.length) return null;

  return (
    <Section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[10%] top-[16%] h-40 w-40 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-44 w-44 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.gallery.eyebrow}
            title={content.gallery.title}
            description={content.gallery.description}
            align="center"
          />
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="hidden gap-6 lg:grid lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
            <DesktopGalleryColumn images={desktop} label={content.gallery.desktopLabel} />
            {mobile?.length ? (
              <MobileGalleryColumn images={mobile} label={content.gallery.mobileLabel} />
            ) : null}
          </div>

          <div className="space-y-8 lg:hidden">
            <MobileSectionBlock title={content.gallery.desktopLabel}>
              <div className="space-y-5">
                {desktop.map((image, index) => (
                  <GalleryFrame
                    key={`${image.src}-${index}`}
                    image={image}
                    ratioClassName="aspect-[16/10]"
                    sizes="100vw"
                  />
                ))}
              </div>
            </MobileSectionBlock>

            {mobile?.length ? (
              <MobileSectionBlock title={content.gallery.mobileLabel}>
                <div className="grid gap-5 sm:grid-cols-2">
                  {mobile.map((image, index) => (
                    <GalleryFrame
                      key={`${image.src}-${index}`}
                      image={image}
                      ratioClassName="aspect-[9/16]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      isMobileFrame
                    />
                  ))}
                </div>
              </MobileSectionBlock>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type DesktopGalleryColumnProps = {
  images: PortfolioProjectImage[];
  label: string;
};

function DesktopGalleryColumn({ images, label }: DesktopGalleryColumnProps) {
  return (
    <div className="space-y-6">
      <SectionLabel label={label} />

      {images.map((image, index) => (
        <GalleryFrame
          key={`${image.src}-${index}`}
          image={image}
          ratioClassName="aspect-[16/10]"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      ))}
    </div>
  );
}

type MobileGalleryColumnProps = {
  images: PortfolioProjectImage[];
  label: string;
};

function MobileGalleryColumn({ images, label }: MobileGalleryColumnProps) {
  return (
    <div className="flex h-full flex-col gap-6">
      <SectionLabel label={label} />

      <div className="flex flex-1 flex-col justify-between gap-6">
        {images.map((image, index) => (
          <GalleryFrame
            key={`${image.src}-${index}`}
            image={image}
            ratioClassName="h-full min-h-[280px]"
            sizes="(max-width: 1024px) 100vw, 28vw"
            isMobileFrame
            fillHeight
          />
        ))}
      </div>
    </div>
  );
}

type MobileSectionBlockProps = {
  title: string;
  children: React.ReactNode;
};

function MobileSectionBlock({ title, children }: MobileSectionBlockProps) {
  return (
    <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.72),rgba(10,14,24,0.94))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-5">
      <SectionLabel label={title} />
      <div className="mt-5">{children}</div>
    </div>
  );
}

type GalleryFrameProps = {
  image: PortfolioProjectImage;
  ratioClassName: string;
  sizes: string;
  isMobileFrame?: boolean;
  fillHeight?: boolean;
};

function GalleryFrame({
  image,
  ratioClassName,
  sizes,
  isMobileFrame = false,
  fillHeight = false,
}: GalleryFrameProps) {
  return (
    <div
      className={[
        'group relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.8),rgba(10,14,24,0.95))] shadow-[0_25px_70px_rgba(0,0,0,0.3)]',
        isMobileFrame ? 'px-3 pt-3' : '',
        fillHeight ? 'flex-1' : '',
      ].join(' ')}
    >
      {isMobileFrame ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 rounded-t-4xl bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
      ) : null}

      {isMobileFrame ? (
        <div className="pointer-events-none absolute left-1/2 top-3 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/12" />
      ) : null}

      <div
        className={[
          'relative overflow-hidden',
          isMobileFrame ? 'rounded-3xl border border-white/8' : 'rounded-4xl',
          ratioClassName,
        ].join(' ')}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={100}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="pl-1">
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-foreground/45 backdrop-blur-xl">
        {label}
      </span>
    </div>
  );
}
