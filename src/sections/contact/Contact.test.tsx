import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { linkedin } from "../../content/profileLinks";
import { Contact } from "./Contact";

describe("Contact", () => {
	it("links to LinkedIn, safely, and to nothing else", () => {
		render(<Contact />);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(1);
		expect(links[0]).toHaveAttribute("href", linkedin.href);
		expect(links[0]).toHaveAttribute("target", "_blank");
		expect(links[0]).toHaveAttribute("rel", "noreferrer");
	});
});
