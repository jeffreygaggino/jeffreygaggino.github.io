import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SKILLS } from "../../drawing/skills";
import { heroContent } from "../hero/heroContent";
import { About } from "./About";
import { aboutContent } from "./aboutContent";

describe("About", () => {
	it("is a landmark section the page can scroll to", () => {
		const { container } = render(<About />);
		expect(container.querySelector("section")).toHaveAttribute("id", "about");
	});

	it("shows the heading without the bracket decoration in its name", () => {
		render(<About />);
		expect(
			screen.getByRole("heading", { level: 2, name: aboutContent.heading }),
		).toBeVisible();
	});

	it("shows every paragraph", () => {
		render(<About />);
		for (const paragraph of aboutContent.paragraphs) {
			expect(screen.getByText(paragraph)).toBeVisible();
		}
	});

	it("shows the skills Drawing", () => {
		render(<About />);
		expect(screen.getByRole("img", { name: SKILLS.label })).toBeVisible();
	});

	it("does not repeat the Hero copy", () => {
		// Hero already states the role, the stack and the support-desk origin.
		// About earns its place by adding something, so guard against drift.
		const about = aboutContent.paragraphs.join(" ").toLowerCase();
		for (const phrase of [
			"technical lead",
			"support desk",
			"go and typescript",
		]) {
			expect(about).not.toContain(phrase);
		}
		expect(heroContent.blurb.toLowerCase()).toContain("support desk");
	});
});
