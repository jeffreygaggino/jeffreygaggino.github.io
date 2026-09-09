import { CodeTag } from "../../components/CodeTag";
import { Reveal } from "../../components/Reveal";
import { Drawing } from "../../drawing/Drawing";
import { SKILLS } from "../../drawing/skills";
import text from "../../styles/text.module.css";
import styles from "./About.module.css";
import { aboutContent } from "./aboutContent";

export function About() {
	return (
		<section id="about" className={styles.about}>
			{/*
			 * Trigger line sits around the middle of the screen. The negative
			 * bottom margin does that work, not the threshold: requiring half
			 * a tall block to be visible would fire long after centre.
			 */}
			<Reveal
				as="h2"
				className={styles.heading}
				once
				threshold={0}
				rootMargin="0px 0px -40% 0px"
			>
				<CodeTag tag="h2">{aboutContent.heading}</CodeTag>
			</Reveal>
			<Reveal
				className={styles.prose}
				once
				threshold={0.15}
				rootMargin="0px 0px -35% 0px"
			>
				{aboutContent.paragraphs.map((paragraph) => (
					<p key={paragraph} className={text.bodyText}>
						{paragraph}
					</p>
				))}
			</Reveal>
			<Reveal
				className={styles.drawing}
				rootMargin="0px 0px -25% 0px"
				threshold={0.5}
			>
				<Drawing drawing={SKILLS} variant="wash" />
			</Reveal>
		</section>
	);
}
