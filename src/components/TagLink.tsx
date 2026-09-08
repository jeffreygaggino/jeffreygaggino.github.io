import { CodeTag } from "./CodeTag";
import styles from "./TagLink.module.css";

type TagLinkProps = {
	href: string;
	children: string;
};

export function TagLink({ href, children }: TagLinkProps) {
	const external = href.startsWith("http");

	return (
		<CodeTag tag="a">
			<a
				className={styles.link}
				href={href}
				{...(external ? { target: "_blank", rel: "noreferrer" } : {})}
			>
				{children}
			</a>
		</CodeTag>
	);
}
