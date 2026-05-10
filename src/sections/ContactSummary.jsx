import { useLanguage } from "../i18n/useLanguage";

const ContactSummary = () => {
  const { t } = useLanguage();
  const contactSummary = t.contactSummary;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12 mt-16">
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "{contactSummary.start} <br />
          <span className="font-normal">{contactSummary.strong}</span> &{" "}
          <span className="italic">{contactSummary.italic}</span> <br />
          {contactSummary.end}{" "}
          <span className="text-gold">{contactSummary.together}</span>"
        </p>
      </div>
    </section>
  );
};

export default ContactSummary;
