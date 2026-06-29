import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/track";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-[#F8F8F5]/85 backdrop-blur border-b border-[#D8DDE4]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Consync Contabilidade">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-[#182433]/80 hover:text-[#182433] transition-colors"
              activeProps={{ className: "text-sm font-semibold text-[#182433]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contato"
            onClick={() => trackEvent("cta_header_click", { location: "header" })}
            className="hidden md:inline-flex h-10 items-center rounded-full bg-[#F26B38] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[#e05f30] transition-colors"
          >
            Falar com especialista
          </Link>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#182433]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#D8DDE4] bg-[#F8F8F5]">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-[#182433]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => {
                trackEvent("cta_header_click", { location: "mobile_menu" });
                setOpen(false);
              }}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#F26B38] px-5 text-sm font-semibold text-white"
            >
              Falar com especialista
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#182433]">
        <span className="absolute inset-[6px] rounded-sm border border-[#FFA06A]" />
        <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#F26B38]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-tight text-[#182433]">Consync</span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#385577]">Contabilidade</span>
      </span>
    </span>
  );
}
