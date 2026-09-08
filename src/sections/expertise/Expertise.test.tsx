import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WINDOW } from "../../drawing/window";
import { Expertise } from "./Expertise";
import { expertiseContent } from "./expertiseContent";

describe("Expertise", () => {
	it("is a landmark section the page can scroll to", () => {
		const { container } = render(<Expertise />);
		expect(container.querySelector("section")).toHaveAttribute(
			"id",
			"expertise",
		);
	});

	it("shows the heading without the bracket decoration in its name", () => {
		render(<Expertise />);
		expect(
			screen.getByRole("heading", { level: 2, name: expertiseContent.heading }),
		).toBeVisible();
	});

	it("shows every group and everything in it", () => {
		render(<Expertise />);
		for (const group of expertiseContent.groups) {
			expect(
				screen.getByRole("heading", { level: 3, name: group.label }),
			).toBeVisible();
			expect(screen.getByText(group.items.join(", "))).toBeVisible();
		}
	});

	it("shows the window drawing", () => {
		render(<Expertise />);
		expect(screen.getByRole("img", { name: WINDOW.label })).toBeVisible();
	});

	it("never lists the same thing under two groups", () => {
		// A list that repeats itself reads as padding.
		const all = expertiseContent.groups.flatMap((group) => group.items);
		expect(new Set(all).size).toBe(all.length);
	});
});
