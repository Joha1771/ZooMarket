import Hero from "../components/Hero/Hero";
import PromoSection from "../components/Home/PromoSection";
import VetClinicBanner from "../components/Home/VetClinicBanner";
import HitsSection from "../components/Home/HitSection";
import ArticlesSection from "../components/Home/ArticleSection";
import BrandsSection from "../components/Home/BrandsSection";
import SeoText from "../components/Home/SeoText";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <PromoSection />
      <VetClinicBanner />
      <HitsSection />
      <ArticlesSection />
      <BrandsSection />
      <SeoText />
    </div>
  );
}
