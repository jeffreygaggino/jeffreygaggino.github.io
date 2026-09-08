import type { TokenName } from "../theme/tokens";

export type Part = {
	/** Stable identity of this piece of the Drawing, e.g. "hair". */
	name: string;
	/** The Token that colours it. Never a literal colour. */
	token: TokenName;
	/** SVG path geometry. */
	d: string;
	/**
	 * Fills this Part solid in the line colour when the Drawing is rendered
	 * as line art. Ignored when the Drawing is shown in full colour, where
	 * the Part's own Token already fills it.
	 */
	solid?: boolean;
	/**
	 * Drops this Part entirely when the Drawing is rendered as line art.
	 * Detail that reads as shading in full colour becomes noise as an outline.
	 */
	hideInLineArt?: boolean;
};

export type DrawingData = {
	/** Describes the whole Drawing to screen readers. */
	label: string;
	viewBox: string;
	parts: readonly Part[];
};
