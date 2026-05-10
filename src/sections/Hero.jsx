import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useLanguage } from "../i18n/useLanguage";
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
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
