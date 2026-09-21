import { useCallback, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { applyTheme, readStoredTheme, type Theme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(readStoredTheme);

	const toggleTheme = useCallback(() => {
		setTheme((current) => {
			const next: Theme = current === "dark" ? "light" : "dark";
			applyTheme(next);
			return next;
		});
	}, []);

	const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

	return <ThemeContext value={value}>{children}</ThemeContext>;
}
