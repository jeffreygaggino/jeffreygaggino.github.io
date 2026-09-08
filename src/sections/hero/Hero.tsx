import { CodeTag } from "../../components/CodeTag";
import { HERO_NAME_ID } from "../../components/SiteHeader";
import { TagLink } from "../../components/TagLink";
import { linkedin } from "../../content/profileLinks";
import { Drawing } from "../../drawing/Drawing";
import { JEFFREY } from "../../drawing/jeffrey";
import text from "../../styles/text.module.css";
import styles from "./Hero.module.css";
import { heroContent } from "./heroContent";

export function Hero() {
	return (
		<section id="hero" className={styles.hero}>
			<div>
				<h1 id={HERO_NAME_ID} className={styles.name}>
					<CodeTag tag="h1">{heroContent.name}</CodeTag>
				</h1>
				<p className={styles.tagline}>{heroContent.tagline}</p>
				<p className={`${styles.blurb} ${text.bodyText}`}>
					{heroContent.blurb}
				</p>
				<p className={styles.links}>
					<TagLink href={linkedin.href}>{linkedin.label}</TagLink>
				</p>
			</div>
			<Drawing drawing={JEFFREY} variant="wash" className={styles.drawing} />
		</section>
	);
}
