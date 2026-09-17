const LANGUAGE_COLORS: Record<string, string> = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	Python: "#3572a5",
	Go: "#00add8",
	HTML: "#e34c26",
	CSS: "#563d7c",
	Rust: "#dea584",
	Java: "#b07219",
};

export function getLanguageColor(language: string | null): string {
	if (!language) {
		return `var(--gx-line-strong)`;
	}
	return LANGUAGE_COLORS[language] ?? "var(--gx-ink-faint)";
}
