import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { HeroBg } from "@/components/site/HeroBg";
import { Icon } from "@/components/site/Icon";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Consync | Contabilidade Consultiva em Brasília" },
      { name: "description", content: "Conheça a Consync: contabilidade consultiva fundada por cinco sócios jovens em Brasília. Inteligência, tecnologia e estratégia para empresas que querem crescer." },
      { property: "og:title", content: "Sobre a Consync Contabilidade" },
      { property: "og:description", content: "Contabilidade consultiva moderna em Brasília/DF." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

const PILLARS = [
  { i: "brain", t: "Inteligência", d: "Decisões guiadas por dados, indicadores e análises consultivas." },
  { i: "strategy", t: "Estratégia", d: "Alinhamento entre contabilidade, finanças e plano de crescimento." },
  { i: "tech", t: "Tecnologia", d: "Processos digitais, automações e plataforma moderna." },
  { i: "handshake", t: "Proximidade", d: "Consultor dedicado e relacionamento próximo com cada cliente." },
  { i: "growth", t: "Crescimento", d: "Direcionamento para escalar com previsibilidade e organização." },
  { i: "shield", t: "Segurança", d: "Conformidade fiscal, contábil e proteção de dados (LGPD)." },
] as const;

function Sobre() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-20 md:pb-28 -mt-20">
        <HeroBg />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="eyebrow !text-[#FFA06A]">Sobre a Consync</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Uma nova geração de contabilidade para empresas em Brasília.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl">
              Somos uma contabilidade consultiva fundada por cinco sócios jovens
              que acreditam em inteligência, tecnologia, organização e
              proximidade como pilares de uma gestão moderna.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Quem somos" title="Contabilidade pensada para o seu próximo passo">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5 text-lg text-[#385577] leading-relaxed">
            <p>
              A Consync nasceu da inquietação de cinco sócios que percebiam um
              vácuo entre a contabilidade tradicional e o que empresas modernas
              em Brasília realmente precisam: uma parceira estratégica, digital
              e próxima.
            </p>
            <p>
              Nossa missão é transformar a contabilidade em uma ferramenta de
              gestão. Para isso, unimos uma equipe multidisciplinar, processos
              digitais e uma cultura de atendimento consultivo, com indicadores
              claros e direcionamento contínuo para cada cliente.
            </p>
            <p>
              Atendemos pequenas e médias empresas, prestadores de serviços,
              profissionais liberais, clínicas, escritórios, e-commerces,
              empresas B2B e negócios em expansão — sempre com o mesmo
              compromisso: clareza, inteligência e proximidade.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
              <div className="eyebrow">Sócios fundadores</div>
              <p className="mt-4 text-[15px] text-[#385577]">
                Cinco sócios complementares em contabilidade, tributação,
                tecnologia, financeiro e atendimento consultivo. Uma estrutura
                pensada para entregar visão estratégica em cada frente do seu
                negócio.
              </p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-[#F8F8F5] border border-[#D8DDE4] flex items-center justify-center text-[#385577] font-bold">
                    S{i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Nossos pilares" title="O que nos move" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div key={p.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F26B38] text-white">
                <Icon name={p.i as never} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTA to="/contato">Fale com a Consync</CTA>
        </div>
      </Section>
    </>
  );
}
