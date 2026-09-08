import { CodeTag } from "../../components/CodeTag";
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
				<Drawing drawing={WINDOW} variant="wash" className={styles.drawing} />
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
