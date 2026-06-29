import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { HeroBg } from "@/components/site/HeroBg";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Consync Contabilidade" },
      { name: "description", content: "Política de privacidade da Consync Contabilidade — como tratamos dados pessoais conforme a LGPD." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-16 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Política de Privacidade</h1>
          <p className="mt-4 text-white/70">Última atualização: 29 de junho de 2026</p>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-[#385577] leading-relaxed">
          <p>A Consync Contabilidade leva a sua privacidade a sério. Esta página descreve como tratamos dados pessoais coletados pelo nosso site.</p>
          <h2 className="text-xl font-bold text-[#182433]">Dados coletados</h2>
          <p>Coletamos apenas as informações que você nos fornece, como nome, e-mail, telefone, empresa e mensagem em formulários de contato. Também coletamos dados de navegação por meio de ferramentas como Google Analytics e Meta Pixel.</p>
          <h2 className="text-xl font-bold text-[#182433]">Uso das informações</h2>
          <p>Os dados são utilizados exclusivamente para responder solicitações, prestar serviços, melhorar a experiência no site e cumprir obrigações legais.</p>
          <h2 className="text-xl font-bold text-[#182433]">Compartilhamento</h2>
          <p>Não vendemos seus dados. Compartilhamos informações apenas com prestadores que apoiam nossas operações, sob obrigação de sigilo.</p>
          <h2 className="text-xl font-bold text-[#182433]">Seus direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento, conforme a Lei Geral de Proteção de Dados (LGPD), pelo e-mail contato@consync.com.br.</p>
          <h2 className="text-xl font-bold text-[#182433]">Contato</h2>
          <p>Para dúvidas sobre privacidade e proteção de dados, fale conosco em contato@consync.com.br.</p>
        </div>
      </Section>
    </>
  );
}
