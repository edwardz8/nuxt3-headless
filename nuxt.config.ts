// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            title: "dfsgraphs",
            viewport: "width=device-width, initial-scale=1",
            meta: [{ name: "description", content: "dfs graphs" }],
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI
        }
    }
})
