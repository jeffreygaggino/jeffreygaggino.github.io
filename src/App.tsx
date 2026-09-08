import { SiteHeader } from "./components/SiteHeader";
import { About } from "./sections/about/About";
import { Contact } from "./sections/contact/Contact";
import { Expertise } from "./sections/expertise/Expertise";
import { Hero } from "./sections/hero/Hero";
import { Work } from "./sections/work/Work";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
	return (
		<ThemeProvider>
			<SiteHeader />
			<main>
				<Hero />
				<About />
				<Work />
				<Expertise />
				<Contact />
			</main>
		</ThemeProvider>
	);
}
