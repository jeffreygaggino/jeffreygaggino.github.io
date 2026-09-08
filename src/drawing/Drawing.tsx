import { TOKEN_VAR } from "../theme/tokens";
import styles from "./Drawing.module.css";
import { PARTS, VIEW_BOX } from "./parts";

type DrawingProps = {
	/** Describes the Drawing to screen readers. */
	label?: string;
	className?: string;
};

/**
 * The Drawing of Jeffrey, rendered from Part data.
 *
 * Every Part is coloured by the Token it names, so a Theme change swaps the
 * whole figure without touching this component or the stylesheet.
 */
export function Drawing({
	label = "Illustration of Jeffrey",
	className,
}: DrawingProps) {
	return (
		<svg
			className={[styles.drawing, className].filter(Boolean).join(" ")}
			viewBox={VIEW_BOX}
			role="img"
			aria-label={label}
			xmlns="http://www.w3.org/2000/svg"
		>
			{PARTS.map((part) => (
				<path
					key={part.name}
					className={styles.part}
					d={part.d}
					fill={TOKEN_VAR[part.token]}
				/>
			))}
		</svg>
	);
}
