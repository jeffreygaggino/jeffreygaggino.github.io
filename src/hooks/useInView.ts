import { type RefObject, useEffect, useState } from "react";

export type InViewOptions = {
	/** Grows or shrinks the trigger area, e.g. "0px 0px -15% 0px". */
	rootMargin?: string;
	/** How much of the element must be visible before it counts, 0 to 1. */
	threshold?: number | number[];
	/** Stay true once seen. Use for anything holding text. */
	once?: boolean;
};

/**
 * Whether the referenced element is currently in view.
 *
 * Reports both directions, so a caller can fade something out again when it
 * leaves. Where IntersectionObserver is unavailable it reports true rather
 * than false, so content is never left permanently hidden.
 */
export function useInView<T extends Element>(
	ref: RefObject<T | null>,
	{ rootMargin = "0px", threshold = 0, once = false }: InViewOptions = {},
): boolean {
	const [inView, setInView] = useState(false);

	/*
	 * An array threshold would be a new reference on every render, restarting
	 * the observer each time. The effect depends on this string instead, and
	 * reads the threshold back out of it, so it never touches the prop.
	 */
	const thresholdKey = Array.isArray(threshold)
		? threshold.join(",")
		: String(threshold);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting && once) return;
				setInView(entry.isIntersecting);
				if (entry.isIntersecting && once) observer.disconnect();
			},
			{
				rootMargin,
				threshold: thresholdKey.includes(",")
					? thresholdKey.split(",").map(Number)
					: Number(thresholdKey),
			},
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [ref, rootMargin, thresholdKey, once]);

	return inView;
}
