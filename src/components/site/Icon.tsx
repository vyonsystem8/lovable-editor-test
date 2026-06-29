type IconName =
  | "strategy" | "tech" | "shield" | "growth" | "handshake" | "brain"
  | "doc" | "chart" | "wallet" | "scale" | "briefcase" | "spark"
  | "check" | "arrow" | "building" | "users";

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "strategy": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="3"/></svg>);
    case "tech":     return (<svg {...common}><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>);
    case "shield":   return (<svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "growth":   return (<svg {...common}><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>);
    case "handshake":return (<svg {...common}><path d="M3 12l5-5 4 3 4-3 5 5-5 5-4-3-4 3z"/></svg>);
    case "brain":    return (<svg {...common}><path d="M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3"/><path d="M15 6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3"/><path d="M9 6h6M9 18h6M12 6v12"/></svg>);
    case "doc":      return (<svg {...common}><path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M8 13h8M8 17h6"/></svg>);
    case "chart":    return (<svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>);
    case "wallet":   return (<svg {...common}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 13h3"/><path d="M3 9V6a1 1 0 0 1 1-1h13"/></svg>);
    case "scale":    return (<svg {...common}><path d="M12 3v18M4 7h16M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z"/></svg>);
    case "briefcase":return (<svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);
    case "spark":    return (<svg {...common}><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>);
    case "check":    return (<svg {...common}><path d="M4 12l5 5L20 6"/></svg>);
    case "arrow":    return (<svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "building": return (<svg {...common}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/></svg>);
    case "users":    return (<svg {...common}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M15 20c0-2 2-3 4-3"/></svg>);
  }
}
