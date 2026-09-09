import { CodeTag } from "../../components/CodeTag";
import { Reveal } from "../../components/Reveal";
import { TagLink } from "../../components/TagLink";
import { linkedin } from "../../content/profileLinks";
import text from "../../styles/text.module.css";
import styles from "./Contact.module.css";
import { contactContent } from "./contactContent";

export function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<Reveal
				as="h2"
				className={styles.heading}
				once
				threshold={0.05}
				rootMargin="0px"
			>
				<CodeTag tag="h2">{contactContent.heading}</CodeTag>
			</Reveal>
			{/*
			 * Nothing follows this section, so a tall screen may never scroll
			 * it far enough to meet the thresholds the others use. It reveals
			 * on the first sliver instead.
			 */}
			<Reveal className={styles.body} once threshold={0.05} rootMargin="0px">
				<p className={`${styles.blurb} ${text.bodyText}`}>
					{contactContent.blurb}
				</p>
				<p className={styles.links}>
					<TagLink href={linkedin.href}>{linkedin.label}</TagLink>
				</p>
			</Reveal>
		</section>
	);
}
