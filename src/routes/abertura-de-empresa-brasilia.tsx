import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICE_PAGES } from "@/lib/service-pages";

const data = SERVICE_PAGES["abertura-de-empresa-brasilia"];

export const Route = createFileRoute("/abertura-de-empresa-brasilia")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDesc },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDesc },
      { property: "og:url", content: data.canonical },
    ],
    links: [{ rel: "canonical", href: data.canonical }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: () => <ServicePage {...data} />,
});
