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
			<h2 className={styles.heading}>
				<CodeTag tag="h2">{aboutContent.heading}</CodeTag>
			</h2>
			<div className={styles.prose}>
				{aboutContent.paragraphs.map((paragraph) => (
					<p key={paragraph} className={text.bodyText}>
						{paragraph}
					</p>
				))}
			</div>
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
