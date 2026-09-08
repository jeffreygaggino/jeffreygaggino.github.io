import { useState } from "react";
import { useTheme } from "../theme/useTheme";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	/*
	 * Hover previews the Theme you would switch to. Straight after a click
	 * the pointer is still on the button, so the preview would immediately
	 * show the Theme you just left, and the icon would appear to flip back.
	 * Suppress it until the pointer leaves and the hover is deliberate again.
	 */
	const [previewOff, setPreviewOff] = useState(false);
	const next = theme === "dark" ? "light" : "dark";

	return (
		<button
			type="button"
			className={[styles.toggle, previewOff && styles.previewOff]
				.filter(Boolean)
				.join(" ")}
			onClick={() => {
				toggleTheme();
				setPreviewOff(true);
			}}
			onPointerLeave={() => setPreviewOff(false)}
			onBlur={() => setPreviewOff(false)}
			aria-label={`Switch to ${next} theme`}
		>
			<span className={styles.icon} aria-hidden="true">
				<span className={styles.moon} />
				<span className={styles.sun} />
			</span>
		</button>
	);
}
