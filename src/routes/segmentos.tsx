import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { HeroBg } from "@/components/site/HeroBg";
import { Icon } from "@/components/site/Icon";

export const Route = createFileRoute("/segmentos")({
  head: () => ({
    meta: [
      { title: "Segmentos Atendidos | Consync Contabilidade Brasília" },
      { name: "description", content: "Atendemos pequenas e médias empresas, prestadores de serviços, profissionais liberais, clínicas, e-commerces e startups em Brasília." },
      { property: "og:title", content: "Segmentos atendidos | Consync" },
      { property: "og:description", content: "Soluções por segmento — Brasília/DF." },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
  component: Segmentos,
});

const SEGMENTS = [
  { i: "building", t: "Pequenas empresas", d: "Estrutura contábil clara para crescer com organização." },
  { i: "growth", t: "Médias empresas", d: "Indicadores e processos para escalar com previsibilidade." },
  { i: "briefcase", t: "Prestadores de serviços", d: "Enquadramento adequado e gestão tributária eficiente." },
  { i: "users", t: "Profissionais liberais", d: "Apoio fiscal e financeiro para sua atividade autônoma." },
  { i: "shield", t: "Clínicas", d: "Compliance, faturamento e gestão financeira na medida." },
  { i: "doc", t: "Escritórios", d: "Organização de obrigações e gestão de honorários." },
  { i: "wallet", t: "E-commerces", d: "Tributação, conciliações e crescimento estruturado." },
  { i: "strategy", t: "Empresas B2B", d: "Modelos consultivos para vendas e operação complexa." },
  { i: "spark", t: "Startups", d: "Estrutura societária, regime tributário e cap table claro." },
  { i: "chart", t: "Empresas em expansão", d: "Acompanhamento estratégico para o próximo nível." },
] as const;

function Segmentos() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-20 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <div className="eyebrow !text-[#FFA06A]">Segmentos</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Empresas e perfis que atendemos em Brasília.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75">
            Conheça soluções personalizadas para o estágio e o setor do seu negócio.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEGMENTS.map((s) => (
            <div key={s.t} className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F8F5] text-[#385577]">
                <Icon name={s.i as never} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-[#385577] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <CTA to="/contato">Encontrar a melhor solução para minha empresa</CTA>
        </div>
      </Section>
    </>
  );
}
