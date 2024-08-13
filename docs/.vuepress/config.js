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
						link: '/note/base/javascript/类型.md',
					},
					{
						text: '框架',
						link: '/note/framework/react/概述.md',
					},
					{
						text: '工程化',
						link: '/note/engineering/概述.md',
					},
					{
						text: '优化',
						link: '/note/optimization/exception/错误处理.md',
					},
					{
						text: '设计模式',
						link: '/note/designPattern/概述.md',
					},
					{
						text: '算法',
						link: '/note/algorithm/数组.md',
					},
				],
			},
			{
				text: '面试',
				link: '/interview/javascript.md',
			},
		],
		sidebar: {
			'/blog/': [
				'微前端', 
				'自定义EventBus', 
				'css实现各种特效', 
				'前端规范',
				'颜色选择器的原理与Vue实现',
				'手写常用的工具函数',
				'手写js原生函数'
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
					],
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
					],
				},
				{
					text: 'DOM',
					children: [
						{
							text: '事件',
							link: '/note/base/dom/事件.md',
						}
					]
				},
				{
				    text: 'TypeScript',
					children: [
						{
							text: '概述',
							link: '/note/base/typescript/概述.md',
						},
						{
							text: '类型系统',
							link: '/note/base/typescript/类型系统.md',
						},
						{
							text: '类型断言',
							link: '/note/base/typescript/类型断言.md',
						},
						{
							text: '类型操作',
							link: '/note/base/typescript/类型操作.md',
						}
					]
				},
				{
					text: 'Node.js',
					children: [
						{
							text: '概述',
							link: '/note/base/node/概述.md',
						},
					]
				},
				{
					text: '包管理器',
					children: [
						{
							text: '概述',
							link: '/note/base/npm/概述.md',
						},
						{
							text: 'package.json详解',
							link: '/note/base/npm/package.md',
						}
					]
				},
				{
					text: '网络',
					children: [
						{
							text: 'HTTP',
							link: '/note/base/network/HTTP.md',
						},
						{
							text: 'HTTPS',
							link: '/note/base/network/https.md',
						}
					]
				},
				{
					text: '浏览器',
					children: [
						{
							text: '跨域',
							link: '/note/base/browser/跨域.md',
						},
						{
							text: '浏览器中的存储',
							link: '/note/base/browser/浏览器中的存储.md',
						}
					]
				}
			],
			'/note/framework/': [
				{
					text: 'React',
					children: [
						{
							text: '概述',
							link: '/note/framework/react/概述.md',
						},
						{
							text: '组件',
							link: '/note/framework/react/组件.md',
						},
						{
							text: 'JSX',
							link: '/note/framework/react/JSX.md',
						},
						{
							text: '组件的状态',
							link: '/note/framework/react/组件的状态.md',
						},
						{
							text: '组件间的通信',
							link: '/note/framework/react/组件间的通信.md',
							children: [
								{
									text: '使用props和回调函数通信',
									link: '/note/framework/react/使用props和回调函数通信.md',
								},
								{
									text: '使用ref通信',
									link: '/note/framework/react/使用ref通信.md',
								},
								{
									text: '使用Context通信',
									link: '/note/framework/react/使用Context通信.md',
								},
								{
									text: '使用EventBus通信',
									link: '/note/framework/react/使用EventBus通信.md',
								},

							]
						},
						{
							text: 'Hook',
							link: '/note/framework/react/Hook.md',
							children: [
								{
									text: 'useEffect',
									link: '/note/framework/react/useEffect.md',
								},
								{
									text: 'useCallback',
									link: '/note/framework/react/useCallback.md',
								},
								{
									text: 'Hook的实现原理',
									link: '/note/framework/react/Hook的实现原理.md',
								},
								{
									text: '自定义Hook',
									link: '/note/framework/react/自定义Hook.md',
								}
							]
						}
					],
				},
				{
					text: 'React Router',
					children: [
						{
							text: '概述',
							link: '/note/framework/react-router/概述.md',
						},
						{
							text: '路由配置',
							link: '/note/framework/react-router/路由配置.md',
						},
						{
							text: '路由导航',
							link: '/note/framework/react-router/路由导航.md',
						},
						{
							text: '路由传参',
							link: '/note/framework/react-router/路由传参.md',
						},
					],
				},
				{
					text: 'Redux',
					children: [
						{
							text: '概述',
							link: '/note/framework/redux/概述.md',
						},
						{
							text: 'Redux',
							link: '/note/framework/redux/Redux.md',
						},
						{
							text: 'Redux Redux',
							link: '/note/framework/redux/React-Redux.md',
						},
						{
							text: 'Redux Toolkit',
							link: '/note/framework/redux/Redux-Toolkit.md',
						},
					],
				},
				{
					text: 'Vue3',
					link: '/note/framework/vue3/vue3.md',
				},
				{
					text: '微信小程序',
					link: '/note/framework/wxApp/概述.md',
				}
			],
			'/note/engineering': [
				{
					text: 'Webpack',
					children: [
						{
							text: '资源加载',
							link: '/note/engineering/webpack/资源加载.md',
						},
					]
				}
			],
			'/note/optimization': [
				{
				    text: '异常',
					children: [
						{
							text: '错误处理',
							link: '/note/optimization/exception/错误处理.md',
						},
					]
				},
				{
					text: '性能',
					children: [
						{
							text: '性能评估',
							link: '/note/optimization/performance/性能评估.md',
						}
					]
				}
			],
			'/note/designPattern': [
				{
					text: '设计模式',
					children: [
						{
							text: '概述',
							link: '/note/designPattern/概述.md',
						},
						{
							text: '观察者模式',
							link: '/note/designPattern/观察者模式.md',
						},
						{
							text: '发布订阅模式',
							link: '/note/designPattern/发布订阅模式.md',
						},
						{
							text: '代理模式',
							link: '/note/designPattern/代理模式.md',
						}
					]
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
				},
			],
			'/interview/': ['javascript', 'TypeScript', 'css', '网络'],
		},
		repo: 'https://github.com/MrDuCongcong/mrdu.git',
	}),
});
