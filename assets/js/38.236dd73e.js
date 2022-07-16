(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{362:function(s,t,n){"use strict";n.r(t);var a=n(3),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"synchronized关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized关键字"}},[s._v("#")]),s._v(" synchronized关键字")]),s._v(" "),t("h2",{attrs:{id:"synchronized介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized介绍"}},[s._v("#")]),s._v(" synchronized介绍")]),s._v(" "),t("p",[s._v("synchronized关键字解决了多个线程之间访问资源的同步性，"),t("strong",[s._v("它可以保证被它修饰的方法或代码块在任意时刻只能由一个线程运行")]),s._v("。")]),s._v(" "),t("p",[s._v("在Java早期版本，synchronized是重量级锁，因为监视器锁Monitor依赖于底层的操作系统的Mutex Lock来实现的，Java线程是映射到操作系统的原生线程上的，如果要挂起或唤醒一个线程，都需要操作系统帮我完成，而操作系统线程之间的切换需要从用户态转换为内核态，这个转换过程时间较长，时间成本相对较高。")]),s._v(" "),t("p",[s._v("Java6对synchronized进行了优化，如自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等减小锁操作的开销。锁主要存在四种状态：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，它们会随着竞争的激励而逐渐升级。锁可以升级，但不可以降级，这种策略是为了提高获得锁和释放锁的效率。所以，不论是各种开源框架还是JDK源码都大量使用synchronized关键字。")]),s._v(" "),t("h2",{attrs:{id:"synchronized使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized使用"}},[s._v("#")]),s._v(" synchronized使用")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("修饰实例方法：作用域当前对象实例，进入同步代码块前要获得当前对象实例的锁。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修饰静态方法：给当前类加锁，会作用类的所有对象实例，进入同步代码块前要获得当前class的锁。如果，线程A调用实例对象的非静态synchronized方法，而线程B需要调用这个实例对象所属类的静态synchronized方法，是允许的，不会发生互斥现象，因为访问静态synchronized方法占用的是当前类的锁，访问非静态synchronized方法占用的锁是当前实例对象锁。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修饰代码块：指定加锁对象，给对象/类加锁。"),t("code",[s._v("synchronized(this|object)")]),s._v(" 表示进入同步代码库前要获得给定对象的锁。"),t("code",[s._v("synchronized(类.class)")]),s._v(" 表示进入同步代码前要获得 当前 class 的锁")])])]),s._v(" "),t("p",[s._v("注意：构造方法不可以使用，因为构造方法本身就是线程安全的，不存在同步的构造方法。")]),s._v(" "),t("h2",{attrs:{id:"synchronized-修饰同步代码块的底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-修饰同步代码块的底层原理"}},[s._v("#")]),s._v(" synchronized 修饰同步代码块的底层原理")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"synchronized 代码块"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("synchronized同步语句块的实现使用的是monitorenter和monitorexit指令，其中monitorenter指令指向同步代码块的开始位置，monitorexit指令则知名同步代码块的结束位置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/synchronized%E5%85%B3%E9%94%AE%E5%AD%97%E5%8E%9F%E7%90%86.png",alt:"synchronized关键字原理"}})]),s._v(" "),t("p",[s._v("当指向moniterentor指令时，线程试图获取锁，也就是获取对象监视器monitor的持有权。")]),s._v(" "),t("blockquote",[t("p",[s._v("monitor是基于c++实现的，wait/notify等方法也依赖于monitor对象，这也就是为什么只有在同步块或方法中才能调用wait/notify等方法，否则会抛出java.lang.IllegalMonitorStateException的异常的原因。")])]),s._v(" "),t("p",[s._v("在执行monitorenter时，会尝试获取对象的锁，如果锁的计数器为0则表示锁可以获取，获取后，锁的计数器设为1，也就是加1。")]),s._v(" "),t("p",[s._v("对象锁的拥有线程才可以执行monitorexit指令来释放锁，在执行该指令后，锁计数器设为0，表明锁被释放，其他线程可以尝试获取锁。")]),s._v(" "),t("p",[s._v("如果获取对象锁失败，那当前线程就要阻塞等待，直到锁被另外一个线程释放为止。")]),s._v(" "),t("h2",{attrs:{id:"synchronized-修饰方法的底层原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-修饰方法的底层原理"}},[s._v("#")]),s._v(" synchronized 修饰方法的底层原理")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SynchronizedDemo2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"synchronized 方法"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("没有monitorenter和monitorexit指令，取而代之的是ACC_SYNCHRONIZED标识，该标识指明了该方法是一个同步方法，JVM通过ACC_SYNCHRONIZED访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。如果是实例方法，JVM会尝试获取实例对象的锁；如果是静态方法，JVM会尝试获取当前class的锁。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/zouquchen/Images/main/imgs/synchronized%E5%85%B3%E9%94%AE%E5%AD%97%E5%8E%9F%E7%90%862.png",alt:"synchronized关键字原理"}})]),s._v(" "),t("h2",{attrs:{id:"synchronized和reentrantlock的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和reentrantlock的区别"}},[s._v("#")]),s._v(" synchronized和ReentrantLock的区别")]),s._v(" "),t("p",[s._v("相同点：")]),s._v(" "),t("ol",[t("li",[s._v("都是可重入锁")]),s._v(" "),t("li",[s._v("都保证了可见性和互斥性")]),s._v(" "),t("li",[s._v("都可以用于控制多线程共享对象访问")])]),s._v(" "),t("p",[s._v("不同点：")]),s._v(" "),t("ul",[t("li",[s._v("synchronized是java关键字，依赖于JVM，而RentrantLock是Lock接口下的实现类，依赖于API。")]),s._v(" "),t("li",[s._v("synchronized隐式的获取锁和释放锁，ReentrantLock显式的获取和释放锁，在使用时避免程序异常无法释放锁，需要在finally控制块中进行解锁操作。")]),s._v(" "),t("li",[s._v("synchronized是非公平的，ReentrantLock默认也是非公平的，但是可以通过修改参数来实现公平锁。")]),s._v(" "),t("li",[s._v("ReentrantLock可以实现选择性通知（绑定多个条件）。synchronized关键字与wait()、notify()、notifyAll()实现等待/通知，随机唤醒线程；reetrantLock类可以借助于Condition实现选择性通知，精确唤醒的线程。（sync、wait、notify —— lock、await、signal）")]),s._v(" "),t("li",[s._v("synchronized不可中断，除非抛出异常或者正常运行完成；ReentrantLock等待可中断，可以设置超时或使用interrupt()方法中断。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);