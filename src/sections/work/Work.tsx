import { CodeTag } from "../../components/CodeTag";
import { Reveal } from "../../components/Reveal";
import text from "../../styles/text.module.css";
import styles from "./Work.module.css";
import { workContent } from "./workContent";

export function Work() {
	return (
		<section id="work" className={styles.work}>
			<Reveal
				as="h2"
				className={styles.heading}
				once
				threshold={0.1}
				rootMargin="0px"
			>
				<CodeTag tag="h2">{workContent.heading}</CodeTag>
			</Reveal>
			<Reveal className={styles.projects} once threshold={0.1}>
				{workContent.projects.map((project) => (
					<article key={project.name} className={styles.project}>
						<h3 className={styles.name}>{project.name}</h3>
						<p className={`${styles.body} ${text.bodyText}`}>{project.body}</p>
					</article>
				))}
			</Reveal>
		</section>
	);
}
