import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { linkedin } from "../../content/profileLinks";
import { Hero } from "./Hero";
import { heroContent } from "./heroContent";

describe("Hero", () => {
	it("is a landmark section the page can scroll to", () => {
		const { container } = render(<Hero />);
		const section = container.querySelector("section");
		expect(section).toHaveAttribute("id", "hero");
	});

	it("shows the name as the page's only top-level heading", () => {
		render(<Hero />);
		expect(
			screen.getByRole("heading", { level: 1, name: heroContent.name }),
		).toBeVisible();
	});

	it("shows the tagline and the blurb", () => {
		render(<Hero />);
		expect(screen.getByText(heroContent.tagline)).toBeVisible();
		expect(screen.getByText(heroContent.blurb)).toBeVisible();
	});

	it("links to LinkedIn", () => {
		render(<Hero />);
		const link = screen.getByRole("link", { name: linkedin.label });
		expect(link).toHaveAttribute("href", linkedin.href);
		expect(link).toHaveAttribute("rel", "noreferrer");
	});

	it("shows the Drawing", () => {
		render(<Hero />);
		expect(screen.getByRole("img", { name: /jeffrey/i })).toBeVisible();
	});
});
