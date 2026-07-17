import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { HeroBg } from "@/components/site/HeroBg";
import { Icon } from "@/components/site/Icon";
import { whatsappUrl } from "@/lib/track";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consync Contabilidade | Contabilidade Consultiva em Brasília" },
      {
        name: "description",
        content:
          "Contabilidade consultiva, tecnologia e estratégia para empresas em Brasília. Organização financeira, planejamento tributário e crescimento sustentável.",
      },
      {
        property: "og:title",
        content: "Consync Contabilidade | Contabilidade Consultiva em Brasília",
      },
      {
        property: "og:description",
        content:
          "Contabilidade inteligente para empresas que querem crescer com segurança em Brasília.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Consync Contabilidade",
          description:
            "Contabilidade consultiva em Brasília — tecnologia, estratégia e proximidade.",
          areaServed: "Brasília, DF",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Brasília",
            addressRegion: "DF",
            addressCountry: "BR",
          },
          url: "/",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HomeMotion />
      <Hero />
      <Sobre />
      <PorQue />
      <Solucoes />
      <Consultiva />
      <Tecnologia />
      <Segmentos />
      <Processo />
      <Depoimentos />
      <BlogHome />
      <FaqHome />
      <CtaFinal />
    </>
  );
}

function Hero() {
  return (
    <section className="home-hero relative overflow-hidden bg-[#182433] text-white pt-28 md:pt-36 pb-24 md:pb-32 -mt-20">
      <HeroBg />
      <div className="container-x relative">
        <div className="max-w-3xl hero-copy">
          <div className="cinematic-in eyebrow !text-[#FFA06A]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F26B38]" />
            Contabilidade Consultiva · Brasília/DF
          </div>
          <h1 className="cinematic-in mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Contabilidade inteligente para empresas que querem{" "}
            <span className="text-[#FFA06A]">crescer com segurança</span>.
          </h1>
          <p className="cinematic-in mt-7 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed">
            A Consync une tecnologia, estratégia e proximidade para transformar a contabilidade em
            uma ferramenta de gestão, organização e crescimento para o seu negócio em Brasília.
          </p>
          <div className="cinematic-in mt-10 flex flex-wrap gap-3">
            <CTA to="/contato" event="cta_hero_click" eventParams={{ cta: "primary" }}>
              Falar com um especialista
            </CTA>
            <CTA
              to="/solucoes"
              variant="ghost-dark"
              event="cta_hero_click"
              eventParams={{ cta: "secondary" }}
            >
              Conhecer soluções
            </CTA>
          </div>
          <div className="cinematic-in mt-14 grid grid-cols-3 max-w-xl gap-6 text-white/70 text-sm">
            <Stat n="+10 anos" l="de experiência" value={10} prefix="+" suffix=" anos" />
            <Stat n="100%" l="digital e consultivo" value={100} suffix="%" />
            <Stat n="Brasília" l="DF e região" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.style.removeProperty("--hero-scroll");
      return;
    }

    root.classList.add("motion-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section:not(.home-hero) .rounded-2xl, main section:not(.home-hero) .rounded-xl, main section:not(.home-hero) article, main section:not(.home-hero) .group",
      ),
    );

    revealTargets.forEach((el, index) => {
      el.classList.add("reveal-on-scroll");
      el.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const reveal = (target: Element) => {
      target.classList.add("is-visible");
    };

    let observer: IntersectionObserver | null = null;
    let revealFallback = 0;

    if (typeof window.IntersectionObserver === "function") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      );

      revealTargets.forEach((el) => observer?.observe(el));
      revealFallback = window.setTimeout(() => {
        revealTargets.forEach(reveal);
        observer?.disconnect();
      }, 1800);
    } else {
      revealTargets.forEach(reveal);
    }

    let frame = 0;
    const updateHeroScroll = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / 520, 1);
      root.style.setProperty("--hero-scroll", progress.toFixed(3));
    };
    const onScroll = () => {
      if (frame) return;
      if (typeof window.requestAnimationFrame === "function") {
        frame = window.requestAnimationFrame(updateHeroScroll);
        return;
      }
      updateHeroScroll();
    };

    updateHeroScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      if (revealFallback) window.clearTimeout(revealFallback);
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(frame);
      }
      root.style.removeProperty("--hero-scroll");
    };
  }, []);

  return null;
}

