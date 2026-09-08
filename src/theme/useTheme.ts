import { use } from "react";
import type { ThemeContextValue } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

export function useTheme(): ThemeContextValue {
	const value = use(ThemeContext);
	if (value === null) {
		throw new Error("useTheme must be used inside a ThemeProvider");
	}
	return value;
}
