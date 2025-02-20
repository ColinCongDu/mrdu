import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Colin Du's blog",
    description: "A VitePress Site",
    themeConfig: {
        nav: nav(),
        sidebar: {
            '/article/': { base: '/article/', items: sidebarArticle() },
            '/note/base/' : { base: '/note/base/', items: sidebarBase() },
            '/note/framework/' : { base: '/note/framework/', items: sidebarFramework() }
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/MrDuCongcong/mrdu" },
        ],
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2019-${new Date().getFullYear()} 杜聪聪`
        },
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "文章",
            link: "/article/大型前端工程的管理方式",
            activeMatch: '/article'
        },
        {
            text: "笔记",
            items: [
                {
                    text: "基础",
                    link: "/note/base",
                },
                {
                    text: "框架",
                    link: "/note/framework",
                },
                {
                    text: "算法",
                    link: "/note/algorithm",
                },
                {
                    text: "工程化",
                    link: "/note/engineering",
                },
                {
                    text: "移动端",
                    link: "/note/mobile",
                },
                {
                    text: "服务端",
                    link: "/note/server",
                },
                {
                    text: "优化",
                    link: "/note/optimize",
                },
                {
                    text: "安全",
                    link: "/note/secure",
                }
            ],
        },
    ];
}

function sidebarArticle(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '文章',
            items: [
                { text: '大型前端工程的管理方式', link: '大型前端工程的管理方式' },
                { text: '单点登录', link: '单点登录' },
                { text: '浏览器的兼容性', link: '浏览器的兼容性' },
            ]
        }
    ];
}

function sidebarBase(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'JavaScript',
            base: './javascript/',
            collapsed: false,
            items: [
              { text: '模块系统', link: '模块系统' },
            ]
        }
    ]
}

function sidebarFramework(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Vue',
            collapsed: false,
            items: [
              { text: 'Vue3', link: 'Vue3' },
            ]
        }
    ]
}