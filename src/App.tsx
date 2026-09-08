import { ThemeToggle } from "./components/ThemeToggle";
import { Drawing } from "./drawing/Drawing";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
	return (
		<ThemeProvider>
			<header
				style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
			>
				<ThemeToggle />
			</header>
			<main style={{ display: "grid", placeItems: "center", padding: "2rem" }}>
				<Drawing />
			</main>
		</ThemeProvider>
	);
}
