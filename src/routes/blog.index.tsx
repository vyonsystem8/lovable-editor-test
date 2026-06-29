import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { HeroBg } from "@/components/site/HeroBg";
import { trackEvent } from "@/lib/track";
import { BLOG_POSTS } from "./index";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog Consync | Contabilidade Consultiva e Gestão Empresarial" },
      { name: "description", content: "Artigos sobre contabilidade consultiva, planejamento tributário, BPO financeiro, abertura de empresa e gestão empresarial em Brasília." },
      { property: "og:title", content: "Blog Consync Contabilidade" },
      { property: "og:description", content: "Conteúdos para empresários em Brasília." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogList,
});

function BlogList() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-16 -mt-20">
        <HeroBg />
        <div className="container-x relative max-w-3xl">
          <div className="eyebrow !text-[#FFA06A]">Blog</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Conteúdos para quem quer crescer com inteligência.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75">
            Gestão empresarial, contabilidade consultiva, tributação, abertura de empresa, BPO financeiro e crescimento.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              onClick={() => trackEvent("blog_article_click", { slug: p.slug })}
              className="group rounded-2xl border border-[#D8DDE4] bg-white overflow-hidden hover:border-[#182433] transition-colors"
            >
              <div className="aspect-[16/10] bg-[#182433] relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute bottom-4 left-4 right-4 text-white/80 text-xs uppercase tracking-widest">{p.category}</div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold leading-snug group-hover:text-[#F26B38] transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-[#385577] line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 text-xs text-[#385577]">{p.readingTime} min de leitura</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
