import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { linkedin } from "../../content/profileLinks";
import { Contact } from "./Contact";
import { contactContent } from "./contactContent";

describe("Contact", () => {
	it("is a landmark section the page can scroll to", () => {
		const { container } = render(<Contact />);
		expect(container.querySelector("section")).toHaveAttribute("id", "contact");
	});

	it("shows the heading without the bracket decoration in its name", () => {
		render(<Contact />);
		expect(
			screen.getByRole("heading", { level: 2, name: contactContent.heading }),
		).toBeVisible();
	});

	it("links to LinkedIn, safely, and to nothing else", () => {
		render(<Contact />);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(1);
		expect(links[0]).toHaveAttribute("href", linkedin.href);
		expect(links[0]).toHaveAttribute("target", "_blank");
		expect(links[0]).toHaveAttribute("rel", "noreferrer");
	});
});
