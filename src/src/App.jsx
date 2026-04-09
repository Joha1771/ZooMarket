import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Curriculum from "./components/Curriculum";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { I18nProvider } from "./i18n";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import IntroPage from "./components/IntroPage";
import JSIntroPage from "./components/JsIntroPage";
import HtmlIntroPage from "./components/HtmlIntropage";
import CssIntroPage from "./components/CssIntropage";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return null;
}

function RootLayout() {
  return (
    <I18nProvider>
      <Navbar />
      <ScrollToHash />
      <main>
        <Outlet />
      </main>
      <Footer />
    </I18nProvider>
  );
}

function LandingPage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <Features />

      <section id="roadmap">
        <Curriculum />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "intro", element: <IntroPage /> },
      { path: "courses", element: <CoursesPage /> },
      { path: "js-intro", element: <JSIntroPage /> },
      { path: "html-intro", element: <HtmlIntroPage /> },
      { path: "css-intro", element: <CssIntroPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
