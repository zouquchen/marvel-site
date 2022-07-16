(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{392:function(s,t,e){"use strict";e.r(t);var a=e(3),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql优化"}},[s._v("#")]),s._v(" MySQL优化")]),s._v(" "),t("h4",{attrs:{id:"_1-数据库是如何实现分页的-假设有100万条数据如何优化分页查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库是如何实现分页的-假设有100万条数据如何优化分页查询"}},[s._v("#")]),s._v(" 1 数据库是如何实现分页的，假设有100万条数据如何优化分页查询?")]),s._v(" "),t("p",[s._v("分页查询的语句")]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SELECT * FROM table LIMIT [offset,] rows | rows OFFSET offset\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("分页查询方式会从数据库第一条记录开始扫描，所以越往后，查询速度越慢，而且查询的数据越多，也会拖慢总查询速度。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("select id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("title from collect limit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 很快，0.01s")]),s._v("\nselect id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("title from collect limit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从9万条开始分页，很慢，9s")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("优化：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用子查询结合id进行优化，当id是连续递增的时候，根据查询的页数和查询的记录数可以算出查询id的范围。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("select * from orders_history where type=8 and \nid>=(select id from orders_history where type=8 limit 100000,1) \nlimit 100;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("通过索引进行查询分页。")])])]),s._v(" "),t("h4",{attrs:{id:"_2-如何优化mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何优化mysql"}},[s._v("#")]),s._v(" 2 如何优化MySQL？")]),s._v(" "),t("ol",[t("li",[s._v("存储引擎的选择：根据不同的需求选择不同的存储引擎\n"),t("ol",[t("li",[s._v("Innodb：数据完整性，支持事务，适用于高并发、擅长更新和删除。（财务系统、经常修改删除、需要事务回滚）")]),s._v(" "),t("li",[s._v("MyISAM：删除查询及插入。（微博插入、查询，很少更新和删除，数据完整性没有太强烈要求）。")])])]),s._v(" "),t("li",[s._v("字段类型的选择")]),s._v(" "),t("li",[s._v("范式与逆范式")]),s._v(" "),t("li",[s._v("索引，提高查询速度")])]),s._v(" "),t("h4",{attrs:{id:"_3-mysql查询优化手段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mysql查询优化手段"}},[s._v("#")]),s._v(" 3 MySQL查询优化手段？")]),s._v(" "),t("ol",[t("li",[s._v("查询语句不要使用select *")]),s._v(" "),t("li",[s._v("尽量减少子查询，使用关联查询left join、right join、inner join替代。")]),s._v(" "),t("li",[s._v("减少使用IN或者NOT IN，使用exists、not exists或者关联查询语句替代。")]),s._v(" "),t("li",[s._v("or的查询尽量用union或者union all代替（在确认没有重复数据或者不用剔除重复数据时，union all会更好）")]),s._v(" "),t("li",[s._v("尽量避免在where子句中使用!=或<>操作符，否则引擎将放弃使用索引而进行全表扫描。")]),s._v(" "),t("li",[s._v("应尽量避免在where子句中对字段进行null值判断，否则将导致引擎放弃使用索引而进行全表扫描，如：select id from t where num is null可以在num上设置默认值0，确保num别没有null值，如何这样查询：select id from t where num = 0。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);