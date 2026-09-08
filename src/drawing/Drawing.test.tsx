import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TOKEN_VAR } from "../theme/tokens";
import { Drawing } from "./Drawing";
import { PARTS } from "./parts";

describe("Drawing", () => {
	it("renders one path per Part", () => {
		const { container } = render(<Drawing />);
		expect(container.querySelectorAll("path")).toHaveLength(PARTS.length);
	});

	it("colours every Part through a Token, never a literal colour", () => {
		const { container } = render(<Drawing />);
		for (const path of container.querySelectorAll("path")) {
			expect(path.getAttribute("fill")).toMatch(/^var\(--token-[a-z-]+\)$/);
		}
	});

	it("gives each Part the Token it names", () => {
		const { container } = render(<Drawing />);
		const paths = Array.from(container.querySelectorAll("path"));
		PARTS.forEach((part, index) => {
			expect(paths[index].getAttribute("fill")).toBe(TOKEN_VAR[part.token]);
		});
	});

	it("is labelled for screen readers", () => {
		render(<Drawing label="Jeffrey waving" />);
		expect(screen.getByRole("img", { name: "Jeffrey waving" })).toBeVisible();
	});
});
