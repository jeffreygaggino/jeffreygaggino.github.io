import type { ReactNode } from "react";
import styles from "./CodeTag.module.css";

type CodeTagProps = {
	/** The element name to draw, without angle brackets. */
	tag: string;
	children: ReactNode;
};

/**
 * Wraps content in hand-drawn opening and closing HTML tags, the device the
 * previous site used on its headings and links.
 *
 * The brackets are real elements rather than ::before/::after content so they
 * can carry aria-hidden. Pseudo-element content is announced by some screen
 * readers, which would have read "less than h1 greater than" before the
 * heading. They are absolutely positioned, so they never affect layout.
 */
export function CodeTag({ tag, children }: CodeTagProps) {
	return (
		<span className={styles.wrap}>
			<span className={`${styles.tag} ${styles.open}`} aria-hidden="true">
				{`<${tag}>`}
			</span>
			{children}
			<span className={`${styles.tag} ${styles.close}`} aria-hidden="true">
				{`</${tag}>`}
			</span>
		</span>
	);
}
