import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useLanguage } from "../i18n/useLanguage";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { t, toggleLanguage } = useLanguage();
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen"
    >
      <button
        type="button"
        onClick={toggleLanguage}
        className="absolute z-10 flex items-center justify-center w-12 h-12 text-sm font-light text-white transition-colors duration-300 bg-black rounded-full top-4 left-10 hover:text-white/80"
      >
        {t.languageLabel}
      </button>
      <AnimatedHeaderSection
        subTitle={t.hero.subTitle}
        title={t.hero.title}
        text={t.hero.text}
        textColor={"text-black"}
        hideSubTitleOnMobile={true}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={null}>
          <HeroScene isMobile={isMobile} />
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;
