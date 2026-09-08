import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CodeTag } from "./CodeTag";

describe("CodeTag", () => {
	it("draws the opening and closing tags around its content", () => {
		render(<CodeTag tag="h1">Hello.</CodeTag>);
		expect(screen.getByText("<h1>")).toBeInTheDocument();
		expect(screen.getByText("</h1>")).toBeInTheDocument();
		expect(screen.getByText("Hello.")).toBeVisible();
	});

	it("hides the brackets from screen readers", () => {
		render(
			<h1>
				<CodeTag tag="h1">Jeffrey Gaggino</CodeTag>
			</h1>,
		);
		// The accessible name must be the content alone, with no angle brackets.
		expect(
			screen.getByRole("heading", { level: 1, name: "Jeffrey Gaggino" }),
		).toBeVisible();
	});
});
