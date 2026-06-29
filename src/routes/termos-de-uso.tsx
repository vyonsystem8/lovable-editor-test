import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { HeroBg } from "@/components/site/HeroBg";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Consync Contabilidade" },
      { name: "description", content: "Termos de uso do site da Consync Contabilidade." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-16 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Termos de Uso</h1>
          <p className="mt-4 text-white/70">Última atualização: 29 de junho de 2026</p>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-[#385577] leading-relaxed">
          <p>Ao navegar pelo site da Consync Contabilidade, você concorda com os termos descritos nesta página.</p>
          <h2 className="text-xl font-bold text-[#182433]">Uso do site</h2>
          <p>O conteúdo deste site tem caráter informativo. As soluções e condições comerciais são definidas após análise consultiva de cada caso.</p>
          <h2 className="text-xl font-bold text-[#182433]">Propriedade intelectual</h2>
          <p>Todo o conteúdo, marca, identidade visual e materiais publicados são de propriedade da Consync Contabilidade. É proibida a reprodução sem autorização.</p>
          <h2 className="text-xl font-bold text-[#182433]">Limitação de responsabilidade</h2>
          <p>A Consync não se responsabiliza por decisões tomadas exclusivamente com base em conteúdos informativos do site, sem orientação consultiva específica.</p>
          <h2 className="text-xl font-bold text-[#182433]">Atualizações</h2>
          <p>Estes termos podem ser atualizados a qualquer momento. Recomendamos consulta periódica.</p>
        </div>
      </Section>
    </>
  );
}
