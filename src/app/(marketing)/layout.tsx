// src/app/(marketing)/layout.tsx
import { MobileBottomNav, Footer, Header } from '@/components/layout';

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
