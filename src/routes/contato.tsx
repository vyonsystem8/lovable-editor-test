import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { HeroBg } from "@/components/site/HeroBg";
import { ContactForm } from "@/components/site/ContactForm";
import { trackEvent, whatsappUrl } from "@/lib/track";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Consync Contabilidade em Brasília" },
      { name: "description", content: "Fale com um especialista da Consync Contabilidade em Brasília. WhatsApp, e-mail e formulário para diagnóstico gratuito." },
      { property: "og:title", content: "Contato | Consync Contabilidade" },
      { property: "og:description", content: "Fale com a Consync. Diagnóstico gratuito." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-16 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <div className="eyebrow !text-[#FFA06A]">Contato</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Vamos conversar sobre a sua empresa.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75">
            Conte um pouco sobre o seu negócio e um especialista da Consync entrará em contato para um diagnóstico gratuito.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <InfoCard title="WhatsApp" text="Atendimento direto com um especialista." actionLabel="Falar no WhatsApp"
              href={whatsappUrl()} eventName="cta_whatsapp_click" />
            <InfoCard title="E-mail" text="contato@consync.com.br" actionLabel="Enviar e-mail"
              href="mailto:contato@consync.com.br" eventName="email_click" />
            <div className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
              <div className="eyebrow">Atendimento</div>
              <ul className="mt-4 space-y-2 text-[15px] text-[#182433]">
                <li><strong>Brasília — DF</strong></li>
                <li className="text-[#385577]">Atendimento 100% digital em todo o Brasil</li>
                <li className="text-[#385577]">Segunda a sexta · 9h às 18h</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#D8DDE4] bg-white p-7 md:p-9">
              <h2 className="text-xl font-bold">Solicite um diagnóstico</h2>
              <p className="mt-1 text-sm text-[#385577]">Resposta em até 1 dia útil.</p>
              <div className="mt-6">
                <ContactForm onSubmitSuccess={() => trackEvent("generate_lead_form", { page: "contato" })} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
            Prefere falar agora?
          </h2>
          <p className="mt-4 text-white/70">Estamos a uma mensagem de distância.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={whatsappUrl()} event="cta_whatsapp_click" eventParams={{ location: "contato_final" }}>
              Falar no WhatsApp
            </CTA>
          </div>
        </div>
      </Section>
    </>
  );
}

function InfoCard({ title, text, actionLabel, href, eventName }: {
  title: string; text: string; actionLabel: string; href: string; eventName: "cta_whatsapp_click" | "email_click";
}) {
  return (
    <div className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
      <div className="eyebrow">{title}</div>
      <p className="mt-3 text-[15px] text-[#182433]">{text}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={() => trackEvent(eventName, { location: "contato_card" })}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F26B38]"
      >
        {actionLabel} →
      </a>
    </div>
  );
}
