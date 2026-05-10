import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "../i18n/useLanguage";

const Marketing = () => {
  const { t } = useLanguage();
  const itemRefs = useRef([]);
  const linkRef = useRef(null);

  useGSAP(() => {
    gsap.from(itemRefs.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#marketing-list",
        start: "top 80%",
      },
    });

    gsap.from(linkRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: linkRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="marketing" className="min-h-screen bg-primary">
      <AnimatedHeaderSection
        subTitle={t.marketing.subTitle}
        title={t.marketing.title}
        text={t.marketing.text}
        textColor={"text-black"}
        withScrollTrigger={true}
        hideText={true}
      />
      <div className="mx-10 border-t-2 border-black" />
      <div className="grid gap-10 px-10 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="text-2xl font-light leading-relaxed tracking-wide md:text-3xl text-black/70">
          <AnimatedTextLines text={t.marketing.text} className={"w-full"} />
          <a
            ref={linkRef}
            href={t.marketing.channelHref}
            className="inline-block mt-8 text-black underline underline-offset-8 transition-colors duration-300 hover:text-black/60"
          >
            {t.marketing.channelText}
          </a>
        </div>
        <div
          id="marketing-list"
          className="flex flex-col border-t-2 border-black/80"
        >
          {t.marketing.items.map((item, index) => (
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              key={item}
              className="flex items-center gap-8 py-5 text-2xl font-light uppercase border-b border-black/30 md:text-3xl"
            >
              <span className="text-base text-black/40">
                0{index + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
