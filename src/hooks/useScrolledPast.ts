import { useEffect, useState } from "react";

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
