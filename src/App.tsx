import styles from "./App.module.css";
import { ThemeToggle } from "./components/ThemeToggle";
import { About } from "./sections/about/About";
import { Hero } from "./sections/hero/Hero";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
	return (
		<ThemeProvider>
			<header className={styles.header}>
				<ThemeToggle />
			</header>
			<main>
				<Hero />
				<About />
			</main>
		</ThemeProvider>
	);
}
