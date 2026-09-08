import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { heroContent } from "../sections/hero/heroContent";
import { ThemeProvider } from "../theme/ThemeProvider";
import { SiteHeader } from "./SiteHeader";

function renderHeader() {
	return render(
		<ThemeProvider>
			<SiteHeader />
		</ThemeProvider>,
	);
}

describe("SiteHeader", () => {
	it("carries the theme toggle", () => {
		renderHeader();
		expect(screen.getByRole("button", { name: /switch to/i })).toBeVisible();
	});

	it("keeps its copy of the name hidden until the Hero heading scrolls away", () => {
		const { container } = renderHeader();
		const name = container.querySelector("header p");

		expect(name).toHaveTextContent(heroContent.name);
		expect(name?.getAttribute("class")).not.toContain("nameVisible");
	});

	it("does not add a second heading or announce the name twice", () => {
		renderHeader();
		// The real h1 lives in Hero. This copy is decoration.
		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
	});
});
