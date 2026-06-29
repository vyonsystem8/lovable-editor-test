import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  dark = false,
  align = "left",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-[#182433] text-white" : "bg-[#F8F8F5] text-[#182433]"} py-20 md:py-28 ${className}`}
    >
      <div className="container-x">
        {(eyebrow || title || description) && (
          <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
            {eyebrow && (
              <div className={`eyebrow ${dark ? "!text-[#FFA06A]" : ""}`}>{eyebrow}</div>
            )}
            {title && (
              <h2 className="mt-4 text-3xl md:text-[40px] leading-[1.1] font-extrabold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? "text-white/70" : "text-[#385577]"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
