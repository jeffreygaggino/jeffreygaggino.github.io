import { render, screen } from "@testing-library/react";
import { act } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Reveal } from "./Reveal";

type Callback = (entries: { isIntersecting: boolean }[]) => void;

/** Stands in for the browser's IntersectionObserver, which jsdom lacks. */
function stubObserver() {
	const state: { callback?: Callback; options?: IntersectionObserverInit } = {};
	const disconnect = vi.fn();

	class Stub {
		constructor(callback: Callback, options: IntersectionObserverInit) {
			state.callback = callback;
			state.options = options;
		}
		observe() {}
		disconnect = disconnect;
	}

	vi.stubGlobal("IntersectionObserver", Stub);
	return { state, disconnect };
}

afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

describe("Reveal", () => {
	it("renders what it wraps", () => {
		render(
			<Reveal>
				<p>content</p>
			</Reveal>,
		);
		expect(screen.getByText("content")).toBeVisible();
	});

	it("shows content when IntersectionObserver is unavailable", () => {
		// Never leave content permanently hidden on a browser without support.
		const { container } = render(
			<Reveal>
				<p>content</p>
			</Reveal>,
		);
		expect(container.firstElementChild?.className).toContain("visible");
	});

	it("passes rootMargin and threshold through to the observer", () => {
		const { state } = stubObserver();
		render(
			<Reveal rootMargin="0px 0px -25% 0px" threshold={0.6}>
				<p>content</p>
			</Reveal>,
		);
		expect(state.options).toMatchObject({
			rootMargin: "0px 0px -25% 0px",
			threshold: 0.6,
		});
	});

	it("fades in on entering and back out on leaving", () => {
		const { state } = stubObserver();
		const { container } = render(
			<Reveal>
				<p>content</p>
			</Reveal>,
		);
		const wrapper = container.firstElementChild;
		expect(wrapper?.className).not.toContain("visible");

		act(() => state.callback?.([{ isIntersecting: true }]));
		expect(wrapper?.className).toContain("visible");

		act(() => state.callback?.([{ isIntersecting: false }]));
		expect(wrapper?.className).not.toContain("visible");
	});

	it("stops observing when unmounted", () => {
		const { disconnect } = stubObserver();
		const { unmount } = render(
			<Reveal>
				<p>content</p>
			</Reveal>,
		);
		unmount();
		expect(disconnect).toHaveBeenCalled();
	});
});
