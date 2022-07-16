(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{386:function(_,v,t){"use strict";t.r(v);var a=t(3),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h4",{attrs:{id:"_1-说一说对mysql索引的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-说一说对mysql索引的理解"}},[_._v("#")]),_._v(" 1 说一说对MySQL索引的理解？")]),_._v(" "),v("p",[v("strong",[_._v("回答：什么是索引？作用？存储类型？优缺点？分类？")])]),_._v(" "),v("p",[_._v("索引是一个单独的、存储在磁盘上的数据库结构，包含着对数据表里所有记录的引用指针。索引的作用相当于目录（就像查字典时候的目录）。使用索引可以快速找出在某个或多个列中的特定值，所有MySQL列类型都可以被索引，对相关列使用索引时提高查询操作速度的最佳途径。")]),_._v(" "),v("p",[_._v("MySQL中索引的存储类型有两者，B+Tree和Hash。")]),_._v(" "),v("p",[_._v("索引的优点：")]),_._v(" "),v("ol",[v("li",[_._v("通过创建唯一索引，可以保证数据库中每一行数据的唯一性。")]),_._v(" "),v("li",[_._v("可以大大加快数据的查询速度（创建索引的主要原因）")]),_._v(" "),v("li",[_._v("在实现数据的参考完整性方面，可以加速表与表之间的连接。")]),_._v(" "),v("li",[_._v("在使用分组和排序子句进行数据查询时，也可以显著减少查询中分组和排序的时间。")])]),_._v(" "),v("p",[_._v("索引的缺点：")]),_._v(" "),v("ol",[v("li",[_._v("创建索引和维护索引需要消耗时间，并且随着数据量的增加所耗费的时间也会增加。")]),_._v(" "),v("li",[_._v("索引需要占磁盘空间，除了数据表占数据空间外，每一个索引还要占一定的物理空间。")]),_._v(" "),v("li",[_._v("当对表中的数据进行增加、删除和修改的时候，索引也要动态地维护，这样就降低了数据的维护速度。")])]),_._v(" "),v("h4",{attrs:{id:"_2-使用索引一定能够提高查询性能吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用索引一定能够提高查询性能吗"}},[_._v("#")]),_._v(" 2 使用索引一定能够提高查询性能吗？")]),_._v(" "),v("p",[_._v("大多数情况，索引查询都比全表扫描要快。但是如果数据库的数据量不大，那么使用索引页不一定能够带来很大的提升。")]),_._v(" "),v("h4",{attrs:{id:"_4-索引的底层数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-索引的底层数据结构"}},[_._v("#")]),_._v(" 4 索引的底层数据结构？")]),_._v(" "),v("ol",[v("li",[_._v("Hash表")]),_._v(" "),v("li",[_._v("B+树，多路平衡查找树，B+树是B树的一种变体。B树和B+树中的B都是Balanced的意思。目前，大部分数据库都采用B-Tree或B+Tree作为索引结构。")])]),_._v(" "),v("blockquote",[v("p",[_._v("B树，不要读成“B减树”")])]),_._v(" "),v("h4",{attrs:{id:"_5-索引可以分为哪几类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引可以分为哪几类"}},[_._v("#")]),_._v(" 5 索引可以分为哪几类？")]),_._v(" "),v("p",[v("strong",[_._v("普通索引和唯一索引")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("普通索引是MySQL中的基本索引类型，允许在定义索引的列中插入重复值和空值。")])]),_._v(" "),v("li",[v("p",[_._v("唯一索引要求列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。")])]),_._v(" "),v("li",[v("p",[_._v("主键索引是一种特殊的唯一索引，不允许有空值。")])])]),_._v(" "),v("p",[v("strong",[_._v("单列索引和组合索引")])]),_._v(" "),v("ul",[v("li",[_._v("单列索引即一个索引只包含单个列，一个表可以有多个单列索引。")]),_._v(" "),v("li",[_._v("组合索引是指在多个字段组合创建的索引，只有在查询条件中使用了这些字段的左边字段时，索引才被使用。使用组合索引时遵循最左前缀集合。")])]),_._v(" "),v("p",[v("strong",[_._v("全文索引")])]),_._v(" "),v("ul",[v("li",[_._v("全文索引类型为FULLTEXT，在定义索引的列上支持值的全文查找，允许在这些索引列中插入重复值和空值。全文索引可以在CHAR、VARCHAR或者TEXT类型的列上创建。")])]),_._v(" "),v("p",[v("strong",[_._v("空间索引")])]),_._v(" "),v("ul",[v("li",[_._v("空间索引时对空间数据类型的字段建立的索引，MySQL中的空间数据类型有4种，分别是GEOMETRY、POINT、LINESTRING和POLYGON。MySQL使用SPATIAL关键字进行扩展，使得能够用创建正规索引类似的语法创建空间索引。创建空间索引的列，必须将其声明为NOT NULL，空间索引只能在存储引擎为MyISAM的表中创建。")])]),_._v(" "),v("h4",{attrs:{id:"_6-mysql怎样判断要不要加索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-mysql怎样判断要不要加索引"}},[_._v("#")]),_._v(" 6 MySQL怎样判断要不要加索引？")]),_._v(" "),v("ol",[v("li",[_._v("当唯一性是某种数据本身的特征时，指定唯一索引。使用唯一索引需能确保定义的列的数据完整性，以提高查询速度。")]),_._v(" "),v("li",[_._v("在频繁进行排序和分组（即order by和group by）的列上建立索引，如果待排序的列有多个，可以在这些列上建立组合索引。")])]),_._v(" "),v("h4",{attrs:{id:"_7-只要创建了索引-就一定会走索引吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-只要创建了索引-就一定会走索引吗"}},[_._v("#")]),_._v(" 7 只要创建了索引，就一定会走索引吗？")]),_._v(" "),v("p",[_._v("不一定。")]),_._v(" "),v("p",[v("strong",[_._v("情况1：组合索引")])]),_._v(" "),v("p",[_._v("在使用组合索引的时候，如果没有遵顼从“最左前缀”的原则进行搜索，则搜索是不起作用的。")]),_._v(" "),v("p",[_._v("举例，假设在id、name、age字段上已经成功建立了一个名为Multidx的组合索引。索引行中按id、name、age的顺序存放，索引可以搜索id、(id, name)、(id, name, age) 字段组合。如果不构成索引最左面的前缀，那么MySQL不能使用局部索引，如（age）或者（name，age）则不能使用该索引查询。")]),_._v(" "),v("p",[v("strong",[_._v("情况2：模糊查询like")])]),_._v(" "),v("p",[_._v("后匹配，走索引；前匹配，走全表。")]),_._v(" "),v("p",[_._v("lile%keyword 索引失效；like keyword% 索引有效； like %keyword% 索引失效；")]),_._v(" "),v("p",[v("strong",[_._v("情况3：IN OR")])]),_._v(" "),v("p",[_._v("当IN和OR数据较少时，会走索引；当数据较多时，不走索引。具体是多少由优化器自己决定。")]),_._v(" "),v("h4",{attrs:{id:"_8-索引是越多越好吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-索引是越多越好吗"}},[_._v("#")]),_._v(" 8 索引是越多越好吗？")]),_._v(" "),v("p",[_._v("索引并非越多越好，一个表中如有大量的索引，不仅占用磁盘空间，还会影响插入、删除、更新等语句的性能，因为在表中数据更改时，索引也会进行调整和更新。")]),_._v(" "),v("h4",{attrs:{id:"_9-所有的字段都适合创建索引吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-所有的字段都适合创建索引吗"}},[_._v("#")]),_._v(" 9 所有的字段都适合创建索引吗？")]),_._v(" "),v("p",[_._v("不是，下列几种情况不适合创建索引：")]),_._v(" "),v("ol",[v("li",[_._v("频繁更新的字段不适合建立索引。")]),_._v(" "),v("li",[_._v("where条件中用不到的字段不适合建立索引。")]),_._v(" "),v("li",[_._v("数据表较少的表不需要键索引。")]),_._v(" "),v("li",[_._v("数据重复且分布比较均匀的字段不适合建索引，例如性别、真假值。")]),_._v(" "),v("li",[_._v("参与计算的列不适合键索引。")])]),_._v(" "),v("h4",{attrs:{id:"_10-innodb的主键索引和辅助索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-innodb的主键索引和辅助索引"}},[_._v("#")]),_._v(" 10 InnoDB的主键索引和辅助索引？")]),_._v(" "),v("p",[_._v("InnoDB的数据文件本身就是索引文件，表数据文件本身就是按B+ Tree组织的一个索引结构，这棵树的叶节点data域保存了完整的数据记录。这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是主索引。这种索引叫做聚集索引。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/E93917AAC699168036AF5C36393FFC04.png",alt:"img"}}),_._v(" "),v("p",[_._v("InnoDB的所有辅助索引都引用主键作为data域。聚集索引的实现方式使得按主键的搜索十分高效，但是辅助索引搜索需要检索两边索引：首先检索辅助索引获得主键，然后用主键的主索引中检索获得记录。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/84DF5715E092FEF25762F5F53C547640.png",alt:"img"}}),_._v(" "),v("p",[v("strong",[_._v("主键索引（Primary Key）")])]),_._v(" "),v("p",[_._v("数据表的主键列使用的就是主键索引。一张数据表有只能有一个主键，并且主键不能为null，不能重复。")]),_._v(" "),v("blockquote",[v("p",[_._v("在MySQL的InnoDB的表中，当没有显式的指定表的主键时，InnoDB会自动先检查表中是否有唯一索引且不允许存在null值的字段，如果有，则选择该字段为默认的主键，否则InnoDB将会自动创建一个6Byte的自增主键。")])]),_._v(" "),v("p",[v("strong",[_._v("二级索引（辅助索引、非聚集索引）")])]),_._v(" "),v("p",[_._v("二级索引又称为辅助索引，是因为二级索引的叶子节点存储的数据是主键。也就是说，通过二级索引，可以定位主键的位置。")]),_._v(" "),v("p",[v("strong",[_._v("为什么不建议使用过长的字段作为主键？")])]),_._v(" "),v("p",[_._v("因为所有辅助索引都引用主索引，过长的主索引和令辅助索引变得过大。")]),_._v(" "),v("p",[v("strong",[_._v("为什么不建议用非单调的字段作为主键？")])]),_._v(" "),v("p",[_._v("因为InnoDB数据本身是一颗B+ Tree，非单调的主键会造成在插入新记录时数据文件为了维持B+ Tree的特性而频繁的分裂调整，是否低效，而使用自增字段作为主键是一个很好的选择。")]),_._v(" "),v("h4",{attrs:{id:"_11-mysql的索引为什么使用b-树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-mysql的索引为什么使用b-树"}},[_._v("#")]),_._v(" 11 MySQL的索引为什么使用B+树？")]),_._v(" "),v("p",[_._v("B+树由B树和索引顺序访问方法演化而来，它是为磁盘或其他直接存取辅助设备的一种平衡查找树，在B+树中，所有记录节点都是按键值的大小顺序放在同一层的叶子节点，各叶子节点通过指针进行连接。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/FB148499A73DF0C97F7930BA0466170E.jpeg",alt:"img"}})]),_._v(" "),v("p",[_._v("B+树索引在数据库中的一个特点就是高扇出性，例如在InnoDB存储引擎中，每个页的大小为16KB。在数据库中，B+树的高度一般都在2~4层，这意味着查找某一键值最多只需要2到4次IO操作。因为现在磁盘每秒至少可以做100次IO操作，2~4次的IO操作意味着查询时间只需0.02~0.04秒。")]),_._v(" "),v("h4",{attrs:{id:"_12-什么是联合索引-存储结构是什么-它的有效方式是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-什么是联合索引-存储结构是什么-它的有效方式是什么"}},[_._v("#")]),_._v(" 12 什么是联合索引？存储结构是什么？它的有效方式是什么？")]),_._v(" "),v("p",[_._v("联合索引是指对表上的多个列进行索引，联合索引的创建方法与单个索引创建的方法一样，不同之处仅在于由多个索引列。从本质上来说，联合索引还是一颗B+树，不同的是联合索引的键值数量不是1，而是大于等于2，如下图。只有在查询条件中使用这些字段的左边字段时，索引才会被使用，使用联合索引时遵循最左前缀集合。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220713192527892.png",alt:"image-20220713192527892"}}),_._v(" "),v("h4",{attrs:{id:"_13-mysql的hash索引和b-树索引的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-mysql的hash索引和b-树索引的区别"}},[_._v("#")]),_._v(" 13 MySQL的Hash索引和B+树索引的区别？")]),_._v(" "),v("p",[_._v("hash索引底层时hash表，B+树底层实现就是多路平衡查找树。")]),_._v(" "),v("ul",[v("li",[_._v("hash索引进行等值查询更快，但是却无法进行范围查询。因为在hash索引中经过hash函数建立索引之后，索引的顺序与原顺序无法保持一致，不能支持范围查询。而B+树的所有节点皆准寻（作家点小于父节点，右节点大于父节点，多叉树页类似），天然支持范围查找。")]),_._v(" "),v("li",[_._v("hash索引不支持使用索引进行排序。")]),_._v(" "),v("li",[_._v("hash索引不支持某户查询哈哈已经多列索引的最左前缀匹配，原理也是hash函数的不可预测。")]),_._v(" "),v("li",[_._v("hash索引任何时候都避免不了回表查询，而B+树在符合某些条件（聚簇索引、覆盖索引）的时候可以通过索引完成查询。")]),_._v(" "),v("li",[_._v("hash索引虽然在等值查询上较快，但是不稳定，性能不可预测，当某个键值存在大量重复的时候，发生hash碰撞，此时效率可能极差。而B+树的查询效率比较稳定，对于所有的查询都是从根节点到叶子节点，且树的高度较低。")])]),_._v(" "),v("p",[_._v("因此在大多数情况下，直接选择B+树索引可以获得较稳定且较好的查询速度，而不需要使用hash索引。")]),_._v(" "),v("h4",{attrs:{id:"_14-b树和b-树两者有何异同呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-b树和b-树两者有何异同呢"}},[_._v("#")]),_._v(" 14 B树和B+树两者有何异同呢？")]),_._v(" "),v("ul",[v("li",[_._v("B树的所有节点即存放键也存放数据，而B+树只有叶子节点存放键和数据，其他节点只存放键。")]),_._v(" "),v("li",[_._v("B树的叶子节点都是独立的；B+树的叶子节点有一条引用链指向与它相邻的叶子节点。")]),_._v(" "),v("li",[_._v("B树的检索过程相当于对范围内的每个节点的关键字做二分查找，可能还没有到达叶子节点，检索就结束了。而B+树的检索效率就很稳定，任何查找都是从根节点到叶子节点的过程，叶子节点的顺序检索很明显。")])]),_._v(" "),v("h4",{attrs:{id:"_16-聚集索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16-聚集索引"}},[_._v("#")]),_._v(" 16 聚集索引")]),_._v(" "),v("p",[_._v("聚集索引（聚簇索引）即索引结构和数据一起存放的索引。主键索引就属于聚集索引。")]),_._v(" "),v("blockquote",[v("p",[_._v("主键不一定就是聚集索引 https://www.cnblogs.com/teroy/p/3420686.html")]),_._v(" "),v("p",[_._v("主键也可以被声明为非聚集索引")])]),_._v(" "),v("p",[_._v("优点：")]),_._v(" "),v("ul",[v("li",[_._v("查询速度非常快，因为整个B+树本身就是一颗多路平衡树，叶子节点也是有序的，定位到索引的节点，就相当于定位到了数据。")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("依赖于有序的数据：B+树是多路平衡树，如果索引的数据不是有序的，那么就需要在插入时排序，如果是整形还好，如果是字符串或UUID这样的数据，插入和查找的速度肯定比较慢。")]),_._v(" "),v("li",[_._v("更新代价大：如果对索引列的数据修改，那么对应的索引也将会被修改，而且聚集索引的叶子节点还存放着数据，修改代价很大，所以对于主键索引来说，主键一般都是不可被修改的。")])]),_._v(" "),v("h4",{attrs:{id:"_17-非聚集索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17-非聚集索引"}},[_._v("#")]),_._v(" 17 非聚集索引")]),_._v(" "),v("p",[_._v("非聚集索引即索引结构和数据分开存放的索引，二级索引属于非聚集索引。索引的逻辑顺序与磁盘上的物理存储顺序不同。")]),_._v(" "),v("p",[_._v("优点：")]),_._v(" "),v("ul",[v("li",[_._v("更新代价比聚集索引小。因为非聚集索引的叶子节点是不存放数据的。")])]),_._v(" "),v("p",[_._v("缺点：")]),_._v(" "),v("ul",[v("li",[_._v("非聚集索引页依赖于有序的数据")]),_._v(" "),v("li",[_._v("可能会二次查询（回表）：这应该是非聚集索引最大的缺点了。当查到索引对应的指针或主键后，可能还需要根据指针或主键再到数据文件或表中查询。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220713192509058.png",alt:"image-20220713192509058"}})]),_._v(" "),v("p",[_._v("包含：")]),_._v(" "),v("ul",[v("li",[_._v("唯一索引（Unique Key）：唯一索引也是一种约束。唯一索引的属性列不能出现重复的数据，但是允许数据为NULL，一张表允许创建多个唯一索引。建立唯一索引的目的大部分时候都是为了该属性列的数据唯一性，而不是为了查询效率。")]),_._v(" "),v("li",[_._v("普通索引（Index）：普通索引的唯一作用就是快速查询数据，一张表允许创建多个普通索引，并允许数据重复和NULL。")]),_._v(" "),v("li",[_._v("全文索引（Full Text）：全文索引主要是为了检索大文本数据中的关键字的信息，是目前搜索引擎数据库使用的一种技术。")])]),_._v(" "),v("h4",{attrs:{id:"_18-聚集索引和非聚集索引有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_18-聚集索引和非聚集索引有什么区别"}},[_._v("#")]),_._v(" 18 聚集索引和非聚集索引有什么区别？")]),_._v(" "),v("p",[_._v("在InnoDB存储引擎中，可以将b+树索引分为聚集索引和辅助索引（非聚集索引）。无论时何种索引，每个页的大小都是16KB，不能更改。")]),_._v(" "),v("p",[_._v("聚集索引就是根据主键创建一颗B+树，叶子节点方表中的所有记录。辅助索引就是根据索引创建的一颗B+树，与聚集索引不同的是，其叶子节点仅存放索引键值，以及该索引键值指向的主键。也就是说，如果通过辅助索引来查找数据，那么当找到辅助索引的叶子节点后，很有可能还需要根据主键值查找聚集索引来得到数据，这种查找方式又被称为书签查找。因为辅助索引不包含行记录的所有数据，这就意味着每页可以存放更多的键值，因此其高度一般要小于聚集索引。")]),_._v(" "),v("h4",{attrs:{id:"_19-非聚集索引一定回表查询吗-覆盖索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_19-非聚集索引一定回表查询吗-覆盖索引"}},[_._v("#")]),_._v(" 19 非聚集索引一定回表查询吗（覆盖索引）？")]),_._v(" "),v("p",[_._v("非聚集索引不一定要回表查询。")]),_._v(" "),v("blockquote",[v("p",[_._v("试想一种情况，用户准备使用SQL查询用户名，而用户名字段正好建立索引。")])]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("SELECT")]),_._v(" name "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("FROM")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("table")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("WHERE")]),_._v(" name"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[_._v("'zqc'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("blockquote",[v("p",[_._v("整个索引的key本身就是name，查到对应的name直接返回就行了，无需回表查询。")])]),_._v(" "),v("h4",{attrs:{id:"_20-覆盖索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20-覆盖索引"}},[_._v("#")]),_._v(" 20 覆盖索引")]),_._v(" "),v("p",[_._v("覆盖索引即需要查询的字段正好是索引的字段，那么就直接根据该索引，就可以查到数据了，而无需回表查询。")]),_._v(" "),v("blockquote",[v("p",[_._v("如主键索引，如果一条SQL需要查询主键，那么正好根据主键索引就可以查到主键。")]),_._v(" "),v("p",[_._v("如普通索引，如果一条SQL需要查询name，name字段正好有索引，那么直接根据整个索引就可以查到数据。")])]),_._v(" "),v("h4",{attrs:{id:"_21-请简单描述一下innodb的索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_21-请简单描述一下innodb的索引"}},[_._v("#")]),_._v(" 21 请简单描述一下InnoDB的索引?")]),_._v(" "),v("p",[_._v("从数据结构角度：")]),_._v(" "),v("ul",[v("li",[_._v("B+树索引")]),_._v(" "),v("li",[_._v("Hash索引")]),_._v(" "),v("li",[_._v("Fulltext索引")]),_._v(" "),v("li",[_._v("R-tree索引")])]),_._v(" "),v("p",[_._v("从物理存储角度：")]),_._v(" "),v("ul",[v("li",[_._v("聚集索引")]),_._v(" "),v("li",[_._v("非聚集索引")])]),_._v(" "),v("p",[_._v("从逻辑角度：")]),_._v(" "),v("ul",[v("li",[_._v("普通索引")]),_._v(" "),v("li",[_._v("唯一索引")]),_._v(" "),v("li",[_._v("组合索引")]),_._v(" "),v("li",[_._v("主键索引")]),_._v(" "),v("li",[_._v("空间索引")])]),_._v(" "),v("h4",{attrs:{id:"_22-查看查询语句是否走索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_22-查看查询语句是否走索引"}},[_._v("#")]),_._v(" 22 查看查询语句是否走索引？")]),_._v(" "),v("p",[_._v("解释函数"),v("code",[_._v("EXPLAIN")])]),_._v(" "),v("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220327090728501.png",alt:"image-20220327090728501"}}),_._v(" "),v("p",[_._v("关注type结果，从好到坏依次为：")]),_._v(" "),v("p",[_._v("system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL")]),_._v(" "),v("p",[_._v("possible_keys：sql所用到的索引")]),_._v(" "),v("p",[_._v("key：显示MySQL实际决定使用的键（索引）。如果没有选择索引，键为NULL")]),_._v(" "),v("p",[_._v("rows：显示MySQL认为它执行查询时必须检查的行数。")]),_._v(" "),v("h4",{attrs:{id:"_23-索引是根据select还是where"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_23-索引是根据select还是where"}},[_._v("#")]),_._v(" 23 索引是根据SELECT还是WHERE？")]),_._v(" "),v("p",[_._v("例子：表D，有D1（number），D2(varchar2)，D3(number) 三个字段，其中D1，D2字段建立了索引。")]),_._v(" "),v("p",[_._v("select * from D ；--这时候尽管表中有索引，但是不会走索引，会全表扫描。\nselect D1 from D ; --这时候会走D1索引；\nselect * from D where D1=1; --这时候会走D1索引\nselect * from D where D2=1; --这时候不会走索引。尽管D2有索引，但是D2是字符型，where条件中是数值型，加上单引就可以走D2索引。")]),_._v(" "),v("h4",{attrs:{id:"_1-索引为什么不使用二叉查找树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-索引为什么不使用二叉查找树"}},[_._v("#")]),_._v(" 1 索引为什么不使用二叉查找树？")]),_._v(" "),v("p",[_._v("索引使用树结构存储的原因：树的查询效率高，可以保持有序性。二叉树的查询的时间复杂度O(logN)。")]),_._v(" "),v("p",[_._v("从算法逻辑上来讲，二叉查找树的查找速度和比较次数都是最小的，但还需要考虑磁盘IO的问题。数据库的索引是存储在磁盘上的，当数据量比较大的时候，索引的大小可能有几个G甚至更多。当利用索引查询的时候，不可能把整个索引全部加载到内存中，只能逐一加载每一个磁盘页，这里的磁盘页对应着索引树的节点。")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220306094033846.png",alt:"image-20220306094033846"}}),_._v(" "),v("p",[_._v("当利用二叉查找树作为索引节点的时候，最坏的情况下，磁盘IO次数等于索引树的高度。")]),_._v(" "),v("h4",{attrs:{id:"_2-b-tree原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-b-tree原理"}},[_._v("#")]),_._v(" 2 B Tree原理")]),_._v(" "),v("p",[_._v("为了减少磁盘IO次数，需要把原本“瘦高”的树结构变得“矮胖”，这就是B树的特征之一。")]),_._v(" "),v("p",[_._v("B树是一种多路平衡查找树，他的每一个节点最多包含k个孩子，k被称为B树的阶。k的大小取决于磁盘页的大小。")]),_._v(" "),v("p",[_._v("一个m阶的B树具有如下特征：")]),_._v(" "),v("ol",[v("li",[_._v("根节点至少有两个子女")]),_._v(" "),v("li",[_._v("每个中间节点都包含k-1个元素和k个孩子，其中m/2 <= k <= m")]),_._v(" "),v("li",[_._v("每一个叶子节点都包含k-1个元素，其中m/2 <= k <= m")]),_._v(" "),v("li",[_._v("所有的叶子结点都位于同一层")]),_._v(" "),v("li",[_._v("每个节点中的元素从小到大排列，节点当中k-1个元素正好是k个孩子包含的元素的值域划分。")])]),_._v(" "),v("p",[_._v("以3阶B树为例：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220306094858785.png",alt:"image-20220306094858785"}}),_._v(" "),v("p",[_._v("当要查找5时：9 -> (2,6)  -> (3,5)  -> 5。查找的次数比二叉查找树多，尤其当一个节点元素数量很多时。可相比磁盘IO的速度，内存中的比较耗时几乎可以忽略。所以只要树的高度足够高，IO次数足够小，就可以提升查询性能。")]),_._v(" "),v("p",[_._v("当进行添加和删除的时候，需要保持树的平衡，比较麻烦，暂时记住核心思想就好了。")]),_._v(" "),v("h4",{attrs:{id:"_3-b-tree原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-b-tree原理"}},[_._v("#")]),_._v(" 3 B+ Tree原理？")]),_._v(" "),v("p",[_._v("https://zhuanlan.zhihu.com/p/54102723")]),_._v(" "),v("p",[_._v("B+树是B树的一种变体，有着比B树更高的查询性能。")]),_._v(" "),v("p",[_._v("一个m阶的B+树具有如下特征：")]),_._v(" "),v("ol",[v("li",[_._v("有k个子树的中间节点包含有k个元素（B树中是k-1个元素），每个元素不保存数据，只用来索引，所有的数据都保存在叶子节点。")]),_._v(" "),v("li",[_._v("所有的叶子节点中包含了全部元素的信息，及指向含有这些元素记录的指针，且叶子节点本身依关键字的大小从小到大顺序链接。")]),_._v(" "),v("li",[_._v("所有的中间节点元素都同时存在于子节点中，在子节点元素中是最大（或最小）元素。")])]),_._v(" "),v("p",[_._v("以3阶B+树为例：")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/image-20220306100235945.png",alt:"image-20220306100235945"}}),_._v(" "),v("p",[_._v("优势：")]),_._v(" "),v("ol",[v("li",[_._v("单一节点存储更多的元素，减少查询的IO次数更少")]),_._v(" "),v("li",[_._v("所有查询都是要查找到叶子节点，查询性能更稳定。")]),_._v(" "),v("li",[_._v("所有叶子节点形成有序链表，便于范围查询。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);