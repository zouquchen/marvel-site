/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile' // 网站信息统计
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Marvel-Site",
      description: 'Marvel-Site个人博客',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Java',
        link: '/java/',
        items: [
          { text: 'Java基础', link: '/pages/b68651/' },
          { text: 'Java容器', link: '/pages/892d69/' },
          { text: 'Java并发编程', link: '/pages/5240d7/' },
          { text: 'Java虚拟机', link: '/pages/6198af/' },
        ],
      },
      {
        text: '计算机基础',
        link: '/basics/',
        items: [
          { text: '计算机网络', link: '/pages/4e9070/' },
          { text: '操作系统', link: '/pages/8309a5b876fc95e3/' },
          { text: 'MySQL', link: '/pages/23bee8/' },
          { text: '数据结构与算法', link: '/pages/457448/' },
        ],
      },
      {
        text: '框架',
        link: '/framework/',
        items: [
          { text: 'Spring', link: '/pages/a63f9f/' }
        ],
      },
      {
        text: '中间件',
        link: '/middleware/',
        items: [
          { text: 'Redis', link: '/pages/258dd8/' },
          { text: '消息队列', link: '/pages/6bb532/' }
        ],
      },
      {
        text: '分布式',
        link: '/distributed/',
        items: [
          { text: '基础理论', link: '/pages/5d4819/' }
        ],
      },
      {
        text: '工具',
        link: '/tools/',
        items: [
          { text: '实用工具', link: '/pages/59ba19/' },
          { 
            text: '安装配置', 
            link: '/install/',
            items: [
              { text: 'Linux', link: '/pages/08fe43/' },
              { text: 'Windows', link: '/pages/eae8e6/' }
            ],
          },
          { 
            text: '开发工具', 
            link: '/devTools/',
            items: [
              { text: 'IDEA', link: '/pages/13c304/' },
              { text: 'VsCode', link: '/pages/3f5859/' }
            ],
          },
          { 
            text: '管理工具', 
            link: '/managerTools/',
            items: [
              { text: 'Git', link: '/pages/a1762f/' },
              { text: 'Maven', link: '/pages/3a5633/' }
            ],
          },
          
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '关于', link: '/pages/ec4e5b/' },
          { text: '收藏', link: '/pages/732fd9/' },
          {
            text: '索引',
            link: '/archives/',
            items: [
              { text: '分类', link: '/categories/' },
              { text: '标签', link: '/tags/' },
              { text: '归档', link: '/archives/' },
            ],
          },
        ],
      },
      
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'zouquchen/marvel-site', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // 站点配置，用于网站信息统计
    blogInfo: {
      blogCreate: '2022-07-13', // 博客创建时间
      indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
    bodyBgImg: [
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg1.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg2.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg3.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg4.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg5.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg6.jpg', // 不好看
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg7.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg8.jpg',  // 有透明度不好看
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg9.jpg',
      //'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg10.jpg',
      'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/bg12.jpg',  // 好看，待选
    ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 1.0, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s

    indexImg: { // 首页大图配置
      navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
      desc: [ // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
        "欢迎光临本站，我是一名致力于抢计算机饭碗的自动化专业在读研究生！  ——Marvel", 
        "天下事有难易乎?为之，则难者亦易矣；不为，则易者亦难矣。  ——为学", 
        "但凡不能杀死你的，最终都会使你更强大。 ——尼采",
        "每一个不曾起舞的日子，都是对生命的辜负。 ——尼采",
        "与怪物战斗的人，应当小心自己不要成为怪物。当你远远凝视深渊时，深渊也在凝视你。 ——尼采"
      ],  
      descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: false,    // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },

    
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'zouquchen', // 必需
      link: 'https://github.com/zouquchen', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://mine-bed.oss-cn-hangzhou.aliyuncs.com/avatar1.jpg',
      name: 'Marvel',
      slogan: 'Could you give me an offer',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:670953242@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/zouquchen',
        },
        {
          iconClass: 'icon-csdn',
          title: 'CSDN',
          link: 'https://blog.csdn.net/See_Star',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo:
        'Marvel', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Marvel',
        link: 'https://github.com/zouquchen'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '后端技术学习笔记',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],  // 网站统计需要的图标、文章阅读时间的图标，别人的cdn 
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }], // 代码块折叠需要的图标，别人的cdn
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],  // 占中统计需要修改的地方，防止Chrome保护隐私统计数据错误
    ['script', { src: 'https://lib.baomitu.com/twikoo/1.5.11/twikoo.all.min.js' }],  // twikoo依赖
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: 'https://www.baidu.com/s?wd=',
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    /*[
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'd454f915686ac52affd0',
          clientSecret: 'a45e72945128d73d719b357bfe3db4f2388898d9',
          repo: 'marvel-site', // GitHub 仓库
          owner: 'zouquchen', // GitHub仓库所有者
          admin: ['zouquchen'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
          title: "「评论」<%- document.title %>", // GitHub issue 的标题
          labels: ["Gitalk", "Comment"], // GitHub issue 的标签
          body:"<%- document.title %>: <%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
        },
      },
    ],*/
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    [
    	{
        	name: 'custom-plugins', // 自定义插件：网站信息统计、修改代码块显示
        	globalUIComponents: ["PageInfo", "BlockToggle", "Twikoo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    	}
    ]
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
