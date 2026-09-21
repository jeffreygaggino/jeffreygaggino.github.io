import type { CSSProperties } from "react";
import { TOKEN_VAR } from "../theme/tokens";
import styles from "./Drawing.module.css";
import type { DrawingData } from "./types";

export type DrawingVariant = "filled" | "outline" | "wash";

type DrawingProps = {
	drawing: DrawingData;
	/** "filled" paints each Part in its Token, "outline" is line art only, "wash" tints under the line. */
	variant?: DrawingVariant;
	label?: string;
	className?: string;
};

/**
 * How far through the Drawing a Part sits, from 0 to 1.
 *
 * The theme transition staggers on this rather than raw index, so a 22-part
 * figure and a 4-part window take the same total time. A fixed delay per Part
 * made the simpler drawings finish long before the others.
 */
function stagger(index: number, total: number): number {
	if (total <= 1) return 0;
	return Number((index / (total - 1)).toFixed(3));
}

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
					style={
						{
							"--part-progress": stagger(index, drawing.parts.length),
						} as CSSProperties
					}
					d={part.d}
					data-solid={part.solid ? "" : undefined}
					data-hide-line-art={part.hideInLineArt ? "" : undefined}
					fill={TOKEN_VAR[part.token]}
				/>
			))}
		</svg>
	);
}
