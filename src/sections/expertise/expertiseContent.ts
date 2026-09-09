export const expertiseContent = {
	heading: "Expertise",
	groups: [
		{
			label: "Languages",
			items: ["Go", "TypeScript", "JavaScript", "SQL", "Python"],
		},
		{
			label: "Backend",
			items: [
				"Microservice architecture",
				"PostgreSQL",
				"Gin",
				"Node.js",
				"REST",
				"Cassandra",
			],
		},
		{
			label: "Frontend",
			items: ["React", "Vue 3", "Quasar", "Pinia", "Shopify Liquid"],
		},
		{
			label: "AI",
			items: [
				"LLM application architecture",
				"RAG and knowledge pipelines",
				"Prompt guardrails",
				"Evaluation",
				"Agent tooling standards",
			],
		},
		{
			label: "Infrastructure",
			items: [
				"Docker",
				"On-prem deployment",
				"CI/CD",
				"AWS",
				"Terraform",
				"Cloudflare Workers",
				"OpenAPI",
			],
		},
	],
} as const;
