import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TOKEN_VAR } from "../theme/tokens";
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
	it("renders one path per Part", () => {
		const { container } = render(<Drawing drawing={drawing} />);
		expect(container.querySelectorAll("path")).toHaveLength(
			drawing.parts.length,
		);
	});

	it("colours every Part through a Token, never a literal colour", () => {
		const { container } = render(<Drawing drawing={drawing} />);
		for (const path of container.querySelectorAll("path")) {
			expect(path.getAttribute("fill")).toMatch(/^var\(--token-[a-z-]+\)$/);
		}
	});

	it("gives each Part the Token it names", () => {
		const { container } = render(<Drawing drawing={drawing} />);
		const paths = Array.from(container.querySelectorAll("path"));
		drawing.parts.forEach((part, index) => {
			expect(paths[index].getAttribute("fill")).toBe(TOKEN_VAR[part.token]);
		});
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

it("staggers the parts so a theme change redraws rather than flickers", () => {
	const { container } = render(<Drawing drawing={JEFFREY} />);
	const paths = Array.from(container.querySelectorAll("path"));
	paths.forEach((path, index) => {
		expect(path.getAttribute("style")).toContain(`--part-index: ${index}`);
	});
});

it("lets a caller override the label", () => {
	render(<Drawing drawing={JEFFREY} label="Jeffrey waving" />);
	expect(screen.getByRole("img", { name: "Jeffrey waving" })).toBeVisible();
});
