import LPHeader from "@/components/lp/LPHeader"
import HeroSection from "@/components/lp/HeroSection"
import AuthoritySection from "@/components/lp/AuthoritySection"
import ProcessSection from "@/components/lp/ProcessSection"
import UpgradeSection from "@/components/lp/UpgradeSection"
import PackagingSection from "@/components/lp/PackagingSection"
import ShippingBannerSection from "@/components/lp/ShippingBannerSection"
import TestimonialsSection from "@/components/lp/TestimonialsSection"
import FAQSection from "@/components/lp/FAQSection"
import PurchaseSection from "@/components/lp/PurchaseSection"
import LPFooter from "@/components/lp/LPFooter"

export default function Page() {
  return (
    <main>
      <LPHeader />
      <HeroSection />
      <AuthoritySection />
      <ProcessSection />
      <UpgradeSection />
      <PackagingSection />
      <ShippingBannerSection />
      <TestimonialsSection />
      <FAQSection />
      <PurchaseSection />
      <LPFooter />
    </main>
  )
}
