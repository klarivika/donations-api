export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	nitro: {
		preset: "cloudflare_module",

		storage: {
			// Rate limiter disimpan di memori
			cache: {
				driver: "memory",
			},
		},

		cloudflare: {
			deployConfig: true,
			nodeCompat: true,
		},
	},

	modules: ["nitro-cloudflare-dev"],
});
