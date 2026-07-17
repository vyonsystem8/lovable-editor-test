import { Link } from "@tanstack/react-router";
import { trackEvent, type TrackEventName } from "@/lib/track";

type ButtonVariant = "coral" | "outline" | "ghost-dark";

const styles: Record<ButtonVariant, string> = {
  coral:
    "bg-[#F26B38] text-white hover:bg-[#e05f30] shadow-[0_10px_30px_-12px_rgba(242,107,56,0.55)]",
  outline: "border border-[#385577]/30 text-[#182433] hover:border-[#182433] bg-transparent",
  "ghost-dark": "border border-white/20 text-white hover:bg-white/10",
};

export function CTA({
  to,
  href,
  variant = "coral",
  event,
  eventParams,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  event?: TrackEventName;
  eventParams?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "premium-cta inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm font-semibold transition-all duration-300";
  const cls = `${base} ${styles[variant]} ${className}`;
  const onClick = () => event && trackEvent(event, eventParams);
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/contato"} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}
