import { afterEach, describe, expect, it, vi } from "vitest";
import { markFontsWhenReady } from "./fontsReady";

afterEach(() => {
	document.documentElement.classList.remove("fonts-ready");
	vi.useRealTimers();
	vi.restoreAllMocks();
});

describe("markFontsWhenReady", () => {
	it("marks the document once the font resolves", async () => {
		const load = vi.fn().mockResolvedValue([]);
		vi.stubGlobal("document", Object.assign(document, { fonts: { load } }));

		markFontsWhenReady();
		await vi.waitFor(() =>
			expect(document.documentElement).toHaveClass("fonts-ready"),
		);
		expect(load).toHaveBeenCalledWith('1rem "Caveat"');
	});

	it("marks the document even when the font fails to load", async () => {
		const load = vi.fn().mockRejectedValue(new Error("offline"));
		vi.stubGlobal("document", Object.assign(document, { fonts: { load } }));

		markFontsWhenReady();
		await vi.waitFor(() =>
			expect(document.documentElement).toHaveClass("fonts-ready"),
		);
	});

	it("gives up waiting rather than leaving the brackets hidden", () => {
		vi.useFakeTimers();
		const load = vi.fn().mockReturnValue(new Promise(() => {}));
		vi.stubGlobal("document", Object.assign(document, { fonts: { load } }));

		markFontsWhenReady();
		expect(document.documentElement).not.toHaveClass("fonts-ready");

		vi.advanceTimersByTime(2000);
		expect(document.documentElement).toHaveClass("fonts-ready");
	});
});
