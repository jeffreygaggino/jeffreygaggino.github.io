/**
 * Tokens are the vocabulary Parts are coloured in. A Part names a Token;
 * it never names a literal colour. The actual colours live in tokens.css,
 * one Palette per Theme, so swapping Theme recolours every Drawing at once.
 */
export const TOKEN_NAMES = [
	"ink",
	"skin",
	"skinShadow",
	"shirt",
	"trouser",
	"trouserShadow",
	"eye",
] as const;

export type TokenName = (typeof TOKEN_NAMES)[number];

/**
 * Maps each Token to the CSS custom property that resolves it.
 * Using a Record means adding a Token without giving it a variable
 * is a compile error rather than an invisible limb.
 */
export const TOKEN_VAR: Record<TokenName, string> = {
	ink: "var(--token-ink)",
	skin: "var(--token-skin)",
	skinShadow: "var(--token-skin-shadow)",
	shirt: "var(--token-shirt)",
	trouser: "var(--token-trouser)",
	trouserShadow: "var(--token-trouser-shadow)",
	eye: "var(--token-eye)",
};
