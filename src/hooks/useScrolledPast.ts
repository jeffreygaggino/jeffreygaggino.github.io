import { useEffect, useState } from "react";

/**
 * Whether the element with this id has scrolled up out of view.
 *
 * A case where useEffect is the right tool, and worth contrasting with Vue:
 * it is not watching React state, it is subscribing to something outside
 * React entirely and unsubscribing on cleanup.
 */
export function useScrolledPast(elementId: string): boolean {
	const [past, setPast] = useState(false);

	useEffect(() => {
		const element = document.getElementById(elementId);
		if (!element || typeof IntersectionObserver === "undefined") return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Only count leaving upwards, so it stays false when the element
				// is simply below the fold on first load.
				setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
			},
			{ threshold: 0 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [elementId]);

	return past;
}
