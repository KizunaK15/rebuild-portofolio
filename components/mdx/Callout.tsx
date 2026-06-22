import { Info, AlertTriangle, Lightbulb } from "lucide-react";

interface CalloutProps {
  type: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const config = {
  info: {
    icon: Info,
    background: "var(--color-type-education)",
    label: "Info",
    role: "note" as const,
  },
  warning: {
    icon: AlertTriangle,
    background: "var(--color-type-competition)",
    label: "Warning",
    role: "alert" as const,
  },
  tip: {
    icon: Lightbulb,
    background: "var(--color-type-project)",
    label: "Tip",
    role: "note" as const,
  },
};

export function Callout({ type, children }: CalloutProps) {
  const { icon: Icon, background, label, role } = config[type];

  return (
    <aside
      role={role}
      aria-label={label}
      style={{
        borderLeft: `4px solid ${background}`,
        background: `color-mix(in srgb, ${background} 12%, transparent)`,
      }}
      className="flex gap-3 rounded-lg px-4 py-3 my-4"
    >
      <span
        aria-hidden="true"
        className="mt-0.5 shrink-0"
        style={{ color: background }}
      >
        <Icon size={18} />
      </span>
      <div className="text-[var(--color-text-primary)] text-sm leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
