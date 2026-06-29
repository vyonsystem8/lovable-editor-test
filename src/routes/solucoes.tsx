import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { HeroBg } from "@/components/site/HeroBg";
import { Icon } from "@/components/site/Icon";
import { trackEvent } from "@/lib/track";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções Contábeis em Brasília | Consync" },
      { name: "description", content: "Soluções contábeis consultivas em Brasília: contabilidade, abertura de empresa, BPO financeiro, planejamento tributário, departamento pessoal e mais." },
      { property: "og:title", content: "Soluções Contábeis | Consync" },
      { property: "og:description", content: "Soluções modulares e integradas para empresas em Brasília." },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: Solucoes,
});

const SERVICES = [
  { t: "Contabilidade consultiva", d: "Visão estratégica, indicadores e direcionamento contínuo para sua empresa.", to: "/contabilidade-consultiva-brasilia", i: "brain" },
  { t: "Abertura de empresa", d: "CNPJ, enquadramento tributário e estrutura inicial sob medida.", to: "/abertura-de-empresa-brasilia", i: "building" },
  { t: "Gestão contábil mensal", d: "Escrituração, apurações e relatórios contábeis com qualidade.", to: "/contato", i: "doc" },
  { t: "Planejamento tributário", d: "Escolha do melhor regime e redução de riscos fiscais.", to: "/planejamento-tributario-brasilia", i: "scale" },
  { t: "BPO financeiro", d: "Contas a pagar e receber, fluxo de caixa e relatórios.", to: "/bpo-financeiro-brasilia", i: "wallet" },
  { t: "Regularização de empresas", d: "Diagnóstico, regularização fiscal e parcelamentos.", to: "/contato", i: "shield" },
  { t: "Departamento pessoal", d: "Folha, admissões, demissões e obrigações trabalhistas.", to: "/contato", i: "users" },
  { t: "Obrigações fiscais e contábeis", d: "Cumprimento de obrigações com precisão e prazos em dia.", to: "/contato", i: "doc" },
  { t: "Consultoria para crescimento", d: "Apoio para escalar com previsibilidade e segurança.", to: "/contabilidade-para-empresas-em-crescimento", i: "growth" },
] as const;

function Solucoes() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-20 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <div className="eyebrow !text-[#FFA06A]">Soluções Consync</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Soluções contábeis para cada estágio do seu negócio.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75">
            Da abertura ao crescimento — soluções modulares, integradas e consultivas.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.t}
              to={s.to}
              onClick={() => trackEvent("service_card_click", { service: s.t })}
              className="group rounded-2xl border border-[#D8DDE4] bg-white p-7 hover:border-[#182433] hover:shadow-[0_10px_40px_-20px_rgba(24,36,51,0.3)] transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F8F5] text-[#385577] group-hover:bg-[#182433] group-hover:text-white transition-colors">
                  <Icon name={s.i as never} />
                </div>
                <Icon name="arrow" className="h-4 w-4 text-[#385577] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="mt-6 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-[#385577] leading-relaxed">{s.d}</p>
              <div className="mt-5 text-sm font-semibold text-[#F26B38]">Solicitar diagnóstico →</div>
            </Link>
          ))}
        </div>
        <div className="mt-14 text-center">
          <CTA to="/contato" event="cta_final_click" eventParams={{ page: "solucoes" }}>
            Quero organizar minha empresa
          </CTA>
        </div>
      </Section>
    </>
  );
}
