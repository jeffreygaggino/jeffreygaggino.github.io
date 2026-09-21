import { createContext } from "react";
import type { Theme } from "./theme";

export type ThemeContextValue = {
	theme: Theme;
	toggleTheme: () => void;
};

/** Kept out of the provider module so that file only exports components, which Fast Refresh requires. */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
