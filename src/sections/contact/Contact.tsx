import { CodeTag } from "../../components/CodeTag";
import { TagLink } from "../../components/TagLink";
import { linkedin } from "../../content/profileLinks";
import text from "../../styles/text.module.css";
import styles from "./Contact.module.css";
import { contactContent } from "./contactContent";

export function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<h2 className={styles.heading}>
				<CodeTag tag="h2">{contactContent.heading}</CodeTag>
			</h2>
			<p className={`${styles.blurb} ${text.bodyText}`}>
				{contactContent.blurb}
			</p>
			<p className={styles.links}>
				<TagLink href={linkedin.href}>{linkedin.label}</TagLink>
			</p>
		</section>
	);
}
