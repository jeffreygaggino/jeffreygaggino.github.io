import { CodeTag } from "../../components/CodeTag";
import text from "../../styles/text.module.css";
import styles from "./Work.module.css";
import { workContent } from "./workContent";

export function Work() {
	return (
		<section id="work" className={styles.work}>
			<h2 className={styles.heading}>
				<CodeTag tag="h2">{workContent.heading}</CodeTag>
			</h2>
			<div className={styles.projects}>
				{workContent.projects.map((project) => (
					<article key={project.name} className={styles.project}>
						<h3 className={styles.name}>{project.name}</h3>
						<p className={`${styles.body} ${text.bodyText}`}>{project.body}</p>
					</article>
				))}
			</div>
		</section>
	);
}
