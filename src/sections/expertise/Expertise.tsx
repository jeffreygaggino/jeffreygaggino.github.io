import { CodeTag } from "../../components/CodeTag";
import { Reveal } from "../../components/Reveal";
import { Drawing } from "../../drawing/Drawing";
import { WINDOW } from "../../drawing/window";
import text from "../../styles/text.module.css";
import styles from "./Expertise.module.css";
import { expertiseContent } from "./expertiseContent";

export function Expertise() {
	return (
		<section id="expertise" className={styles.expertise}>
			<div className={styles.top}>
				<h2 className={styles.heading}>
					<CodeTag tag="h2">{expertiseContent.heading}</CodeTag>
				</h2>
				{/*
				 * Triggers later than the About drawing. On a tall desktop
				 * screen both enter the viewport at about the same scroll
				 * position, and on identical settings they fired together.
				 */}
				<Reveal
					className={styles.drawing}
					rootMargin="0px 0px -35% 0px"
					threshold={0.6}
				>
					<Drawing drawing={WINDOW} variant="wash" />
				</Reveal>
			</div>
			<div className={styles.groups}>
				{expertiseContent.groups.map((group) => (
					<div key={group.label} className={styles.group}>
						<h3 className={styles.label}>{group.label}</h3>
						<p className={`${styles.items} ${text.bodyText}`}>
							{group.items.join(", ")}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