function Stat({
  n,
  l,
  value,
  prefix = "",
  suffix = "",
}: {
  n: string;
  l: string;
  value?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(value === undefined ? n : `${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value === undefined) return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(n);
      return;
    }

    if (
      typeof window.IntersectionObserver !== "function" ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      setDisplay(n);
      return;
    }

    let frame = 0;
    let start = 0;
    const duration = 1400;

    const run = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.round(value * eased)}${suffix}`);
      if (progress < 1) frame = window.requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        frame = window.requestAnimationFrame(run);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (frame && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [n, prefix, suffix, value]);

  return (
    <div ref={ref} className="stat-card border-l border-white/15 pl-4">
      <div className="text-2xl font-extrabold text-white">{display}</div>
      <div className="text-xs mt-1 uppercase tracking-[0.14em] text-white/55">{l}</div>
    </div>
  );
}

function Sobre() {
  const pillars = [
    { i: "brain", t: "Inteligência", d: "Análises e indicadores para decisões mais seguras." },
    { i: "strategy", t: "Estratégia", d: "Visão consultiva alinhada ao seu plano de crescimento." },
    { i: "tech", t: "Tecnologia", d: "Processos digitais e dados em tempo real." },
    { i: "handshake", t: "Proximidade", d: "Atendimento próximo, humano e dedicado." },
  ] as const;
  return (
    <Section
      eyebrow="Sobre a Consync"
      title={
        <>
          Uma contabilidade pensada para{" "}
          <span className="text-[#385577]">empresas em movimento</span>.
        </>
      }
      description="Somos uma contabilidade consultiva em Brasília, fundada por cinco sócios jovens que acreditam em uma nova forma de fazer contabilidade — orientada por dados, processos e relacionamento próximo."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p) => (
          <div key={p.t} className="rounded-2xl border border-[#D8DDE4] bg-white p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#182433] text-white">
              <Icon name={p.i as never} />
            </div>
            <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
            <p className="mt-2 text-sm text-[#385577] leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <CTA
          to="/sobre"
          variant="outline"
          event="cta_middle_click"
          eventParams={{ section: "sobre" }}
        >
          Conhecer a Consync
        </CTA>
      </div>
    </Section>
  );
}

function PorQue() {
  const items = [
    {
      t: "Visão estratégica",
      d: "Vamos além das obrigações: ajudamos você a interpretar números e decidir com clareza.",
    },
    {
      t: "Processos digitais",
      d: "Tecnologia, automações e plataformas para reduzir atritos do dia a dia.",
    },
    { t: "Atendimento próximo", d: "Consultores dedicados que conhecem sua empresa pelo nome." },
    {
      t: "Foco no crescimento",
      d: "Indicadores e direção para escalar com previsibilidade e segurança.",
    },
    { t: "Segurança e conformidade", d: "Obrigações fiscais e contábeis em dia, sem surpresas." },
    {
      t: "Time multidisciplinar",
      d: "Contabilidade, tributário, financeiro e pessoal sob o mesmo teto.",
    },
  ];
  return (
    <Section
      eyebrow="Por que escolher a Consync"
      title="Por que centenas de empresas escolhem uma contabilidade consultiva"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8DDE4] border border-[#D8DDE4] rounded-2xl overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className="bg-white p-7">
            <div className="text-xs font-semibold tracking-[0.18em] text-[#F26B38]">0{i + 1}</div>
            <h3 className="mt-3 text-lg font-bold">{it.t}</h3>
            <p className="mt-2 text-sm text-[#385577] leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const SOLUTIONS = [
  {
    t: "Contabilidade consultiva",
    d: "Visão estratégica e orientação contínua para sua empresa.",
    to: "/contabilidade-consultiva-brasilia",
    i: "brain",
  },
  {
    t: "Abertura de empresa",
    d: "CNPJ, enquadramento tributário e estrutura inicial sob medida.",
    to: "/abertura-de-empresa-brasilia",
    i: "building",
  },
  {
    t: "Gestão contábil mensal",
    d: "Rotina contábil, escrituração e relatórios mensais.",
    to: "/solucoes",
    i: "doc",
  },
  {
    t: "Planejamento tributário",
    d: "Redução de riscos e eficiência fiscal para o seu modelo.",
    to: "/planejamento-tributario-brasilia",
    i: "scale",
  },
  {
    t: "BPO financeiro",
    d: "Contas a pagar e receber, fluxo de caixa e relatórios.",
    to: "/bpo-financeiro-brasilia",
    i: "wallet",
  },
  {
    t: "Departamento pessoal",
    d: "Folha, admissões, demissões e obrigações trabalhistas.",
    to: "/solucoes",
    i: "users",
  },
] as const;

function Solucoes() {
  return (
    <Section
      eyebrow="Soluções"
      title="Soluções contábeis para o seu estágio de negócio"
      description="Da abertura ao crescimento — soluções modulares, integradas e consultivas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SOLUTIONS.map((s) => (
          <Link
            key={s.t}
            to={s.to}
            className="group rounded-2xl border border-[#D8DDE4] bg-white p-7 transition-all hover:border-[#182433] hover:shadow-[0_10px_40px_-20px_rgba(24,36,51,0.3)]"
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F8F8F5] text-[#385577] group-hover:bg-[#182433] group-hover:text-white transition-colors">
                <Icon name={s.i as never} />
              </div>
              <Icon
                name="arrow"
                className="h-4 w-4 text-[#385577] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </div>
            <h3 className="mt-6 text-lg font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-[#385577] leading-relaxed">{s.d}</p>
            <div className="mt-5 text-sm font-semibold text-[#F26B38]">Solicitar diagnóstico →</div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <CTA to="/solucoes" variant="outline">
          Ver todas as soluções
        </CTA>
      </div>
    </Section>
  );
}

function Consultiva() {
  const items = [
    "Análise de indicadores e relatórios gerenciais",
    "Apoio na tomada de decisões financeiras",
    "Acompanhamento próximo do seu consultor",
    "Revisão tributária e oportunidades fiscais",
    "Direcionamento para crescimento e expansão",
  ];
  return (
    <Section
      eyebrow="Contabilidade Consultiva"
      title="Contabilidade como ferramenta de gestão — não apenas obrigação"
      dark
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-lg text-white/75 leading-relaxed">
            A contabilidade consultiva transforma dados contábeis em direção estratégica. Você ganha
            visibilidade sobre o seu negócio, previsibilidade sobre os próximos passos e clareza
            para crescer com segurança.
          </p>
          <ul className="mt-7 space-y-3">
            {items.map((it) => (
              <li key={it} className="flex gap-3 text-white/85">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F26B38] text-white">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <CTA to="/contabilidade-consultiva-brasilia">Saber mais</CTA>
          </div>
        </div>
        <div className="lg:col-span-6">
          <ConsultiveCard />
        </div>
      </div>
    </Section>
  );
}

function ConsultiveCard() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-white/55">Painel da empresa</div>
          <div className="mt-1 text-lg font-bold">Indicadores · Junho/26</div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFA06A]/15 px-3 py-1 text-xs font-semibold text-[#FFA06A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFA06A]" /> Em alta
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { l: "Receita", v: "R$ 312k", c: "+18%" },
          { l: "Margem", v: "27%", c: "+3pp" },
          { l: "Caixa", v: "R$ 184k", c: "+9%" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl border border-white/10 p-4">
            <div className="text-[11px] uppercase tracking-widest text-white/55">{k.l}</div>
            <div className="mt-2 text-xl font-extrabold">{k.v}</div>
            <div className="mt-1 text-xs text-[#FFA06A]">{k.c}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 400 140" className="mt-6 w-full" fill="none">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F26B38" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F26B38" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 110 L40 95 L80 100 L120 70 L160 80 L200 55 L240 60 L280 35 L320 45 L360 25 L400 30 L400 140 L0 140 Z"
          fill="url(#g)"
        />
        <path
          d="M0 110 L40 95 L80 100 L120 70 L160 80 L200 55 L240 60 L280 35 L320 45 L360 25 L400 30"
          stroke="#F26B38"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function Tecnologia() {
  const items = [
    {
      i: "tech",
      t: "Plataforma digital",
      d: "Acesso à sua contabilidade em qualquer lugar, com segurança.",
    },
    {
      i: "chart",
      t: "Relatórios gerenciais",
      d: "Indicadores claros para acompanhar a saúde do seu negócio.",
    },
    {
      i: "spark",
      t: "Automação de rotinas",
      d: "Menos retrabalho operacional e mais foco no que importa.",
    },
    { i: "shield", t: "Segurança de dados", d: "Processos auditáveis e conformidade com a LGPD." },
  ] as const;
  return (
    <Section eyebrow="Tecnologia e Inteligência" title="Plataforma, dados e processos integrados">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <div key={it.t} className="rounded-2xl border border-[#D8DDE4] bg-white p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F8F5] text-[#385577]">
              <Icon name={it.i as never} />
            </div>
            <h3 className="mt-5 text-lg font-bold">{it.t}</h3>
            <p className="mt-2 text-sm text-[#385577] leading-relaxed">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Segmentos() {
  const segs = [
    "Pequenas empresas",
    "Médias empresas",
    "Prestadores de serviços",
    "Profissionais liberais",
    "Clínicas",
    "Escritórios",
    "E-commerces",
    "Empresas B2B",
    "Startups",
    "Empresas em expansão",
  ];
  return (
    <Section
      eyebrow="Segmentos"
      title="Atendemos empresas com diferentes perfis e estágios"
      description="Soluções pensadas para o estágio e o setor do seu negócio."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {segs.map((s) => (
          <div
            key={s}
            className="rounded-xl border border-[#D8DDE4] bg-white p-4 text-sm font-semibold text-[#182433]"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-10">
        <CTA to="/segmentos" variant="outline">
          Encontrar a melhor solução para minha empresa
        </CTA>
      </div>
    </Section>
  );
}

function Processo() {
  const steps = [
    { t: "Diagnóstico", d: "Entendemos seu momento, modelo de negócio e prioridades." },
    { t: "Plano", d: "Definimos o regime tributário, soluções e cronograma de implantação." },
    { t: "Implantação", d: "Migração assistida, integrações e organização inicial." },
    { t: "Acompanhamento", d: "Consultor dedicado e revisões periódicas com indicadores." },
  ];
  return (
    <Section eyebrow="Processo" title="Como atendemos a sua empresa" dark>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-xs font-semibold tracking-[0.18em] text-[#FFA06A]">0{i + 1}</div>
            <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Depoimentos() {
  return (
    <Section eyebrow="Depoimentos" title="O que dizem nossos clientes">
      <div className="grid md:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-[#D8DDE4] bg-white p-7">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="#F26B38">
              <path d="M0 18V9C0 4 3 1 8 0v4C5 5 4 7 4 9h4v9H0zm12 0V9c0-5 3-8 8-9v4c-3 1-4 3-4 5h4v9h-8z" />
            </svg>
            <p className="mt-5 text-[15px] leading-relaxed text-[#182433]">
              Em breve, depoimentos reais dos nossos clientes em Brasília. A Consync tem como
              compromisso registrar e compartilhar a evolução de cada empresa que confia em nosso
              trabalho.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[#D8DDE4]" />
              <div>
                <div className="text-sm font-bold">Cliente Consync</div>
                <div className="text-xs text-[#385577]">Brasília — DF</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BlogHome() {
  return (
    <Section
      eyebrow="Blog"
      title="Conteúdos para empresários"
      description="Artigos sobre gestão, tributação e crescimento empresarial."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {BLOG_POSTS.slice(0, 3).map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group rounded-2xl border border-[#D8DDE4] bg-white overflow-hidden hover:border-[#182433] transition-colors"
          >
            <div className="aspect-[16/10] bg-[#182433] relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute bottom-4 left-4 right-4 text-white/80 text-xs uppercase tracking-widest">
                {p.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold leading-snug group-hover:text-[#F26B38] transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-[#385577] line-clamp-2">{p.excerpt}</p>
              <div className="mt-4 text-xs text-[#385577]">{p.readingTime} min de leitura</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <CTA to="/blog" variant="outline">
          Ver todos os artigos
        </CTA>
      </div>
    </Section>
  );
}

function FaqHome() {
  const faqs = [
    {
      q: "O que é contabilidade consultiva?",
      a: "É uma abordagem que vai além das obrigações fiscais e contábeis. A Consync atua como uma extensão da sua gestão, com indicadores, planejamento tributário e direcionamento estratégico contínuo.",
    },
    {
      q: "Vocês atendem empresas fora de Brasília?",
      a: "Sim. Apesar de Brasília/DF ser nossa praça principal, atendemos clientes em todo o Brasil de forma 100% digital.",
    },
    {
      q: "Como funciona a troca de contabilidade?",
      a: "Conduzimos o processo de migração ponta a ponta, garantindo continuidade das obrigações, regularidade fiscal e organização dos dados.",
    },
    {
      q: "Quanto custa a contabilidade da Consync?",
      a: "O investimento é definido após um diagnóstico gratuito, considerando regime tributário, volume de notas, funcionários e serviços contratados.",
    },
    {
      q: "Vocês fazem abertura de empresa?",
      a: "Sim. Cuidamos de toda a parte burocrática, escolha do regime tributário, CNAEs e estrutura inicial mais adequada ao seu negócio.",
    },
  ];
  return (
    <Section eyebrow="Perguntas frequentes" title="Dúvidas mais comuns">
      <FAQ items={faqs} />
    </Section>
  );
}

function CtaFinal() {
  return (
    <section className="relative bg-[#182433] text-white overflow-hidden">
      <HeroBg />
      <div className="container-x relative py-20 md:py-28 text-center max-w-3xl mx-auto">
        <div className="eyebrow !text-[#FFA06A]">Pronto para começar?</div>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
          Vamos transformar a contabilidade do seu negócio em{" "}
          <span className="text-[#FFA06A]">direção estratégica</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg">
          Solicite um diagnóstico gratuito e descubra o melhor caminho para organizar e crescer a
          sua empresa em Brasília.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CTA to="/contato" event="cta_final_click" eventParams={{ section: "home_final" }}>
            Falar com um especialista
          </CTA>
          <CTA
            href={whatsappUrl()}
            variant="ghost-dark"
            event="cta_whatsapp_click"
            eventParams={{ location: "home_final" }}
          >
            Falar no WhatsApp
          </CTA>
        </div>
      </div>
    </section>
  );
}

// Shared blog posts data (also used by /blog and /blog/$slug)
export const BLOG_POSTS = [
  {
    slug: "como-escolher-uma-contabilidade-em-brasilia",
    title: "Como escolher uma contabilidade em Brasília",
    category: "Gestão empresarial",
    excerpt:
      "Critérios para avaliar uma contabilidade moderna e consultiva em Brasília, indo além do preço.",
    readingTime: 6,
  },
  {
    slug: "o-que-e-contabilidade-consultiva",
    title: "O que é contabilidade consultiva e como ela ajuda sua empresa",
    category: "Contabilidade consultiva",
    excerpt:
      "Entenda a diferença entre contabilidade tradicional e consultiva e como ela apoia a sua gestão.",
    readingTime: 5,
  },
  {
    slug: "quando-contratar-bpo-financeiro",
    title: "Quando contratar BPO financeiro para sua empresa",
    category: "BPO financeiro",
    excerpt:
      "Sinais de que sua empresa precisa terceirizar o financeiro para ganhar previsibilidade.",
    readingTime: 7,
  },
  {
    slug: "abertura-de-empresa-em-brasilia",
    title: "Abertura de empresa em Brasília: o que você precisa saber",
    category: "Abertura de empresa",
    excerpt: "Passos, documentos, prazos e dicas para abrir sua empresa em Brasília com segurança.",
    readingTime: 6,
  },
  {
    slug: "planejamento-tributario",
    title: "Planejamento tributário: como reduzir riscos e organizar sua empresa",
    category: "Tributação",
    excerpt: "Como o planejamento tributário ajuda a reduzir custos e proteger sua empresa.",
    readingTime: 8,
  },
] as const;
