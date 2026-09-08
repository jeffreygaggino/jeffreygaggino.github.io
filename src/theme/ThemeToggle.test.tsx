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

	it("ignores a junk stored value and falls back to dark", () => {
		localStorage.setItem("theme", "banana");
		renderToggle();
		expect(
			screen.getByRole("button", { name: /switch to light/i }),
		).toBeVisible();
	});
});
