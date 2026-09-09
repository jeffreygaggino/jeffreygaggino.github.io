/**
 * Copy lives beside its Section as data, so wording can change without
 * touching markup, and so a test can assert against the same source
 * the component renders from.
 */
export const heroContent = {
	name: "Jeffrey Gaggino",
	tagline: "Turning manual processes into systems teams run on.",
	blurb:
		"Technical Lead at Hismile. Go, TypeScript, and the infrastructure it all runs on. Building with the people it's for.",
} as const;
