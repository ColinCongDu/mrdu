import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
	lang: 'zh-CN',
	title: "Mr.Du's blog",
	base: '/mrdu/',
	lastUpdated: '更新时间',
	theme: defaultTheme({
		navbar: [
			{
				text: '博客',
				link: '/blog/微前端.md',
			},
			{
				text: '笔记',
				children: [
					{
						text: '基础知识',
                        link: '/note/base/javascript/类型.md'
					},
					{
						text: '框架',
						link: '/note/framework/react/前言.md'
					},
					{
						text: '算法',
						link: '/note/algorithm/数组.md'
					}
				]
			},
			{
				text: '面试',
				link: '/interview/javascript.md',
			}
		],
		sidebar: {
			'/blog/': [
		       '微前端',
			   '前端监控',
			   '手写常用的工具函数',
			],
			'/note/base/': [
				{
					text: 'JavaScript',
					children: [
						{
							text: '类型',
							link: '/note/base/javascript/类型.md',
						},
						{
							text: '函数',
							link: '/note/base/javascript/函数.md',
						},
					]
				},
				{
					text: 'CSS',
					children: [
						{
							text: '基础知识',
							link: '/note/base/css/基础知识.md',
						},
						{
							text: 'flex布局',
							link: '/note/base/css/flex布局.md',
						},
					]
				},

			],
			'/note/framework/': [
				{
					text: 'React',
					children: [
						{
							text: '前言',
							link: '/note/framework/react/前言.md',
						},
						{
							text: '组件',
                            link: '/note/framework/react/组件.md',
                        },
                        {
                            text: 'JSX',
                            link: '/note/framework/react/JSX.md',
                        },
					]
				},
				{
					text: 'React Router'
					children: [
					    {
					        text: '前言',
					        link: '/note/framework/react-router/前言.md',
					    },
						{
							text: '路由配置'
							link: '/note/framework/react-router/路由配置.md',
						},
						{
							text: '路由导航',
							link: '/note/framework/react-router/路由导航.md',
						},
						{
							text: '路由传参',
							link: '/note/framework/react-router/路由传参.md',
						}
					]
				},
				{
					text: 'Redux'
					children: [
						{
							text: 'Redux'
							link: '/note/framework/redux/Redux.md',
						},
						{
						    text: 'Redux Redux',
							link: '/note/framework/redux/Redux-Redux.md',
						},
						{
						    text: 'Redux Toolkit',
							link: '/note/framework/redux/Redux-Toolkit.md',
						}
					]
				},
				{
					text: 'Vue3',
					link: '/note/framework/vue3/vue3.md',
				}
			],
			'/note/algorithm/': [
				{
					text: '数组',
					link: '/note/algorithm/数组.md',
				},
				{
					text: '树',
					link: '/note/algorithm/树.md',
				}
			],
			'/interview/': [
				'javascript',
				'TypeScript',
				'css',
				'网络',
			]
		},
		repo: 'https://github.com/MrDuCongcong/mrdu.git',
	}),
});
