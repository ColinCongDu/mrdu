import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Colin Du's blog",
    description: "A VitePress Site",
    themeConfig: {
        nav: nav(),
        sidebar: {
            '/article/': sidebarArticle(),
            '/note/base/': sidebarBase(),
            '/note/algorithm/': sidebarAlgorithm() ,
            '/note/framework/': sidebarFramework(),
            '/note/engineering/': sidebarEngineering(),
            '/note/mobile' : sidebarMobile(),
            '/note/server': sidebarServer(),
            '/note/optimize': sidebarOptimize(),
            '/note/secure': sidebarSecure(),
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
                    link: "/note/base/javascript/模块系统",
                },
                {
                    text: "算法",
                    link: "/note/algorithm",
                },
                {
                    text: "框架",
                    link: "/note/framework/vue/Vue3",
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
            base: '/article/',
            items: [
                { text: '大型前端工程的管理方式', link: '大型前端工程的管理方式' },
                { text: '单点登录', link: '单点登录' },
                { text: '浏览器的兼容性', link: '浏览器的兼容性' },
                { text: '如何做好国际化', link: '如何做好国际化' },
            ]
        }
    ];
}

function sidebarBase(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '包管理器',
            base: '/note/base/javascript/',
            collapsed: false,
            items: [
                { text: 'package.json详解', link: 'package' },
            ]
        },
        {
            text: 'node',
            base: '/note/base/javascript/',
            collapsed: false,
            items: [
                { text: '进程模型', link: '进程模型' },
            ]
        },
        {
            text: 'TypeScript',
            base: '/note/base/typescript/',
            collapsed: false,
            items: [
                { text: '类型系统', link: '类型系统' },
            ]
        },
        {
            text: '浏览器',
            base: '/note/base/browser/',
            collapsed: false,
            items: [
                { text: '跨域', link: '跨域' },
                { text: '浏览器中的存储', link: '浏览器中的存储' },
            ]
        },
        {
            text: 'JavaScript',
            base: '/note/base/javascript/',
            collapsed: false,
            items: [
                { text: '模块系统', link: '模块系统' },
            ]
        }
    ]
}

function sidebarAlgorithm(): DefaultTheme.SidebarItem[] {
    return [];
}

function sidebarFramework(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Vue',
            base: '/note/framework/vue/',
            collapsed: false,
            items: [
              { text: 'Vue3', link: 'Vue3' },
            ]
        },
        {
            text: 'React',
            base: '/note/framework/react/',
            collapsed: false,
            items: [
              { text: 'Hook的实现原理', link: 'Hook的实现原理' },
            ]
        },
        {
            text: '微信小程序',
            base: '/note/framework/wxApp/',
            collapsed: false,
            items: [
              { text: '概述', link: '概述' },
            ]
        },
        {
            text: 'electron',
            base: '/note/framework/electron/',
            collapsed: false,
            items: [
              { text: '概述', link: '概述' },
            ]
        },
        {
            text: 'React Native',
            base: '/note/framework/react-native/',
            collapsed: false,
            items: [
              { text: '开发环境', link: '开发环境' },
            ]
        },

    ]
}

function sidebarEngineering(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '测试',
            base: '/note/engineering/test/',
            collapsed: false,
            items: [
              { text: '概述', link: '概述' },
            ]
        },
    ];
}

function sidebarMobile(): DefaultTheme.SidebarItem[] {
    return [];
}

function sidebarServer(): DefaultTheme.SidebarItem[] {
    return [];
}


function sidebarOptimize(): DefaultTheme.SidebarItem[] {
    return [];
}

function sidebarSecure(): DefaultTheme.SidebarItem[] {
    return [];
}
