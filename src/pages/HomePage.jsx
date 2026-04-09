import Hero from "../components/Hero/Hero";
import HitsSection from "../components/Home/HitSection";
import PromoSection from "../components/Home/PromoSection";
import BrandsSection from "../components/Home/BrandsSection";
import VetClinicBanner from "../components/Home/VetClinicBanner";
import ArticlesSection from "../components/Home/ArticleSection";
import SeoText from "../components/Home/SeoText";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HitsSection />
      <PromoSection />
      <BrandsSection />
      <VetClinicBanner />
      <ArticlesSection />
      <SeoText />
    </>
  );
}
