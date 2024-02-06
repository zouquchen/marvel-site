export default [
    { text: '首页', link: '/' },
    {
      text: '后端', link: '/backend/',
      items: [
        {
          text: 'Java', link: '/java/',
          items: [
            { text: 'Java基础', link: '/pages/b68651/' },
            { text: 'Java进阶', link: '/pages/079032/' },
            { text: 'Java容器', link: '/pages/892d69/' },
            { text: 'Java并发编程', link: '/pages/5240d7/' },
            { text: 'Java虚拟机', link: '/pages/6198af/' },
            // { text: '常见面试题', link: '/pages/1dd8bd/' }
          ],
        },
        {
          text: '计算机基础', link: 'computerBasic',
          items: [
            { text: '数据结构与算法', link: '/pages/7f453c/' },
            { text: '计算机网络', link: '/pages/4e9070/' },
            { text: '操作系统', link: '/pages/27935a/' },
            { text: 'Linux', link: '/pages/a766e8/' }
          ]
        },
        {
          text: '框架｜中间件', link: '/middleware/',
          items: [
            { text: 'Spring', link: '/pages/a63f9f/' },
            // { text: 'MyBatis', link: '/pages/4a29fe/' },
            { text: 'MySQL', link: '/pages/23bee8/' },
            { text: 'Redis', link: '/pages/258dd8/' },
            { text: 'MQ', link: '/pages/6bb532/' },
            { text: 'Zookeeper', link: '/pages/d3943f/' },
            { text: 'Git', link: '/pages/a1762f/' },
            // { text: 'Maven', link: '/pages/3a5633/' }
          ],
        },
        {
          text: '架构', link: '/architecture/',
          items: [
            { text: '分布式', link: '/pages/5d4819/' },
            { text: '高并发', link: '/pages/ad036a/' },
            { text: '高可用', link: '/pages/2d8d93/' },
            { text: '架构', link: '/pages/1c4157/' }
          ],
        },
      ]
    },
    {
      text: '前端', link: '/frontend/',
      items: [
        // {
        //   text: '基础', link: '/frontedBasic/',
        //   items: [
        //     { text: 'HTML', link: '/pages/19e353/' },
        //     { text: 'CSS', link: '/pages/19e353/' },
        //     { text: 'ES', link: '/pages/19e353/' },
        //   ]
        // },
        {
          text: '框架', link: '/architecture/',
          items: [
            { text: 'React', link: '/pages/1731df/'},
            { text: '其他', link: '/pages/fdd4d1/'},
          ]
        },
        // {
        //   text: 'NodeJS', link: '/nodejs/',
        //   items: [
        //     { text: 'NodeJS', link:'/pages/35e6ec/' }
        //   ]
        // }
      ]
    },
    {
      text: '工具', link: '/tools/',
      items: [
        { text: '实用工具', link: '/pages/59ba19/' },
        { 
          text: '安装配置', link: '/install/',
          items: [
            { text: 'Linux', link: '/pages/08fe43/' },
            { text: 'Windows', link: '/pages/eae8e6/' },
            { text: 'Mac', link: '/pages/f6b314/' }
          ],
        },
        { 
          text: '开发工具', link: '/devTools/',
          items: [
            { text: 'IDEA', link: '/pages/13c304/' },
            { text: 'VsCode', link: '/pages/3f5859/' }
          ],
        },
      ],
    },
    {
      text: '更多', link: '/more/',
      items: [
        { text: '关于', link: '/pages/ec4e5b/' },
        { text: '收藏', link: '/pages/732fd9/' },
        { text: '草稿', link: '/pages/b0ec63/' },
        {
          text: '索引', link: '/archives/',
          items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
          ],
        },
      ],
    },
  ]
  