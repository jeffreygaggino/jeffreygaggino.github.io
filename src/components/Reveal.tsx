import { type ElementType, type ReactNode, useRef } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
	children: ReactNode;
	rootMargin?: string;
	threshold?: number | number[];
	/** Use for anything holding text: copy that vanishes as you scroll back over it is worse than no animation. */
	once?: boolean;
	className?: string;
	delay?: number;
	/** Pass the real element when the reveal wraps something structural, so a heading stays a heading. */
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
