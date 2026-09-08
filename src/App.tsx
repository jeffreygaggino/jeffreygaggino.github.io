import { SiteHeader } from "./components/SiteHeader";
import { About } from "./sections/about/About";
import { Hero } from "./sections/hero/Hero";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
	return (
		<ThemeProvider>
			<SiteHeader />
			<main>
				<Hero />
				<About />
			</main>
		</ThemeProvider>
	);
}
