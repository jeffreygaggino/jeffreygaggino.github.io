import type { CSSProperties } from "react";
import { TOKEN_VAR } from "../theme/tokens";
import styles from "./Drawing.module.css";
import type { DrawingData } from "./types";

export type DrawingVariant = "filled" | "outline" | "wash";

type DrawingProps = {
	drawing: DrawingData;
	/**
	 * "filled" paints each Part in its Token, "outline" draws line art only,
	 * "wash" tints the Parts and lets the line carry the shape.
	 */
	variant?: DrawingVariant;
	/** Overrides the Drawing's own description, where context needs a different one. */
	label?: string;
	className?: string;
};

/**
 * Renders a Drawing from Part data.
 *
 * Every Part is coloured by the Token it names, so a Theme change swaps the
 * whole figure without touching this component or the stylesheet.
 */
export function Drawing({
	drawing,
	variant = "filled",
	label,
	className,
}: DrawingProps) {
	return (
		<svg
			className={[styles.drawing, styles[variant], className]
				.filter(Boolean)
				.join(" ")}
			viewBox={drawing.viewBox}
			role="img"
			aria-label={label ?? drawing.label}
			xmlns="http://www.w3.org/2000/svg"
		>
			{drawing.parts.map((part, index) => (
				<path
					key={part.name}
					className={styles.part}
					style={{ "--part-index": index } as CSSProperties}
					d={part.d}
					data-solid={part.solid ? "" : undefined}
					data-hide-line-art={part.hideInLineArt ? "" : undefined}
					fill={TOKEN_VAR[part.token]}
				/>
			))}
		</svg>
	);
}
