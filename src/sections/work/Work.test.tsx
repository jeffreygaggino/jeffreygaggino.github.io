import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Work } from "./Work";
import { workContent } from "./workContent";

describe("Work", () => {
	it("is a landmark section the page can scroll to", () => {
		const { container } = render(<Work />);
		expect(container.querySelector("section")).toHaveAttribute("id", "work");
	});

	it("shows the heading without the bracket decoration in its name", () => {
		render(<Work />);
		expect(
			screen.getByRole("heading", { level: 2, name: workContent.heading }),
		).toBeVisible();
	});

	it("shows every project", () => {
		render(<Work />);
		for (const project of workContent.projects) {
			expect(
				screen.getByRole("heading", { level: 3, name: project.name }),
			).toBeVisible();
			expect(screen.getByText(project.body)).toBeVisible();
		}
	});

	it("keeps the numbers soft rather than quoting exact figures", () => {
		// Deliberate: this section says what he builds, it is not a CV.
		const prose = workContent.projects.map((p) => p.body).join(" ");
		expect(prose).not.toMatch(/\d+%/);
		expect(prose).not.toMatch(/\b\d{2,}\b/);
	});
});
