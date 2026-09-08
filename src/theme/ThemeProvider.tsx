import { useCallback, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { applyTheme, readStoredTheme, type Theme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	// The initialiser runs once, not on every render — the lazy form matters
	// here because reading localStorage on each render would be wasteful.
	const [theme, setTheme] = useState<Theme>(readStoredTheme);

	const toggleTheme = useCallback(() => {
		setTheme((current) => {
			const next: Theme = current === "dark" ? "light" : "dark";
			applyTheme(next);
			return next;
		});
	}, []);

	// Without this, every consumer re-renders whenever the provider does,
	// because the object literal would be a new reference each time.
	const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

	return <ThemeContext value={value}>{children}</ThemeContext>;
}
