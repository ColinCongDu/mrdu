import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Colin Du's blog",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: "博客",
                link: "/blog/微前端.md",
            },
            {
                text: "Examples",
                items: [
                    {
                        text: "Section A Item A",
                        link: "...",
                    },
                    {
                        text: "Section A Item A",
                        link: "...",
                    },
                ],
            },
        ],
        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/MrDuCongcong/mrdu" },
        ],
    },
});
