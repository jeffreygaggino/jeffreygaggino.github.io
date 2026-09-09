import { type ElementType, type ReactNode, useRef } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
	children: ReactNode;
	/** Grows or shrinks the trigger area, e.g. "0px 0px -15% 0px". */
	rootMargin?: string;
	/** How much must be visible before it fades in, 0 to 1. */
	threshold?: number | number[];
	/**
	 * Stay visible once revealed, rather than fading out again on the way
	 * past. Use for anything holding text: copy that vanishes as you scroll
	 * back over it is worse than no animation at all.
	 */
	once?: boolean;
	/** Applied to the wrapper, which is the element that gets laid out. */
	className?: string;
	/**
	 * Milliseconds to wait before fading in, for sequencing several reveals
	 * that come into view together.
	 */
	delay?: number;
	/**
	 * What to render as. Defaults to a div. Pass the real element when the
	 * reveal wraps something structural, so a heading stays a heading rather
	 * than gaining a div that would break its parent's layout.
	 */
	as?: ElementType;
};

export function Reveal({
	children,
	rootMargin = "0px 0px -10% 0px",
	threshold = 0.2,
	once = false,
	delay = 0,
	className,
	as: Element = "div",
}: RevealProps) {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { rootMargin, threshold, once });

	return (
		<Element
			ref={ref}
			className={[styles.reveal, inView && styles.visible, className]
				.filter(Boolean)
				.join(" ")}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</Element>
	);
}
