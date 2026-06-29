import { Link } from "@tanstack/react-router";
import { trackEvent } from "@/lib/track";

export function Footer() {
  return (
    <footer className="bg-[#182433] text-[#F8F8F5]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
              <span className="absolute inset-[7px] rounded-sm border border-[#FFA06A]" />
              <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-[#F26B38]" />
            </span>
            <div className="leading-none">
              <div className="text-base font-extrabold tracking-tight">Consync</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Contabilidade</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/70">
            Contabilidade consultiva em Brasília. Tecnologia, estratégia e proximidade para empresas que querem crescer com segurança.
          </p>
        </div>
        <FooterCol title="Navegação" links={[
          { to: "/", label: "Início" },
          { to: "/sobre", label: "Sobre" },
          { to: "/solucoes", label: "Soluções" },
          { to: "/segmentos", label: "Segmentos" },
          { to: "/blog", label: "Blog" },
          { to: "/contato", label: "Contato" },
        ]} />
        <FooterCol title="Soluções" links={[
          { to: "/contabilidade-consultiva-brasilia", label: "Contabilidade consultiva" },
          { to: "/abertura-de-empresa-brasilia", label: "Abertura de empresa" },
          { to: "/bpo-financeiro-brasilia", label: "BPO financeiro" },
          { to: "/planejamento-tributario-brasilia", label: "Planejamento tributário" },
          { to: "/contabilidade-para-prestadores-de-servicos", label: "Para prestadores de serviços" },
          { to: "/contabilidade-para-empresas-em-crescimento", label: "Empresas em crescimento" },
        ]} />
        <div className="md:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Brasília — DF</li>
            <li>
              <a
                href="mailto:contato@consync.com.br"
                onClick={() => trackEvent("email_click", { location: "footer" })}
                className="hover:text-[#FFA06A]"
              >
                contato@consync.com.br
              </a>
            </li>
            <li>Seg a Sex · 9h às 18h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Consync Contabilidade. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div className="md:col-span-3">
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-[#FFA06A]">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
