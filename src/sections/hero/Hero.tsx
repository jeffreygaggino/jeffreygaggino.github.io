import { CodeTag } from "../../components/CodeTag";
import { Drawing } from "../../drawing/Drawing";
import { JEFFREY } from "../../drawing/jeffrey";
import styles from "./Hero.module.css";
import { heroContent } from "./heroContent";

export function Hero() {
	return (
		<section id="hero" className={styles.hero}>
			<div>
				<h1 className={styles.name}>
					<CodeTag tag="h1">{heroContent.name}</CodeTag>
				</h1>
				<p className={styles.tagline}>{heroContent.tagline}</p>
				<p className={styles.blurb}>{heroContent.blurb}</p>
			</div>
			<Drawing drawing={JEFFREY} variant="wash" className={styles.drawing} />
		</section>
	);
}
