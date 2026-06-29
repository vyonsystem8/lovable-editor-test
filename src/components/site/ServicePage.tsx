import { Section } from "./Section";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { HeroBg } from "./HeroBg";
import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";
import { trackEvent, whatsappUrl } from "@/lib/track";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  benefits: string[];
  forWho: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-20 md:pb-28">
        <HeroBg />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="eyebrow !text-[#FFA06A]">{p.eyebrow}</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {p.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl">{p.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA to="/contato" event="cta_hero_click" eventParams={{ page: p.title }}>
                Solicitar diagnóstico
              </CTA>
              <CTA
                href={whatsappUrl()}
                variant="ghost-dark"
                event="cta_whatsapp_click"
                eventParams={{ location: "service_hero" }}
              >
                Falar no WhatsApp
              </CTA>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Sobre o serviço" title="O que entregamos">
        <div className="grid md:grid-cols-12 gap-10">
          <p className="md:col-span-7 text-lg leading-relaxed text-[#385577]">{p.description}</p>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
              <div className="eyebrow">Benefícios</div>
              <ul className="mt-4 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] text-[#182433]">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F26B38] text-white">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTA to="/contato" event="cta_middle_click" eventParams={{ page: p.title }}>
                  Quero organizar minha empresa
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Para quem é" title="Indicado para" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.forWho.map((f) => (
            <div key={f} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white/85">
              {f}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Como atendemos" title="Processo de atendimento">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.process.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#D8DDE4] bg-white p-6">
              <div className="text-xs font-semibold tracking-[0.18em] text-[#F26B38]">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#385577]">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Perguntas frequentes" title="Tire suas dúvidas">
        <FAQ items={p.faqs} />
      </Section>

      <Section eyebrow="Fale com um especialista" title="Solicite um diagnóstico gratuito" dark>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-white/75 text-lg leading-relaxed">
              Conte sobre sua empresa e o momento atual. Nossos especialistas
              vão entender seu cenário e indicar o melhor caminho para
              organização e crescimento.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTA
                href={whatsappUrl()}
                event="cta_final_click"
                eventParams={{ page: p.title, channel: "whatsapp" }}
              >
                Falar no WhatsApp
              </CTA>
              <CTA
                href="tel:+556100000000"
                variant="ghost-dark"
                event="phone_click"
                eventParams={{ page: p.title }}
              >
                Ligar agora
              </CTA>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 md:p-8 text-[#182433]">
            <ContactForm
              onSubmitSuccess={() => trackEvent("generate_lead_form", { page: p.title })}
              defaultService={p.title}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
