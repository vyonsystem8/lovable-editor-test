import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { HeroBg } from "@/components/site/HeroBg";
import { BLOG_POSTS } from "./index";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | Consync` : "Artigo | Consync";
    const desc = post?.excerpt ?? "Artigo Consync";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${post?.slug ?? ""}` }],
      scripts: post
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              author: { "@type": "Organization", name: "Equipe Consync" },
              publisher: { "@type": "Organization", name: "Consync Contabilidade" },
            }),
          }]
        : [],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <Section title="Artigo não encontrado">
      <p className="text-[#385577]">O artigo solicitado não foi encontrado.</p>
      <div className="mt-6"><CTA to="/blog" variant="outline">Voltar ao blog</CTA></div>
    </Section>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-16 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <nav className="text-xs text-white/60">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{post.category}</span>
          </nav>
          <div className="mt-6 eyebrow !text-[#FFA06A]">{post.category}</div>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">{post.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
            <span>Equipe Consync</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{post.readingTime} min de leitura</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow">Sumário</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="text-[#385577] hover:text-[#182433]" href="#contexto">Contexto</a></li>
                <li><a className="text-[#385577] hover:text-[#182433]" href="#pontos">Pontos principais</a></li>
                <li><a className="text-[#385577] hover:text-[#182433]" href="#como-aplicar">Como aplicar</a></li>
                <li><a className="text-[#385577] hover:text-[#182433]" href="#conclusao">Conclusão</a></li>
              </ul>
            </div>
          </aside>
          <article className="lg:col-span-9 order-1 lg:order-2 prose prose-lg max-w-none">
            <p className="text-lg text-[#385577] leading-relaxed">{post.excerpt}</p>

            <h2 id="contexto" className="mt-10 text-2xl font-bold text-[#182433]">Contexto</h2>
            <p className="mt-4 text-[#385577] leading-relaxed">
              Empresas em Brasília vivem um momento de transformação em sua gestão contábil. A demanda por uma contabilidade que apoie decisões — e não apenas cumpra obrigações — cresce a cada ano.
            </p>

            <h2 id="pontos" className="mt-10 text-2xl font-bold text-[#182433]">Pontos principais</h2>
            <ul className="mt-4 space-y-2 text-[#385577]">
              <li>• Visão consultiva e indicadores claros</li>
              <li>• Tecnologia para reduzir retrabalho</li>
              <li>• Atendimento próximo e dedicado</li>
              <li>• Segurança e conformidade fiscal</li>
            </ul>

            <div className="mt-10 rounded-2xl border border-[#D8DDE4] bg-[#F8F8F5] p-6 not-prose">
              <div className="eyebrow">Receba um diagnóstico</div>
              <h3 className="mt-2 text-xl font-bold">Quer aplicar isso na sua empresa?</h3>
              <p className="mt-2 text-sm text-[#385577]">Solicite um diagnóstico gratuito com um especialista da Consync.</p>
              <div className="mt-5"><CTA to="/contato" event="cta_middle_click" eventParams={{ slug: post.slug }}>Solicitar diagnóstico</CTA></div>
            </div>

            <h2 id="como-aplicar" className="mt-10 text-2xl font-bold text-[#182433]">Como aplicar</h2>
            <p className="mt-4 text-[#385577] leading-relaxed">
              Comece por um diagnóstico do momento atual: estrutura societária, regime tributário, processos financeiros e maturidade contábil. A partir daí, defina um plano de implantação e acompanhamento contínuo.
            </p>

            <h2 id="conclusao" className="mt-10 text-2xl font-bold text-[#182433]">Conclusão</h2>
            <p className="mt-4 text-[#385577] leading-relaxed">
              A contabilidade consultiva transforma números em direção. Para empresas em Brasília que querem crescer com segurança, contar com um parceiro estratégico é decisivo.
            </p>

            <div className="mt-12 not-prose">
              <CTA to="/contato" event="cta_final_click" eventParams={{ slug: post.slug }}>Falar com um especialista</CTA>
            </div>
          </article>
        </div>
      </Section>

      <Section eyebrow="Continue lendo" title="Artigos relacionados">
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}
              className="group rounded-2xl border border-[#D8DDE4] bg-white overflow-hidden hover:border-[#182433] transition-colors">
              <div className="aspect-[16/10] bg-[#182433] relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute bottom-4 left-4 right-4 text-white/80 text-xs uppercase tracking-widest">{p.category}</div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold leading-snug group-hover:text-[#F26B38] transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-[#385577] line-clamp-2">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
