import { CodeTag } from "../../components/CodeTag";
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
			<Drawing drawing={SKILLS} variant="wash" className={styles.drawing} />
		</section>
	);
}
