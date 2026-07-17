import { useState } from "react";
import { trackEvent } from "@/lib/track";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#D8DDE4] border-y border-[#D8DDE4]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => {
                setOpen(isOpen ? null : i);
                if (!isOpen) trackEvent("faq_open", { question: it.q });
              }}
              className="faq-trigger flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-base md:text-lg font-semibold text-[#182433]">{it.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8DDE4] text-[#385577] transition-all duration-300 ${isOpen ? "rotate-45 bg-[#F26B38] text-white border-[#F26B38]" : ""}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity,filter] duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 blur-0"
                  : "grid-rows-[0fr] opacity-0 blur-[2px]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-12 text-[15px] leading-relaxed text-[#385577]">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
