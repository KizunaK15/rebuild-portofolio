export function prettyPrintFrontmatter(obj: Record<string, unknown>): string {
  const yaml = Object.entries(obj)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}:\n${v.map(i => `  - ${i}`).join('\n')}`;
      if (v === null) return `${k}: null`;
      return `${k}: ${v}`;
    })
    .join('\n');
  return `---\n${yaml}\n---`;
}
