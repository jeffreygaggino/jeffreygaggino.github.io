export const workContent = {
	heading: "What I build",
	projects: [
		{
			name: "AI support chatbot",
			body: "An assistant that resolves more than half of inbound support enquiries across six regional storefronts without a human ever seeing them. Extended with a recommendation engine and in-chat add to cart, so support became somewhere people buy rather than only a cost.",
		},
		{
			name: "Shared service platform",
			body: "A platform of Go microservices the rest of the business builds on, so each new tool composes what already exists instead of rebuilding it. It moves creative from on-prem storage out to the ad platforms, keeps non-technical teams working in the spreadsheets they already use while systems read the same data, and handles notifications across the org.",
		},
		{
			name: "Content Pipeline",
			body: "Moves finished creative from upload to a live ad, with legal and marketing reviewing at the same time rather than one after the other. A multi-file synced preview plays every asset together against a tag-based draggable timeline. Built for people who are in it all day: keyboard shortcuts, undo, and edits that survive submission.",
		},
	],
} as const;
