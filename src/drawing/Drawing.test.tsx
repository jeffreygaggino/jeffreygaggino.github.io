import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Drawing } from "./Drawing";
import { JEFFREY } from "./jeffrey";
import { SKILLS } from "./skills";
import type { DrawingData } from "./types";
import { WINDOW } from "./window";

const drawings: [string, DrawingData][] = [
	["Jeffrey", JEFFREY],
	["skills", SKILLS],
	["window", WINDOW],
];

describe.each(drawings)("Drawing: %s", (_name, drawing) => {
	it("colours every Part through a Token, never a literal colour", () => {
		const { container } = render(<Drawing drawing={drawing} />);
		for (const path of container.querySelectorAll("path")) {
			expect(path.getAttribute("fill")).toMatch(/^var\(--token-[a-z-]+\)$/);
		}
	});
	it("is labelled for screen readers", () => {
		render(<Drawing drawing={drawing} />);
		expect(screen.getByRole("img", { name: drawing.label })).toBeVisible();
	});
});

describe("variants", () => {
	// Regression guard: the variant class was once dropped from the svg, so
	// every treatment silently rendered as "filled" while the stylesheet
	// looked correct. Assert the class actually reaches the element.
	it.each(["filled", "outline", "wash"] as const)(
		"puts the %s treatment class on the svg",
		(variant) => {
			const { container } = render(
				<Drawing drawing={JEFFREY} variant={variant} />,
			);
			const svg = container.querySelector("svg");
			expect(svg?.getAttribute("class")).toContain(variant);
		},
	);

	it("defaults to the filled treatment", () => {
		const { container } = render(<Drawing drawing={JEFFREY} />);
		expect(container.querySelector("svg")?.getAttribute("class")).toContain(
			"filled",
		);
	});
});

describe("theme transition stagger", () => {
	it("runs from the first part to the last", () => {
		const { container } = render(<Drawing drawing={JEFFREY} />);
		const paths = Array.from(container.querySelectorAll("path"));
		expect(paths[0].getAttribute("style")).toContain("--part-progress: 0");
		expect(paths[paths.length - 1].getAttribute("style")).toContain(
			"--part-progress: 1",
		);
	});

	it("takes the same total time whatever the part count", () => {
		// A fixed delay per part made the 4-part window finish long before the
		// 22-part figure. Both must end at 1.
		for (const drawing of [JEFFREY, SKILLS, WINDOW]) {
			const { container } = render(<Drawing drawing={drawing} />);
			const paths = Array.from(container.querySelectorAll("path"));
			expect(paths[paths.length - 1].getAttribute("style")).toContain(
				"--part-progress: 1",
			);
		}
	});
});
