// src/app/(marketing)/layout.tsx
import { MobileBottomNav, Footer, Header } from '@/components/layout';

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <div className="pb-28 md:pb-0">{children}</div>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
