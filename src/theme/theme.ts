export type Theme = "light" | "dark";

/** Dark is the site's default, not a fallback for an absent OS preference. */
export const DEFAULT_THEME: Theme = "dark";

export const STORAGE_KEY = "theme";

export function isTheme(value: unknown): value is Theme {
	return value === "light" || value === "dark";
}

/** Reads the Theme the anti-flash script already committed to in index.html. */
export function readStoredTheme(): Theme {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (isTheme(stored)) return stored;
	} catch {
		// Safari in private mode throws on localStorage access.
	}
	return DEFAULT_THEME;
}

export function applyTheme(theme: Theme): void {
	document.documentElement.dataset.theme = theme;
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// Persistence is a nicety; the page still works without it.
	}
}
