import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "../components/ThemeToggle";
import { ThemeProvider } from "./ThemeProvider";

function renderToggle() {
	return render(
		<ThemeProvider>
			<ThemeToggle />
		</ThemeProvider>,
	);
}

describe("theme switching", () => {
	beforeEach(() => {
		localStorage.clear();
		delete document.documentElement.dataset.theme;
	});

	it("starts dark when nothing is stored", () => {
		renderToggle();
		expect(
			screen.getByRole("button", { name: /switch to light/i }),
		).toBeVisible();
	});

	it("starts light when light was stored", () => {
		localStorage.setItem("theme", "light");
		renderToggle();
		expect(
			screen.getByRole("button", { name: /switch to dark/i }),
		).toBeVisible();
	});

	it("switches theme, persists it, and marks the document", async () => {
		const user = userEvent.setup();
		renderToggle();

		await user.click(screen.getByRole("button", { name: /switch to light/i }));

		expect(document.documentElement.dataset.theme).toBe("light");
		expect(localStorage.getItem("theme")).toBe("light");
		expect(
			screen.getByRole("button", { name: /switch to dark/i }),
		).toBeVisible();
	});

	it("stops previewing the other theme until the pointer leaves", async () => {
		// Clicking switches the Theme while the pointer is still on the button.
		// Without suppression the hover preview would immediately show the
		// Theme just left, so the icon would look like it flipped back.
		const user = userEvent.setup();
		renderToggle();
		const button = screen.getByRole("button");

		await user.hover(button);
		expect(button.className).not.toContain("previewOff");

		await user.click(button);
		expect(button.className).toContain("previewOff");

		await user.unhover(button);
		expect(button.className).not.toContain("previewOff");
	});

	it("ignores a junk stored value and falls back to dark", () => {
		localStorage.setItem("theme", "banana");
		renderToggle();
		expect(
			screen.getByRole("button", { name: /switch to light/i }),
		).toBeVisible();
	});
});
