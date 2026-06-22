interface CodeBlockProps {
  language: string;
  children: string;
  filename?: string;
}

export function CodeBlock({ language, children, filename }: CodeBlockProps) {
  return (
    <figure
      className="my-4 rounded-lg overflow-hidden border border-[var(--color-border)]"
      aria-label={filename ? `Code: ${filename}` : `${language} code block`}
    >
      {filename && (
        <figcaption
          className="px-4 py-2 text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {filename}
        </figcaption>
      )}
      <pre
        className="overflow-x-auto p-4 bg-[var(--color-bg-elevated)] text-sm"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <code
          className={`language-${language}`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {children}
        </code>
      </pre>
    </figure>
  );
}
