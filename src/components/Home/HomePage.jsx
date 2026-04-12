import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import PromoSection from "../components/Home/PromoSection";
import VetClinicBanner from "../components/Home/VetClinicBanner";
import HitsSection from "../components/Home/HitSection";
import ArticlesSection from "../components/Home/ArticleSection";
import BrandsSection from "../components/Home/BrandsSection";
import SeoText from "../components/Home/SeoText";

export default function HomePage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div>
      <Hero />
      <div id="promo">
        <PromoSection />
      </div>
      <div id="about">
        <VetClinicBanner />
      </div>
      <HitsSection />
      <div id="articles">
        <ArticlesSection />
      </div>
      <BrandsSection />
      <div id="delivery">
        <SeoText />
      </div>
    </div>
  );
}
