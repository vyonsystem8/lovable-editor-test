import { useState } from "react";
import { trackEvent } from "@/lib/track";

const SERVICES = [
  "Contabilidade consultiva",
  "Abertura de empresa",
  "Gestão contábil mensal",
  "Planejamento tributário",
  "BPO financeiro",
  "Regularização de empresas",
  "Departamento pessoal",
  "Obrigações fiscais e contábeis",
  "Consultoria para crescimento",
  "Outro",
];

export function ContactForm({
  onSubmitSuccess,
  defaultService,
}: {
  onSubmitSuccess?: () => void;
  defaultService?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  const onFirstInteract = () => {
    if (!started) {
      setStarted(true);
      trackEvent("form_start");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    trackEvent("generate_lead_form", {
      service: fd.get("service"),
    });
    onSubmitSuccess?.();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-[#F8F8F5] border border-[#D8DDE4] p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F26B38] text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12l5 5L20 6"/></svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#182433]">Recebemos sua solicitação</h3>
        <p className="mt-2 text-sm text-[#385577]">
          Um especialista da Consync entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={onFirstInteract} className="grid gap-4">
      <Field label="Nome" name="name" placeholder="Seu nome completo" required />
      <Field label="Empresa" name="company" placeholder="Nome da empresa" />
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Telefone / WhatsApp" name="phone" placeholder="(61) 9 0000-0000" required />
        <Field label="E-mail" name="email" type="email" placeholder="voce@empresa.com" required />
      </div>
      <div>
        <label className="text-xs font-semibold text-[#385577] uppercase tracking-[0.12em]">
          Serviço de interesse
        </label>
        <select
          name="service"
          defaultValue={defaultService ?? ""}
          className="mt-1.5 h-11 w-full rounded-lg border border-[#D8DDE4] bg-white px-3 text-sm text-[#182433] outline-none focus:border-[#385577]"
        >
          <option value="" disabled>Selecione…</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-[#385577] uppercase tracking-[0.12em]">
          Mensagem
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Conte um pouco sobre sua empresa e o que você precisa."
          className="mt-1.5 w-full rounded-lg border border-[#D8DDE4] bg-white p-3 text-sm text-[#182433] outline-none focus:border-[#385577] resize-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#F26B38] px-6 text-sm font-semibold text-white hover:bg-[#e05f30] transition-colors"
      >
        Enviar solicitação
      </button>
      <p className="text-xs text-[#385577]">
        Ao enviar, você concorda com nossa Política de Privacidade.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-[#385577] uppercase tracking-[0.12em]">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 h-11 w-full rounded-lg border border-[#D8DDE4] bg-white px-3 text-sm text-[#182433] outline-none focus:border-[#385577]"
      />
    </div>
  );
}
