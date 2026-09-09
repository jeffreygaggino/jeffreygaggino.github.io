import { type ReactNode, useRef } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
	children: ReactNode;
	/** Grows or shrinks the trigger area, e.g. "0px 0px -15% 0px". */
	rootMargin?: string;
	/** How much must be visible before it fades in, 0 to 1. */
	threshold?: number | number[];
	/** Applied to the wrapper, which is the element that gets laid out. */
	className?: string;
};

export function Reveal({
	children,
	rootMargin = "0px 0px -10% 0px",
	threshold = 0.2,
	className,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { rootMargin, threshold });

	return (
		<div
			ref={ref}
			className={[styles.reveal, inView && styles.visible, className]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</div>
	);
}
