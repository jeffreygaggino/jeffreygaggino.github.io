import { createContext } from "react";
import type { Theme } from "./theme";

export type ThemeContextValue = {
	theme: Theme;
	toggleTheme: () => void;
};

/**
 * Vue's provide/inject. Kept in its own file so the provider module only
 * exports components. React Fast Refresh gets confused otherwise.
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
