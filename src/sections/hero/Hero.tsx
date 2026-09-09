import { CodeTag } from "../../components/CodeTag";
import { Reveal } from "../../components/Reveal";
import { HERO_NAME_ID } from "../../components/SiteHeader";
import { TagLink } from "../../components/TagLink";
import { linkedin } from "../../content/profileLinks";
import { Drawing } from "../../drawing/Drawing";
import { JEFFREY } from "../../drawing/jeffrey";
import text from "../../styles/text.module.css";
import styles from "./Hero.module.css";
import { heroContent } from "./heroContent";

/*
 * Everything here is on screen at load, so each piece reveals on a half
 * second beat rather than all at once. Thresholds are zero and the margins
 * are neutral, so the sequence is driven by the delays alone.
 */
const REVEAL = { once: true, threshold: 0, rootMargin: "0px" } as const;
const BEAT = 500;

export function Hero() {
	return (
		<section id="hero" className={styles.hero}>
			<div>
				<Reveal as="h1" {...REVEAL} className={styles.name} delay={0}>
					<span id={HERO_NAME_ID}>
						<CodeTag tag="h1">{heroContent.name}</CodeTag>
					</span>
				</Reveal>
				<Reveal as="p" {...REVEAL} className={styles.tagline} delay={BEAT * 2}>
					{heroContent.tagline}
				</Reveal>
				<Reveal
					as="p"
					{...REVEAL}
					className={`${styles.blurb} ${text.bodyText}`}
					delay={BEAT * 3}
				>
					{heroContent.blurb}
				</Reveal>
				<Reveal as="p" {...REVEAL} className={styles.links} delay={BEAT * 4}>
					<TagLink href={linkedin.href}>{linkedin.label}</TagLink>
				</Reveal>
			</div>
			<Reveal {...REVEAL} className={styles.drawing} delay={BEAT}>
				<Drawing drawing={JEFFREY} variant="wash" />
			</Reveal>
		</section>
	);
}
