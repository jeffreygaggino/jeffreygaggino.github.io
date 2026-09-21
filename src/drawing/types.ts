import type { TokenName } from "../theme/tokens";

export type Part = {
	name: string;
	/** The Token that colours it. Never a literal colour. */
	token: TokenName;
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
	/** Announced to screen readers in place of the figure. */
	label: string;
	viewBox: string;
	parts: readonly Part[];
};
