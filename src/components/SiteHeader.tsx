import { useScrolledPast } from "../hooks/useScrolledPast";
import { heroContent } from "../sections/hero/heroContent";
import { CodeTag } from "./CodeTag";
import styles from "./SiteHeader.module.css";
import { ThemeToggle } from "./ThemeToggle";

export const HERO_NAME_ID = "hero-name";

export function SiteHeader() {
	const scrolledPastName = useScrolledPast(HERO_NAME_ID);

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				{/*
				 * Decorative duplicate of the Hero heading. The real h1 stays in
				 * Hero, so this is hidden from screen readers at all times rather
				 * than announcing the same name twice.
				 */}
				<p
					className={[styles.name, scrolledPastName && styles.nameVisible]
						.filter(Boolean)
						.join(" ")}
					aria-hidden="true"
				>
					<CodeTag tag="h1">{heroContent.name}</CodeTag>
				</p>
				<ThemeToggle />
			</div>
		</header>
	);
}
