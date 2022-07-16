(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{409:function(t,s,a){"use strict";a.r(s);var e=a(3),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"redis部署和运行问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis部署和运行问题"}},[t._v("#")]),t._v(" Redis部署和运行问题")]),t._v(" "),s("h4",{attrs:{id:"_15-主从复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-主从复制"}},[t._v("#")]),t._v(" 15 主从复制")]),t._v(" "),s("p",[t._v("主机数据更新后根据配置和策略，自动同步到备机的master/slave机制，Master已写为主，slave以读为主。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220314160126241.png",alt:"image-20220314160126241"}}),t._v(" "),s("p",[t._v("工作原理：一主多仆、级联结构")]),t._v(" "),s("h4",{attrs:{id:"_16-哨兵模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-哨兵模式"}},[t._v("#")]),t._v(" 16 哨兵模式")]),t._v(" "),s("blockquote",[s("p",[t._v("主从切换技术的方法：当主服务器宕机后，需要手动把一台从服务器切换为主服务器，这就需要人工干预，费时费力，还会造成一段时间服务不可用。所以，更多时候有限考虑哨兵模式。")])]),t._v(" "),s("p",[t._v("哨兵是一个独立的进程，独立运行。其原理是哨兵通过发送命令，等待Redis服务器响应，从而监控运行的多个Redis实例。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/webp.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("当哨兵检测到master宕机，会自动将slave切换称master，然后通过发布订阅模式通知其他的从服务器，修改配置文件，让他们切换主机。")]),t._v(" "),s("blockquote",[s("p",[t._v("主观下线：单个哨兵实例对服务器做出的下线判断。（有可能是网络不同的问题）")]),t._v(" "),s("p",[t._v("客观下线：多个哨兵实例对同一个服务器做出下线的判断。")])]),t._v(" "),s("p",[t._v("当哨兵监视该服务器主观下线后，会询问其他监视该服务的哨兵，看他们是否也认为该服务主观下线，接收到足够数量的哨兵判断为主观下线后，就可以认为该服务器客观下线。")]),t._v(" "),s("p",[t._v("根据优先级、偏移量、runid选择新的主服务器。")]),t._v(" "),s("blockquote",[s("p",[t._v("优先级在redis.conf中默认：slave-priority 100，值越小优先级越高")]),t._v(" "),s("p",[t._v("偏移量是指获得原主机数据最全的")]),t._v(" "),s("p",[t._v("每个redis实例启动后都会随机生成一个40位的runid")])]),t._v(" "),s("p",[s("img",{attrs:{src:"E:%5Cjava%5C%E5%85%AB%E8%82%A1%5C7-redis.assets%5Cimage-20220314162853069.png",alt:"image-20220314162853069"}})]),t._v(" "),s("h4",{attrs:{id:"_17-缓存穿透、缓存击穿、缓存雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-缓存穿透、缓存击穿、缓存雪崩"}},[t._v("#")]),t._v(" 17 缓存穿透、缓存击穿、缓存雪崩")]),t._v(" "),s("p",[s("strong",[t._v("缓存穿透")])]),t._v(" "),s("p",[t._v("描述：指缓存和数据库种都没有的数据，而用户不断发起请求。比如用一个不存在的用户id获取用户信息，不论缓存还是数据库都没有，若黑客利用此漏洞进行攻击可能压垮数据库。")]),t._v(" "),s("p",[t._v("解决：对空值缓存、设置访问白名单、布隆过滤器、设置实时监控。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220715213639434.png",alt:"image-20220715213639434"}})]),t._v(" "),s("p",[s("strong",[t._v("缓存击穿")])]),t._v(" "),s("p",[t._v("描述：指缓存中没有但数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去读数据，引起数据库压力瞬间增大，造过大压力。")]),t._v(" "),s("p",[t._v("解决：设置热点数据不过期、接口限流熔断降级、设置锁")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220314161212375.png",alt:"image-20220314161212375"}})]),t._v(" "),s("p",[s("strong",[t._v("缓存雪崩")])]),t._v(" "),s("p",[t._v("描述：指缓存中数据大批量到期，而查询数据量巨大，引起数据库压力过大甚至宕机。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到而查数据库。")]),t._v(" "),s("p",[t._v("解决：设置热点数据不过期；过期时间设置随机，防止同一时间大量过期；分布式部署时将热点数据分布在不同缓存数据库中。")])])}),[],!1,null,null,null);s.default=_.exports}}]);