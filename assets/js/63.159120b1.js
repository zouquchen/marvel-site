(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{387:function(a,t,s){"use strict";s.r(t);var _=s(3),v=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务"}},[a._v("#")]),a._v(" MySQL事务")]),a._v(" "),t("h4",{attrs:{id:"_1-什么是事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是事务"}},[a._v("#")]),a._v(" 1 什么是事务？")]),a._v(" "),t("p",[a._v("事务是一逻辑上的一组操作，要么都执行，要么都不执行？")]),a._v(" "),t("blockquote",[t("p",[a._v("举一个例子：转账")]),a._v(" "),t("p",[a._v("假如小明要给小红转1000元，那么转账操作会设计以下两个操作：")]),a._v(" "),t("p",[a._v("1 小明余额减少1000元")]),a._v(" "),t("p",[a._v("2 小红余额增加1000元。")]),a._v(" "),t("p",[a._v("事务会把两个操作堪称逻辑上的一个整体，这个整体包含的操作要么都成功，要么都失败。不会出现小明余额减少，而小红余额却没有增加的情况。要保证数据库的一致性。")])]),a._v(" "),t("p",[a._v("mysql开启事务操作")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("START")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TRANSACTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n事务代码\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"_2-什么是数据库事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是数据库事务"}},[a._v("#")]),a._v(" 2 什么是数据库事务？")]),a._v(" "),t("p",[a._v("对于单体架构，没有特指分布式事务的话，那么指的就是数据库事务。")]),a._v(" "),t("p",[a._v("数据库事务可以保证多个对数据库的操作构成一个逻辑上的整体，构成这个逻辑上的整体的这些数据库操作遵循：要么全部执行成功，要么全部不执行。")]),a._v(" "),t("h4",{attrs:{id:"_3-mysql的隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mysql的隔离级别"}},[a._v("#")]),a._v(" 3 MYSQL的隔离级别？")]),a._v(" "),t("ul",[t("li",[a._v("读未提交（Read Uncommited，RU）：事务A可以读取到事务B中未提交的数据，脏读数据。")]),a._v(" "),t("li",[a._v("读已提交（Read Committed，RC）：事务A可以读取到事务B已提交的数据，会导致不可重复读和幻读")]),a._v(" "),t("li",[a._v("可重复读（Repeatable Read，RR）：事务A开启后，不管多久，事务A读取的数据都是一致的，即使事务B已经修改。只是一定程度上避免了幻读（一开始读取数据可能有4条，再次读取时可能增减会减少了）（默认级别）")]),a._v(" "),t("li",[a._v("串行化：效率低，解决所有问题；事务排队不能并发。")])]),a._v(" "),t("blockquote",[t("p",[a._v("在PR隔离级别下，使用间隙锁（Gap Lock）理论上可以防止幻读的发生，但是不能完全防止。")])]),a._v(" "),t("h4",{attrs:{id:"_4-并发事务造成的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-并发事务造成的问题"}},[a._v("#")]),a._v(" 4 并发事务造成的问题：")]),a._v(" "),t("ul",[t("li",[a._v("脏读（Dirty read）：事务A读取到事务B中未提交的数据")]),a._v(" "),t("li",[a._v("丢失修改（Lost to modify）：事务A修改数据的同时，事务B也修改数据，事务A提交数据后，事务B也提交数据，事务B修改的数据会将数据A给覆盖。")]),a._v(" "),t("li",[a._v("不可重复度（Unrepeatable read）：事务A开启后，读取小明 15岁，此时开启事务B对小明年龄进行修改，事务A再次读取小明年龄为18.")]),a._v(" "),t("li",[a._v("幻读（Phantom read）：与不可重复的类似，读取的数据可能为3条。此时开启事务B增删数据并提交，事务A再次读取数据为2或4条，出现前后不一致的现象。")])]),a._v(" "),t("h4",{attrs:{id:"_5-事务的4个特性acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-事务的4个特性acid"}},[a._v("#")]),a._v(" 5 事务的4个特性ACID：")]),a._v(" "),t("ul",[t("li",[a._v("A：原子性（Atomicity）：事务是最小的执行单位，不可分割。要么全部完成，要么全部不起作用。")]),a._v(" "),t("li",[a._v("C：一致性（Consistency）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。")]),a._v(" "),t("li",[a._v("I：隔离性（Isolation）：多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离。")]),a._v(" "),t("li",[a._v("D：持久化（Durability）：⼀个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响")])]),a._v(" "),t("h4",{attrs:{id:"_6-事务可以嵌套吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-事务可以嵌套吗"}},[a._v("#")]),a._v(" 6 事务可以嵌套吗？")]),a._v(" "),t("p",[a._v("可以，因为嵌套事务可以是总舵事务分类中的一种，它是一个层次结构框架。有一个顶层事务控制着各个层次的事务，顶层事务之下嵌套的事务被称为子事务，它控制每一个局部的变换。")]),a._v(" "),t("p",[a._v("MYSQL数据库不支持嵌套事务。")])])}),[],!1,null,null,null);t.default=v.exports}}]);