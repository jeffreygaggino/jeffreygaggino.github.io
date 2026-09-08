const READY_CLASS = "fonts-ready";

/** Reveal anyway if the font stalls or fails, so nothing stays invisible. */
const FALLBACK_MS = 2000;

/**
 * Marks the document once the hand-drawn font has actually loaded.
 *
 * The CodeTag brackets are the only thing using Caveat. Without this they
 * paint in the fallback cursive first and then snap to Caveat, which is a
 * visible change of typeface on a piece of decoration. They stay hidden
 * until the real font is ready, then fade in.
 */
export function markFontsWhenReady(): void {
	const reveal = () => {
		document.documentElement.classList.add(READY_CLASS);
	};

	if (!("fonts" in document)) {
		reveal();
		return;
	}

	const timer = window.setTimeout(reveal, FALLBACK_MS);
	const done = () => {
		window.clearTimeout(timer);
		reveal();
	};

	document.fonts.load('1rem "Caveat"').then(done, done);
}
