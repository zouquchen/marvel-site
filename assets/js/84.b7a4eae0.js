(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{408:function(s,e,t){"use strict";t.r(e);var a=t(3),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis事务"}},[s._v("#")]),s._v(" Redis事务")]),s._v(" "),e("h2",{attrs:{id:"事务介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务介绍"}},[s._v("#")]),s._v(" 事务介绍")]),s._v(" "),e("ul",[e("li",[s._v("Redis的事务通过"),e("code",[s._v("MULTI")]),s._v("、"),e("code",[s._v("EXEC")]),s._v("、"),e("code",[s._v("DISCARD")]),s._v("、"),e("code",[s._v("WATCH")]),s._v("四个命令来完成。")]),s._v(" "),e("li",[s._v("Redis的单个命令都是原子性的，所以这里确保事务性的对象是"),e("strong",[s._v("命令集合")]),s._v("。")]),s._v(" "),e("li",[s._v("Redis将命令集合序列化并确保处于一事务的"),e("strong",[s._v("命令集合连续且不被打断")]),s._v("的执行。")]),s._v(" "),e("li",[s._v("Redis"),e("strong",[s._v("不支持回滚")]),s._v("的操作。")])]),s._v(" "),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("ul",[e("li",[s._v("MULTI：用于标记事务块的开始，Redis后续的命令逐个放入队列中，然后使用EXEC命令原子化地执行这个命令序列。")]),s._v(" "),e("li",[s._v("EXEC：在一个事务中执行所有先前放入队列的命令，然后回复正常的连接状态。")]),s._v(" "),e("li",[s._v("DISCARD：清除所有先前在一个事务中放入队列的命令，然后回复正常的连接状态。")]),s._v(" "),e("li",[s._v("WATCH：当某个事务需要按条件执行时，就要使用这个命令将给定的"),e("strong",[s._v("键设置为受监控")]),s._v("的状态。"),e("code",[s._v("WATCH key [key ...]")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MULTI\nset k1 v1\nset k2 v2\nEXEC\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("WATCH k1\nMULTI\nset k1 v1\nset k2 v2\nEXEC  // 如果这个过程中没人修改k1,则执行成功，否则执行失败\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);