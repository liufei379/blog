(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{513:function(a,_,v){"use strict";v.r(_);var t=v(20),r=Object(t.a)({},(function(){var a=this,_=a.$createElement,v=a._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"java基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java基础"}},[a._v("#")]),a._v(" Java基础")]),a._v(" "),v("h2",{attrs:{id:"_0、常见系统问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0、常见系统问题"}},[a._v("#")]),a._v(" 0、常见系统问题")]),a._v(" "),v("p",[v("strong",[a._v("0.1 在生产环境 Linux 服务器上，发现某台运行 Java 服务的服务器的 CPU100%，不借助任何可视化工具，怎么进行问题的定位?")])]),a._v(" "),v("p",[a._v("1.top 找出进程 CPU 比较高 PID")]),a._v(" "),v("p",[a._v("2.top -Hp PID 打印 该 PID 进程下哪条线程的 CPU 占用比较高 tid")]),a._v(" "),v("p",[a._v("3.printf “%x\\n” tid 将该 id 进行 16 进制转换 tidhex")]),a._v(" "),v("p",[a._v("4.jstack PID |grep tidhex 打印线程的堆栈信息")]),a._v(" "),v("h2",{attrs:{id:"_1、基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、基础"}},[a._v("#")]),a._v(" 1、基础")]),a._v(" "),v("h3",{attrs:{id:"_1-1-理论概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-理论概念"}},[a._v("#")]),a._v(" 1.1 理论概念")]),a._v(" "),v("h4",{attrs:{id:"_1-1-1-面向对象设计原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-面向对象设计原则"}},[a._v("#")]),a._v(" 1.1.1 面向对象设计原则")]),a._v(" "),v("p",[v("strong",[a._v("开闭原则：")])]),a._v(" "),v("p",[a._v("对扩展开放，对修改关闭。"),v("br"),a._v("\n极端要求就是：程序完成后，除非是修改错误，不然不能修改代码，只能扩展代码。"),v("br"),a._v(" "),v("strong",[a._v("依赖导致原则：")])]),a._v(" "),v("p",[a._v("调用者（客户代码）不依赖于被调用者（实现代码）的实现细节，而是依赖其抽象"),v("br"),a._v("\n调用者不依赖被调用者的具体实现，而是依赖被调用者的抽象，这样被调用者后续可以被无感替换掉。"),v("br"),a._v(" "),v("strong",[a._v("单一职责原则：")])]),a._v(" "),v("p",[a._v("一个类，最好只做一件事，只有一个引起它的变化。"),v("br"),a._v(" "),v("strong",[a._v("接口隔离原则：")])]),a._v(" "),v("p",[a._v("使用多个小的专门的接口，而不要使用一个大的总接口。")]),a._v(" "),v("p",[v("strong",[a._v("最少知道原则：")])]),a._v(" "),v("p",[a._v("一个实体应当尽量少的与其他实体之间发生相互作用，使得系统功能模块相对独立。"),v("br"),a._v(" "),v("strong",[a._v("合成复用原则：")])]),a._v(" "),v("p",[a._v("原则是尽量使用合成/聚合的方式，而不是使用继承。"),v("br"),a._v(" "),v("strong",[a._v("里氏替换原则：")])]),a._v(" "),v("p",[a._v("子类必须能够替换其基类。")]),a._v(" "),v("p",[a._v("类B继承类A时，除添加新的方法完成新增功能P2外，尽量不要重写父类A的方法，也尽量不要重载父类A的方法。")]),a._v(" "),v("h3",{attrs:{id:"_1-2-常见基础题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-常见基础题"}},[a._v("#")]),a._v(" 1.2 常见基础题")]),a._v(" "),v("h4",{attrs:{id:"_1-2-1-equals和-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-equals和-区别"}},[a._v("#")]),a._v(" 1.2.1 equals和==区别？")]),a._v(" "),v("p",[a._v("首先明确一点，equals是方法，==是操作符。")]),a._v(" "),v("p",[v("strong",[a._v("1. 如果比较的是基本数据类型：")])]),a._v(" "),v("p",[a._v("只讨论==，因为equals是不存在的，因为java中基本数据类型不能调用method的。")]),a._v(" "),v("p",[v("strong",[a._v("2. 如果比较的是引用类型：")])]),a._v(" "),v("p",[a._v("**==：**比较两个引用是不是指向同一个对象实例，即相同的地址。")]),a._v(" "),v("p",[a._v("**equals：**equals方法是Object类的方法，默认是直接调用==来实现。如果没有被重写，那么调用equals与==没有区别。但是，在一些类库中这个方法被覆盖了，比如八大基本数据类型的包装类和String类，它们的equals方法比较的是值是否相同，此时equals就与==有区别了。")]),a._v(" "),v("h4",{attrs:{id:"_1-2-2-java抽象类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-java抽象类"}},[a._v("#")]),a._v(" 1.2.2 java抽象类？")]),a._v(" "),v("p",[a._v("1.抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。")]),a._v(" "),v("p",[a._v("2.由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。")]),a._v(" "),v("p",[a._v("3.在Java中抽象类表示的是继承关系，一个类只能继承一个抽象类，而一个类却可以实现多个接口。")]),a._v(" "),v("h4",{attrs:{id:"_1-2-3-深拷贝和浅拷贝的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-深拷贝和浅拷贝的区别"}},[a._v("#")]),a._v(" 1.2.3 深拷贝和浅拷贝的区别？")]),a._v(" "),v("p",[a._v("拷贝针对的是引用对象的拷贝。")]),a._v(" "),v("p",[a._v("浅拷贝只复制指向某个对象的引用，不复制内存本身，新旧对象还是共享同一块内存。")]),a._v(" "),v("p",[a._v("深拷贝会复制一个一模一样的对象，新对象跟原对象不共享内存。")]),a._v(" "),v("h4",{attrs:{id:"_1-2-4-java是值传递还是引用传递"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-java是值传递还是引用传递"}},[a._v("#")]),a._v(" 1.2.4 java是值传递还是引用传递？")]),a._v(" "),v("p",[a._v("形式参数为基本数据类型的，就是值传递，如果为引用数据类型就是引用传递。")]),a._v(" "),v("p",[v("strong",[a._v("Java中其实还是值传递的，只不过对于对象参数，值的内容是对象的引用。")])]),a._v(" "),v("h4",{attrs:{id:"_1-2-5-为什么重写equals还要重写hashcode"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-为什么重写equals还要重写hashcode"}},[a._v("#")]),a._v(" 1.2.5 为什么重写equals还要重写hashcode？")]),a._v(" "),v("p",[a._v("如：重写一个自定义类的equals可以实现我们的意图，即这两个类判断为相等，但它们的hashcode是不同的。")]),a._v(" "),v("p",[a._v("如果我们用hashset去add的时候，由于底层是通过hashcode判断是不是同一对象，这个时候不重写hashcode就会被判断成不同对象。")]),a._v(" "),v("h4",{attrs:{id:"_1-2-6-为什么notify-wait-等函数定义在object中-而不是thread中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-6-为什么notify-wait-等函数定义在object中-而不是thread中"}},[a._v("#")]),a._v(" 1.2.6 为什么notify(), wait()等函数定义在Object中，而不是Thread中？")]),a._v(" "),v("p",[a._v("锁可以是任意对象，所以任意对象调用方法一定定义在Object类中。")]),a._v(" "),v("h4",{attrs:{id:"_1-2-7-java中的object九大方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-7-java中的object九大方法"}},[a._v("#")]),a._v(" 1.2.7 Java中的object九大方法？")]),a._v(" "),v("p",[v("strong",[a._v("protected Object clone()")]),a._v(" 创建并返回此对象的一个副本。")]),a._v(" "),v("p",[v("strong",[a._v("boolean equals(Object obj)")]),a._v(" 指示某个其他对象是否与此对象“相等”。")]),a._v(" "),v("p",[v("strong",[a._v("protected void finalize()")]),a._v(" 当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。")]),a._v(" "),v("p",[v("strong",[a._v("Class<? extendsObject> getClass()")]),a._v(" 返回一个对象的运行时类。")]),a._v(" "),v("p",[v("strong",[a._v("int hashCode()")]),a._v(" 返回该对象的哈希码值。")]),a._v(" "),v("p",[v("strong",[a._v("void notify()")]),a._v(" 唤醒在此对象监视器上等待的单个线程。")]),a._v(" "),v("p",[v("strong",[a._v("void notifyAll()")]),a._v(" 唤醒在此对象监视器上等待的所有线程。")]),a._v(" "),v("p",[v("strong",[a._v("String toString()")]),a._v(" 返回该对象的字符串表示。")]),a._v(" "),v("p",[v("strong",[a._v("void wait()")]),a._v(" 导致当前的线程等待，直到其他线程调用此对象的notify()方法或notifyAll() 方法。")]),a._v(" "),v("p",[v("strong",[a._v("void wait(long timeout)")]),a._v(" 导致当前的线程等待，直到其他线程调用此对象的 notify() 方法或")]),a._v(" "),v("p",[v("strong",[a._v("void wait(long timeout, int nanos)")]),a._v(" 导致当前的线程等待，直到其他线程调用此对象的 notify()")]),a._v(" "),v("h4",{attrs:{id:"_1-2-8-aspectj与spring-aop比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-8-aspectj与spring-aop比较"}},[a._v("#")]),a._v(" 1.2.8 Aspectj与Spring AOP比较？")]),a._v(" "),v("p",[a._v("1.AspectJ使用编译时和class文件加载时织入时，Spring AOP利用运行时织入。")]),a._v(" "),v("p",[a._v("2.Spring aop是基于代理的aop框架。这意味着, 要实现目标对象的各个方面, 它将创建该对象的代理。")]),a._v(" "),v("p",[a._v("使用以下两种方法之一实现:")]),a._v(" "),v("p",[v("strong",[a._v("1）JDK 动态代理 —— Spring AOP 的首选方式。只要目标对象实现甚至一个接口, 就会使用 JDK 动态代理；")])]),a._v(" "),v("p",[v("strong",[a._v("2）CGLIB 代理 —— 如果目标对象没有实现接口, 则可以使用 CGLIB 代理。")])]),a._v(" "),v("p",[a._v("3. AspectJ在实际运行之前就完成了织入，所以说它生成的类是没有额外运行时开销的。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/1db4d06b6df72d433261dfb06b4084f9.png",alt:""}})]),a._v(" "),v("h4",{attrs:{id:"_1-2-9-sleep-方法和wait-方法区别和共同点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-9-sleep-方法和wait-方法区别和共同点"}},[a._v("#")]),a._v(" 1.2.9 sleep()方法和wait()方法区别和共同点?")]),a._v(" "),v("p",[a._v("1.两者最主要的区别在于：**sleep() 方法没有释放锁，而 wait() 方法释放了锁** 。")]),a._v(" "),v("p",[a._v("2.两者都可以暂停线程的执行。")]),a._v(" "),v("p",[a._v("3.wait() 通常被用于线程间交互/通信，sleep() 通常被用于暂停执行。")]),a._v(" "),v("p",[a._v("4.wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 notify() 或者 notifyAll() 方法。sleep() 方法执行完成后，线程会自动苏醒。或者可以使用 wait(long timeout) 超时后线程会自动苏醒。")]),a._v(" "),v("h3",{attrs:{id:"_1-3-threadlocal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-threadlocal"}},[a._v("#")]),a._v(" 1.3 ThreadLocal")]),a._v(" "),v("h4",{attrs:{id:"_1-3-1-弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-弱引用"}},[a._v("#")]),a._v(" 1.3.1 弱引用")]),a._v(" "),v("h5",{attrs:{id:"_1-3-1-1-为什么使用弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-1-为什么使用弱引用"}},[a._v("#")]),a._v(" 1.3.1.1 为什么使用弱引用？")]),a._v(" "),v("p",[a._v("考虑下面的场景：")]),a._v(" "),v("p",[a._v("有一个Product类代表一种产品，这个类被设计为不可扩展的，此时我们想要为每个产品增加一个编号。")]),a._v(" "),v("p",[a._v("一种解决方案是使用HashMap<Product, Integer>。")]),a._v(" "),v("p",[a._v("于是问题来了，如果我们已经不再需要一个Product对象存在于内存中（比如已经卖出了这件产品），假设指向它的引用为productA，我们这时会给productA赋值为null，然而这时productA过去指向的Product对象并不会被回收，因为它显然还被HashMap引用着。")]),a._v(" "),v("p",[a._v("所以这种情况下，我们想要真正的回收一个Product对象，仅仅把它的强引用赋值为null是不够的，还要把相应的条目从HashMap中移除。")]),a._v(" "),v("p",[a._v("显然“从HashMap中移除不再需要的条目”这个工作我们不想自己完成，我们希望告诉垃圾收集器：在只有HashMap中的key在引用着Product对象的情况下，就可以回收相应Product对象了。")]),a._v(" "),v("p",[a._v("根据前面弱引用的定义，使用弱引用能帮助我们达成这个目的。我们只需要用一个指向Product对象的弱引用对象来作为HashMap中的key就可以了。")]),a._v(" "),v("h5",{attrs:{id:"_1-3-1-2-如何使用弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-2-如何使用弱引用"}},[a._v("#")]),a._v(" 1.3.1.2 如何使用弱引用？")]),a._v(" "),v("p",[a._v("拿上面介绍的场景举例，我们使用一个指向Product对象的弱引用对象来作为HashMap的key，只需这样定义这个弱引用对象：")]),a._v(" "),v("p",[a._v("Product productA = new Product(...);")]),a._v(" "),v("p",[a._v("WeakReference<Product> weakProductA = new WeakReference<>(productA);")]),a._v(" "),v("p",[a._v("若引用对象weakProductA就指向了Product对象productA。我们怎么通过weakProduct获取它所指向的Product对象productA呢？很简单，只需要下面这句代码：")]),a._v(" "),v("p",[a._v("Product product = weakProductA.get();")]),a._v(" "),v("h5",{attrs:{id:"_1-3-1-3-什么是弱引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-3-什么是弱引用"}},[a._v("#")]),a._v(" 1.3.1.3 什么是弱引用？")]),a._v(" "),v("p",[a._v("Java中的弱引用具体指的是java.lang.ref.WeakReference<T>类，我们首先来看一下官方文档对它做的说明：")]),a._v(" "),v("p",[a._v("弱引用对象的存在不会阻止它所指向的对象被垃圾回收器回收。弱引用最常见的用途是实现规范映射(canonicalizing mappings，比如哈希表）。")]),a._v(" "),v("p",[a._v("假设垃圾收集器在某个时间点决定一个对象是弱可达的(weakly reachable)（也就是说当前指向它的全都是弱引用），这时垃圾收集器会清除所有指向该对象的弱引用，然后把这个弱可达对象标记为可终结(finalizable)的，这样它随后就会被回收。与此同时或稍后，垃圾收集器会把那些刚清除的弱引用放入创建弱引用对象时所指定的 引用队列(Reference Queue)中。")]),a._v(" "),v("h5",{attrs:{id:"_1-3-1-4-强引用、软引用、虚引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-4-强引用、软引用、虚引用"}},[a._v("#")]),a._v(" 1.3.1.4 强引用、软引用、虚引用")]),a._v(" "),v("p",[a._v("实际上，Java中存在四种引用，它们由强到弱依次是：强引用、软引用、弱引用、虚引用。下面我们简单介绍下除弱引用外的其他三种引用：")]),a._v(" "),v("p",[a._v("**强引用（Strong Reference）：**通常我们通过new来创建一个新对象时返回的引用就是一个强引用，若一个对象通过一系列强引用可到达，它就是强可达的(strongly reachable)，那么它就不被回收。")]),a._v(" "),v("p",[a._v("**软引用（Soft Reference）：**软引用和弱引用的区别在于，若一个对象是弱引用可达，无论当前内存是否充足它都会被回收，而软引用可达的对象在内存不充足时才会被回收，因此软引用要比弱引用“强”一些。")]),a._v(" "),v("p",[a._v("**虚引用（Phantom Reference）：**虚引用是Java中最弱的引用，那么它弱到什么程度呢？它是如此脆弱以至于我们通过虚引用甚至无法获取到被引用的对象，虚引用存在的唯一作用就是当它指向的对象被回收后，虚引用本身会被加入到引用队列中，用作记录它指向的对象已被回收。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-2-什么是threadlocal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-什么是threadlocal"}},[a._v("#")]),a._v(" 1.3.2 什么是ThreadLocal？")]),a._v(" "),v("p",[a._v("**ThreadLocal是线程局部变量。**这种变量在多线程的情况下访问时能保证各个线程变量相对独立于其他线程中的变量。ThreadLocal实例通常来说是private static类型的，用于关联线程和线程上下文。")]),a._v(" "),v("p",[v("strong",[a._v("Thread跟ThreadLocal什么关系：")])]),a._v(" "),v("p",[a._v("Thread和ThreadLocal是绑定的， ThreadLocal依赖于Thread去执行， Thread将需要隔离的数据存放到ThreadLocal(准确的讲是ThreadLocalMap)中, 来实现多线程处理。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-3-spring如何处理bean多线程下的并发问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-spring如何处理bean多线程下的并发问题"}},[a._v("#")]),a._v(" 1.3.3 Spring如何处理bean多线程下的并发问题？")]),a._v(" "),v("p",[a._v("ThreadLocal天生为解决相同变量的访问冲突问题， 所以这个对于spring的默认单例bean的多线程访问是一个完美的解决方案。")]),a._v(" "),v("p",[a._v("Spring也确实是用了ThreadLocal来处理多线程下相同变量并发的线程安全问题。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-4-spring如何保证数据库事务在同一个连接下执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-spring如何保证数据库事务在同一个连接下执行"}},[a._v("#")]),a._v(" 1.3.4 Spring如何保证数据库事务在同一个连接下执行？")]),a._v(" "),v("p",[a._v("DataSourceTransactionManager 是spring的数据源事务管理器， 它会在你调用getConnection()的时候从数据库连接池中获取一个connection， 然后将其与ThreadLocal绑定， 事务完成后解除绑定。这样就保证了事务在同一连接下完成。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-5-thread-threadlocalmap-threadlocal三者的逻辑关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-thread-threadlocalmap-threadlocal三者的逻辑关系"}},[a._v("#")]),a._v(" 1.3.5 Thread,ThreadLocalMap,ThreadLocal三者的逻辑关系？")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/aa81c354b20c4ae6ffd597d2b4fc05f7.png",alt:""}})]),a._v(" "),v("p",[a._v("1.Thread实例和ThreadLocalMap实例是一对一的关系")]),a._v(" "),v("p",[a._v("2.ThreadLocalMap实例和ThreadLocal实例是一对多的关系。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-6-threadlocalmap底层结构是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6-threadlocalmap底层结构是什么"}},[a._v("#")]),a._v(" 1.3.6 ThreadLocalMap底层结构是什么？")]),a._v(" "),v("p",[a._v("ThreadLocal中的map数据结构和HashMap不同，它并没有实现Map接口，也不像HashMap一样通过链表来解决hash冲突！")]),a._v(" "),v("p",[a._v("进阶问题：那么ThreadLocal是如何解决hash冲突呢？")]),a._v(" "),v("p",[a._v("答：采用的开放地址法，不是hashmap的链地址法！")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/f84f6cc479df2580684d296869e29983.png",alt:""}})]),a._v(" "),v("p",[a._v("**ThreadLocal是采用数组来存储的。**ThreadLocalMap在存储的时候会给每一个ThreadLocal对象一个threadLocalHashCode，在插入过程中，根据ThreadLocal对象的hash值，定位到table中的位置i，int i = key.threadLocalHashCode & (len-1)。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/355230b67f4edb39bc516bc151179b57.png",alt:""}})]),a._v(" "),v("h4",{attrs:{id:"_1-3-7-threadlocal为什么可能发生内存泄漏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-7-threadlocal为什么可能发生内存泄漏"}},[a._v("#")]),a._v(" 1.3.7 ThreadLocal为什么可能发生内存泄漏？")]),a._v(" "),v("p",[a._v("当使用ThreadLocal保存一个value时，会在ThreadLocalMap中的数组插入一个Entry对象，按理说key-value都应该以强引用保存在Entry对象中，但在ThreadLocalMap的实现中，key被保存到了WeakReference对象中（弱引用对象）。")]),a._v(" "),v("p",[a._v("这就导致了一个问题：ThreadLocal在没有外部强引用时，发生GC时key会被回收，如果创建ThreadLocal的线程一直持续运行（线程池的情况，线程跑完后会回到线程池，并不会销毁），那么这个Entry对象中的value就有可能一直得不到回收，发生内存泄露。")]),a._v(" "),v("h4",{attrs:{id:"_1-3-8-threadlocal如何避免内存泄露"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-8-threadlocal如何避免内存泄露"}},[a._v("#")]),a._v(" 1.3.8 ThreadLocal如何避免内存泄露？")]),a._v(" "),v("p",[a._v("使用完ThreadLocal之后，调用remove方法。")]),a._v(" "),v("h3",{attrs:{id:"_1-4-volatile"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-volatile"}},[a._v("#")]),a._v(" 1.4 volatile")]),a._v(" "),v("h4",{attrs:{id:"_1-4-1-说说你对volatile关键字的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-说说你对volatile关键字的理解"}},[a._v("#")]),a._v(" 1.4.1 说说你对volatile关键字的理解？")]),a._v(" "),v("p",[a._v("被volatile修饰的共享变量具有2个特性。")]),a._v(" "),v("p",[a._v("1.保证了不同线程之间操作该共享变量的"),v("strong",[a._v("内存可见性")]),a._v("。")]),a._v(" "),v("p",[a._v("2."),v("strong",[a._v("禁止指令重排序")])]),a._v(" "),v("h4",{attrs:{id:"_1-4-2-详细说一下什么是内存可见性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-详细说一下什么是内存可见性"}},[a._v("#")]),a._v(" 1.4.2 详细说一下什么是内存可见性？")]),a._v(" "),v("p",[a._v("1.4.2.1 Java内存模型")]),a._v(" "),v("p",[a._v("关于内存可见性的话，要先提一下"),v("strong",[a._v("Java内存模型（JMM）")]),a._v("，Java虚拟机里面定义的一种抽象模型。")]),a._v(" "),v("p",[a._v("根据JMM的设计，系统存在一个主内存(Main Memory)，Java中所有变量都储存在主存中，对于所有线程都是共享的。")]),a._v(" "),v("p",[a._v("每条线程都有自己的工作内存(Working Memory)，工作内存中保存的是主存中某些变量的拷贝，线程对所有变量的操作都是在工作内存中进行，线程之间无法相互直接访问，变量传递均需要通过主存完成。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/b623d6c4052c2b4b6c5c92e18feaac0f.png",alt:""}})]),a._v(" "),v("p",[v("strong",[a._v("但是JMM这个主内存和工作内存跟JVM中的堆、栈内存实际上是没什么关系的。")])]),a._v(" "),v("p",[a._v("1.4.2.2 jvm和jmm之间的关系")]),a._v(" "),v("p",[v("strong",[a._v("jmm中的主内存、工作内存与jvm中的Java堆、栈、方法区等并不是同一个层次的内存划分，这两者基本上是没有关系的。")])]),a._v(" "),v("p",[v("strong",[a._v("如果一定要勉强对应起来，jmm的主内存可以对应jvm堆中对象实例部分，jmm工作内存可以对应jvm虚拟机栈中的部分区域。")])]),a._v(" "),v("p",[a._v("从更低层次上说，主内存就直接对应于物理硬件的内存，")]),a._v(" "),v("p",[a._v("而为了获取更好的运行速度，虚拟机可能会让工作内存优先存储于寄存器和高速缓存中，因为程序运行时主要访问读写的是工作内存。")]),a._v(" "),v("p",[a._v("1.4.2.3 内存可见性")]),a._v(" "),v("p",[a._v("volatile保证了变量的可见性主要是因为：")]),a._v(" "),v("p",[a._v("1）线程更新volatile变量的时候，先去更新工作内存中这个变量的副本，然后再将改变后副本的值从工作内存刷新到主内存。")]),a._v(" "),v("p",[a._v("2）线程读取volatile变量的时候，先去主内存中读取最新值到工作内存，然后再从工作内存中读取。")]),a._v(" "),v("h4",{attrs:{id:"_1-4-3-说一下什么是指令重排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-说一下什么是指令重排序"}},[a._v("#")]),a._v(" 1.4.3 说一下什么是指令重排序？")]),a._v(" "),v("p",[a._v("1.4.3.1 指令重排序")]),a._v(" "),v("p",[a._v("重排序是指编译器和处理为了优化程序性能而对指令序列进行重新排序的一种手段。"),v("br"),a._v("\n如果操作之间不存在数据依赖关系，这些操作就可能被编译器和处理器重新排序。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/47201b6fe879fe111de38310506ee605.png",alt:""}})]),a._v(" "),v("p",[a._v("1.4.3.2 happens-before（先行发生原则）")]),a._v(" "),v("p",[a._v("Java内存模型中会默认保证一定的有序性，就是happens-before规则，指令重排序需要遵循这个规则。")]),a._v(" "),v("p",[a._v("如果2个操作的执行顺序无法重happens-before规则中推导出来，就不能保证他们的有序性，jvm就可能对他们进行重排序。")]),a._v(" "),v("p",[v("strong",[a._v("happens-before主要有以下几条规则：")])]),a._v(" "),v("p",[a._v("1."),v("strong",[a._v("程序次序规则：")]),a._v(" 一个线程内，按照代码顺序，书写在前面的操作先行发生于书写在后面的操作。（保证单线程的执行结果是正确的，对于无关紧要的重排序是允许的。）")]),a._v(" "),v("p",[a._v("2."),v("strong",[a._v("锁定规则：")]),a._v(" 一个unLock操作先行发生于后面对同一个锁的lock操作。")]),a._v(" "),v("p",[a._v("3."),v("strong",[a._v("volatile变量规则：")]),a._v(" 对一个变量的写操作先行发生与后面对这个变量的读操作。")]),a._v(" "),v("p",[a._v("4."),v("strong",[a._v("传递规则：")]),a._v(" 如果操作A先行发生于操作B，而操作B又先发生于操作C，则可以得出操作A先行发生于操作C。")]),a._v(" "),v("p",[v("strong",[a._v("前四条规则是比较重要的，后四条是比较显而易见的。")])]),a._v(" "),v("p",[a._v("1."),v("strong",[a._v("线程启动规则：")]),a._v(" Thread对象的start()方法先行发生于此线程的每一个动作")]),a._v(" "),v("p",[a._v("2."),v("strong",[a._v("线程中断规则：")]),a._v(" 对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生。")]),a._v(" "),v("p",[a._v("3."),v("strong",[a._v("线程终结规则：")]),a._v(" 线程中所有的操作都先行发生于线程的终止检测,我们可以通过Thread.join()方法结束、Thread.isAlive()的返回值手段检测到线程已经终止执行。")]),a._v(" "),v("p",[a._v("4."),v("strong",[a._v("对象终结规则：")]),a._v(" 一个对象的初始化完成先行发生于他的finalize()方法的开始。")]),a._v(" "),v("h2",{attrs:{id:"_2、数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、数据结构"}},[a._v("#")]),a._v(" 2、数据结构")]),a._v(" "),v("h3",{attrs:{id:"_2-1-数组和链表区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-数组和链表区别"}},[a._v("#")]),a._v(" 2.1 数组和链表区别？")]),a._v(" "),v("p",[a._v("1.链表通过指针来连接元素与元素，数组则是把所有元素按次序依次存储。")]),a._v(" "),v("p",[a._v("2.链表的插入删除元素相对数组较为简单，不需要移动元素，且较为容易实现长度扩充，但是寻找某个元素较为困难。")]),a._v(" "),v("p",[a._v("3.数组寻找某个元素较为简单，但插入与删除比较复杂，由于最大长度需要再编程一开始时指定，故当达到最大长度时，扩充长度不如链表方便。")]),a._v(" "),v("h3",{attrs:{id:"_2-2-hashmap的数据结构-默认初试容量和负载因子是多少"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-hashmap的数据结构-默认初试容量和负载因子是多少"}},[a._v("#")]),a._v(" 2.2 HashMap的数据结构？默认初试容量和负载因子是多少？")]),a._v(" "),v("p",[a._v("1.数组+链表，链表长度大于8时接红黑树。")]),a._v(" "),v("p",[a._v("2.初始容量（16）和负载因子（0.75）（负载因子就是指填充到多少开始扩大容量）。")]),a._v(" "),v("h3",{attrs:{id:"_2-3-hashmap的数组长度为什么要保证是2的幂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-hashmap的数组长度为什么要保证是2的幂"}},[a._v("#")]),a._v(" 2.3 hashmap的数组长度为什么要保证是2的幂？")]),a._v(" "),v("p",[a._v("在HashMap中通过利用key的hashcode值,来进行位运算")]),a._v(" "),v("p",[a._v("公式:index = e.hash & (newCap - 1)")]),a._v(" "),v("p",[a._v("length - 1的值是所有二进制位全为1,这种情况下,index的结果等同于hashcode后几位的值")]),a._v(" "),v("p",[a._v("只要输入的hashcode本身分布均匀,hash算法的结果就是均匀的。")]),a._v(" "),v("p",[a._v("所以,HashMap的默认长度为16,是为了降低hash碰撞的几率。")]),a._v(" "),v("h3",{attrs:{id:"_2-4-hashmap的扩容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-hashmap的扩容"}},[a._v("#")]),a._v(" 2.4 hashmap的扩容？")]),a._v(" "),v("p",[a._v("rehash：当Map中的元素大于数组长度的75%时，就会进行扩容，JDK1.7之前扩容时很有可能会造成环链，后续get时则可能会变成死循环，线程不安全。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/81633c5cec010d92fc2717c41a6f5391.png",alt:"在这里插入图片描述"}})]),a._v(" "),v("h3",{attrs:{id:"_2-5-能讲一下concurrenthashmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-能讲一下concurrenthashmap"}},[a._v("#")]),a._v(" 2.5 能讲一下ConcurrentHashMap？")]),a._v(" "),v("p",[a._v("JDK1.7中ConcurrentHashMap采用分段锁，分成16个小的hashMap，锁定当前的小hashMap其他")]),a._v(" "),v("p",[a._v("hashMap不受影响。JDK1.8之后不再采取分段锁，主要采用CAS原子指令实现无锁的高并发操作。")]),a._v(" "),v("h3",{attrs:{id:"_2-6-concurrenthashmap-1-7-与-1-8-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-concurrenthashmap-1-7-与-1-8-区别"}},[a._v("#")]),a._v(" 2.6 ConcurrentHashMap 1.7 与 1.8 区别?")]),a._v(" "),v("p",[a._v("1.JDK1.8 采用 synchronized 代替可重入锁 ReentrantLock。")]),a._v(" "),v("p",[a._v("2.JDK1.8 取消了 Segment 分段锁的数据结构，使用数组+链表+红黑树的结构代替。")]),a._v(" "),v("p",[a._v("3.JDK1.8 对每个数组元素加锁，1.7 对要操作的 Segment 数据段加锁。")]),a._v(" "),v("h2",{attrs:{id:"_3、并发加锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、并发加锁"}},[a._v("#")]),a._v(" 3、并发加锁")]),a._v(" "),v("h3",{attrs:{id:"_3-1-synchronized"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-synchronized"}},[a._v("#")]),a._v(" 3.1 Synchronized")]),a._v(" "),v("h4",{attrs:{id:"_3-1-1-cas与synchronized的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-cas与synchronized的区别"}},[a._v("#")]),a._v(" 3.1.1 CAS与Synchronized的区别？")]),a._v(" "),v("p",[a._v("1）"),v("strong",[a._v("CAS")]),a._v(" 是 compare and swap 的缩写，即我们所说的比较交换。")]),a._v(" "),v("p",[a._v("cas 是一种基于锁的操作，而且是乐观锁。在java中锁分为乐观锁和悲观锁。")]),a._v(" "),v("p",[a._v("悲观锁是将资源锁住，等一个之前获得锁的线程释放锁之后，下一个线程才可以访问。")]),a._v(" "),v("p",[a._v("而乐观锁采取了 一种宽泛的态度，通过某种方式不加锁来处理资源，比如通过给记录加 version 来获取数据， 性能较悲观锁有很大的提高。")]),a._v(" "),v("p",[a._v("CAS 操作包含三个操作数：内存位置(V)、旧值(A)和新值(B)。如果内存地址里面的值和 A 的值是一样的，那么就将内存里面的值更新成 B。")]),a._v(" "),v("p",[a._v("CAS 是通过无限循环来获取数据的，若果在第一轮循环中，a线程获取地址里面的值被b线程修改了，那么a线程需要自旋，到下次循环才有可能机会执行。")]),a._v(" "),v("p",[a._v("java.util.concurrent.atomic 包下的类大多是使用 CAS 操作来实现的 (AtomicInteger,AtomicBoolean,AtomicLong)。")]),a._v(" "),v("p",[v("strong",[a._v("CAS存在的问题")]),a._v("：")]),a._v(" "),v("p",[a._v("1.1）ABA问题：一个线程把值从A改为B再改回A，另一个线程不知道这个过程。")]),a._v(" "),v("p",[a._v("解决方案：使用版本号，每次修改数据时带上一个版本号。")]),a._v(" "),v("p",[a._v("1.2）循环开销大：CAS通过自旋获取锁，当一直获取不到锁时，会不断空循环。")]),a._v(" "),v("p",[a._v("1.3）不能保证代码块的原子性")]),a._v(" "),v("p",[a._v("CAS 机制所保证的知识一个变量的原子性操作，而不能保证整个代码块的原子性。比如需要保证3个变量共同进行原子性的更新，就不得不使用synchronized了。")]),a._v(" "),v("p",[a._v("2）"),v("strong",[a._v("Synchronized")]),a._v("：悲观锁。")]),a._v(" "),v("p",[a._v("synchronized主要解决的是多个线程之间的同步问题，synchronized关键字可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。")]),a._v(" "),v("p",[a._v("jdk1.6之前性能较差，主要基于Monitor机制实现，依赖底层操作系统的互斥原语Mutex。线程之间的切换需要操作系统从用户态转换到内核态进行，时间成本很高。jdk1.6之后做了优化，锁分成了4种状态，分别是无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态。")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/682973622a174c1739687fc1dbb237bf.png",alt:""}})]),a._v(" "),v("p",[v("strong",[a._v("偏向锁")]),a._v("：针对没有锁竞争的场合。jvm启动之后默认有4s的延迟，对每个新建的对象都开启偏向锁模式，在这之前新建的都是无锁状态。（可通过配置调整）")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/7fa0c584875bb67a94f0052a85e38fc7.png",alt:""}})]),a._v(" "),v("p",[v("strong",[a._v("轻量级锁")]),a._v("：出现的场景是线程交替执行同步块。通过CAS获取锁（没有自旋），失败膨胀成重量级锁。")]),a._v(" "),v("p",[a._v("A线程执行完加锁模块，线程还没结束，此时B线程去加锁（发现加不了偏向锁：A线程还在执行），升级为轻量级锁。轻量级锁解锁后后直接到无锁状态。（同样，重量级锁解锁的时候也只会到无锁状态。重量级锁解锁时是GC的时候才清掉标识，较慢，可睡眠一两秒后再看。）")]),a._v(" "),v("p",[v("strong",[a._v("重量级锁")]),a._v("：出现场景：竞争激烈的情况（A线程的锁还没释放，B线程也去加锁）。去内核态操作前，会先尝试自旋CAS获取锁。")]),a._v(" "),v("h4",{attrs:{id:"_3-1-2-synchronized的加锁方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-synchronized的加锁方式"}},[a._v("#")]),a._v(" 3.1.2 synchronized的加锁方式")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/3d610b3102f2418d67ea06b0eb798c68.png",alt:""}})]),a._v(" "),v("h4",{attrs:{id:"_3-1-3-new-object-占多少字节-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-new-object-占多少字节-16"}},[a._v("#")]),a._v(" 3.1.3 new Object(); 占多少字节？ 16")]),a._v(" "),v("p",[a._v("对象在内存中存储的布局可以分为三块区域:")]),a._v(" "),v("p",[a._v("对象头(Header)")]),a._v(" "),v("p",[a._v("实例数据 (Instance Data)")]),a._v(" "),v("p",[a._v("对齐填充(Padding)")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/b41ac8ff00bc20cb247e255149ef7708.png",alt:""}})]),a._v(" "),v("p",[a._v("Mark Word：8字节")]),a._v(" "),v("p",[a._v("MetaData：4字节")]),a._v(" "),v("p",[a._v("数组长度：4字节")]),a._v(" "),v("p",[a._v("长度必须是8的倍数，不够则用“对齐填充”补齐。")]),a._v(" "),v("h4",{attrs:{id:"_3-1-4-关于无锁偏向锁轻量级锁重量级锁的理解误区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-关于无锁偏向锁轻量级锁重量级锁的理解误区"}},[a._v("#")]),a._v(" 3.1.4 关于无锁偏向锁轻量级锁重量级锁的理解误区")]),a._v(" "),v("p",[a._v("1. 无锁 --\x3e 偏向锁 --\x3e 轻量级锁 --\x3e 重量级锁。 （不存在无锁 --\x3e 偏向锁）")]),a._v(" "),v("p",[a._v("2. 轻量级锁自旋获取锁失败，会膨胀成重量级锁。 （轻量级锁不存在自旋）")]),a._v(" "),v("p",[a._v("3. 重量级锁不存在自旋。 （重量级锁存在自旋）")]),a._v(" "),v("h4",{attrs:{id:"_3-1-5-锁状态转换流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-锁状态转换流程"}},[a._v("#")]),a._v(" 3.1.5 锁状态转换流程")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/cea17025824c7f18df589fa3b7211b82.png",alt:""}})]),a._v(" "),v("h3",{attrs:{id:"_3-2-aqs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-aqs"}},[a._v("#")]),a._v(" 3.2 AQS")]),a._v(" "),v("h4",{attrs:{id:"_3-2-1-聊聊你对aqs的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-聊聊你对aqs的理解"}},[a._v("#")]),a._v(" 3.2.1 聊聊你对AQS的理解？")]),a._v(" "),v("p",[v("strong",[a._v("AbstractQueuedSynchronizer，抽象队列同步器")])]),a._v(" "),v("p",[a._v("AQS它是JUC（java.util.concurrent）包中多个组件的底层实现。比如像ReentrantLock、Semaphore、CountDownLatch都用到了AQS。")]),a._v(" "),v("p",[a._v("AQS提供了2种锁机制，分别是"),v("strong",[a._v("独占锁")]),a._v("和"),v("strong",[a._v("共享锁")]),a._v("。")]),a._v(" "),v("p",[a._v("所谓独占锁就是存在多个线程去竞争同一共享资源的时候，同一个时刻，只允许一个线程去访问这个共享资源。也就是多个线程，只有一个能获取锁。比如ReentrantLock就是独占锁。")]),a._v(" "),v("p",[a._v("共享锁就是在同一时刻允许多个线程去获取锁。比如CountDownLatch、Semaphore。")]),a._v(" "),v("p",[a._v("然后，关于AQS的设计，它有几个核心的东西：")]),a._v(" "),v("p",[a._v("AQS对象里面有一个int类型变量："),v("strong",[a._v("state，代表了加锁状态")]),a._v("。独占锁初始状态下是0")]),a._v(" "),v("p",[a._v("还有一个关键变量：加锁线程，用来"),v("strong",[a._v("记录当前加锁的是那个线程")]),a._v("。初始状态下是null")]),a._v(" "),v("p",[a._v("另外AQS内部还有一个"),v("strong",[a._v("等待队列")]),a._v("，用来专门存放加锁失败的线程。")]),a._v(" "),v("p",[v("strong",[a._v("关于独占锁加锁和释放锁过程：")])]),a._v(" "),v("p",[a._v("1.线程过来加锁，通过cas的方式把state从0变成1，同时把“加锁线程”设置成自己。")]),a._v(" "),v("p",[a._v("2.如果加锁的时候发现state不是0，会判断一下“加锁线程”是不是自己，是自己的话state累加，不是的话则加锁失败。")]),a._v(" "),v("p",[a._v("3.加锁失败的会将自己放入同步队列中等待，等其他线程释放锁之后，自己再重新尝试加锁。")]),a._v(" "),v("p",[a._v("4.加锁的线程在执行完自己的业务逻辑代码后释放锁，释放锁会将state变量减1，当state变量为0，则会彻底释放锁，同时把“加锁线程”这个变量设置成null。")]),a._v(" "),v("p",[a._v("5.彻底释放锁后，会从同步队列的队头唤醒线程尝试加锁。")]),a._v(" "),v("p",[v("strong",[a._v("还有一个点：公平锁与非公平锁，AQS支持公平和非公平锁：")])]),a._v(" "),v("p",[a._v("AQS的处理方式是：在竞争锁资源的时候，公平锁需要去判断同步等待队列中时候有阻塞的线程，如果有则需要去排队等待。而非公平锁的处理方式是，不管同步等待队列中是否有阻塞线程，它都会直接去尝试更改互斥变量“state”去竞争锁。")]),a._v(" "),v("h4",{attrs:{id:"_3-2-2-synchronized和reentrantlock的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-synchronized和reentrantlock的区别"}},[a._v("#")]),a._v(" 3.2.2 synchronized和ReentrantLock的区别？")]),a._v(" "),v("p",[a._v("1.synchronized是JVM层次的锁实现，ReentrantLock是JDK层次的锁实现。")]),a._v(" "),v("p",[a._v("2.synchronized的锁状态无法在代码中直接判断，但ReentrantLock可以通过#isLocked判断。")]),a._v(" "),v("p",[a._v("3.synchronized是非公平锁，ReentrantLock是可以是公平也可以是非公平的。")]),a._v(" "),v("p",[a._v("4.synchronized是不可以被中断的，而ReentrantLock#lockInterruptibly方法是可以被中断的。")]),a._v(" "),v("p",[a._v("5.发生异常时synchronized会自动释放锁，而ReentrantLock需要开发者在finally块中显示释放锁。")]),a._v(" "),v("p",[a._v("6.ReentrantLock获取锁的形式有多种:立即返回是否成功的tryLock(),等待指定时长的获取，更灵活;")]),a._v(" "),v("h4",{attrs:{id:"_3-2-3-aqs定义的两种队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-aqs定义的两种队列"}},[a._v("#")]),a._v(" 3.2.3 AQS定义的两种队列？")]),a._v(" "),v("p",[v("strong",[a._v("同步等待队列:")])]),a._v(" "),v("p",[a._v("主要用于维护获取锁失败时入队的线程。")]),a._v(" "),v("p",[v("strong",[a._v("条件等待队列:")])]),a._v(" "),v("p",[a._v("调用await()的时候会释放锁，然后线程会加入到条件队列，调用signal()唤醒的时候会把条件队列中的线程节点移动到同步队列中，等待再次获得锁。")]),a._v(" "),v("h3",{attrs:{id:"_3-3-死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-死锁"}},[a._v("#")]),a._v(" 3.3 死锁")]),a._v(" "),v("h4",{attrs:{id:"_3-3-1-什么是死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-什么是死锁"}},[a._v("#")]),a._v(" 3.3.1 什么是死锁？")]),a._v(" "),v("p",[a._v("死锁是指两个或两个以上的线程在执行过程中，由于竞争资源而造成的一种阻塞现象，若无外力作用，它们将无法推进下去。")]),a._v(" "),v("h4",{attrs:{id:"_3-3-2-死锁产生的必要条件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-死锁产生的必要条件"}},[a._v("#")]),a._v(" 3.3.2 死锁产生的必要条件？")]),a._v(" "),v("p",[a._v("1."),v("strong",[a._v("互斥条件")]),a._v("：即在一段时间内某一资源仅能一个线程占用")]),a._v(" "),v("p",[a._v("2."),v("strong",[a._v("占有且等待条件")]),a._v("：当线程因为请求资源而阻塞的时候，对已经获得的资源保持不放。")]),a._v(" "),v("p",[a._v("3."),v("strong",[a._v("不可剥夺条件")]),a._v("：线程对获得的资源为使用完成之前，不能被剥夺，只能使用完时由自己释放。")]),a._v(" "),v("p",[a._v("4."),v("strong",[a._v("循环等待条件")]),a._v("：发生死锁时，必然存在一个进程和资源的环形链。")]),a._v(" "),v("h4",{attrs:{id:"_3-3-3-怎么预防死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-怎么预防死锁"}},[a._v("#")]),a._v(" 3.3.3 怎么预防死锁？")]),a._v(" "),v("p",[a._v("互斥条件无法被破坏，锁本身就是通过互斥来解决线程安全问题。")]),a._v(" "),v("p",[a._v("1."),v("strong",[a._v("资源一次性分配")]),a._v("（破坏占用且等待的条件）")]),a._v(" "),v("p",[a._v("2."),v("strong",[a._v("可剥夺资源")]),a._v("：进程已经获得部分资源，但得不到其他资源，则释放已占有的资源（破坏不可剥夺条件）")]),a._v(" "),v("p",[a._v("3."),v("strong",[a._v("资源有序分配")]),a._v("：按顺序请求资源（破坏循环等待条件）")]),a._v(" "),v("h2",{attrs:{id:"_4、多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、多线程"}},[a._v("#")]),a._v(" 4、多线程")]),a._v(" "),v("h3",{attrs:{id:"_4-1-线程的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-线程的生命周期"}},[a._v("#")]),a._v(" 4.1 线程的生命周期？")]),a._v(" "),v("p",[a._v("线程的生命周期主要包括了5种状态")]),a._v(" "),v("p",[v("strong",[a._v("NEW新建、RUNNABLE就绪、RUNNING运行、BLOCKED阻塞、DEAD死亡。")])]),a._v(" "),v("p",[a._v("**NEW：**线程创建")]),a._v(" "),v("p",[a._v("**RUNNABLE：**执行start方法")]),a._v(" "),v("p",[a._v("**RUNNING：**分配到了CPU时间片，开始执行代码")]),a._v(" "),v("p",[v("strong",[a._v("BLOCKED：")])]),a._v(" "),v("p",[a._v("• 等待阻塞：调用了o.wait()方法，该线程放入等待队列")]),a._v(" "),v("p",[a._v("• 同步阻塞：获取对象锁时，锁被其他线程占用，该线程进入lock pool")]),a._v(" "),v("p",[a._v("• 其他阻塞：sleep 或者 join方法时")]),a._v(" "),v("p",[a._v("**DEAD：**线程执行完毕，或者抛出异常")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/f47d307edd9445e00755e38bb0f15782.png",alt:""}})]),a._v(" "),v("p",[v("strong",[a._v("几个重要方法：")])]),a._v(" "),v("p",[a._v("**sleep()：**当前线程进入阻塞，但不释放对象锁。")]),a._v(" "),v("p",[a._v("**yield()：**不会阻塞，让出cpu时间。")]),a._v(" "),v("p",[a._v("**t.join()：**方法只会使主线程进入等待池并等待t线程执行完毕后才会被唤醒。并不影响同一时刻处在运行状态的其他线程。")]),a._v(" "),v("p",[a._v("**obj.wait()：**当前线程调用对象的wait()方法，当前线程释放对象锁，进入等待队列。依靠notify()/notifyAll()唤醒。")]),a._v(" "),v("p",[a._v("**obj.notify()：**唤醒任意在此对象监视器上等待的单个线程。")]),a._v(" "),v("h3",{attrs:{id:"_4-2-线程池有哪些核心参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-线程池有哪些核心参数"}},[a._v("#")]),a._v(" 4.2 线程池有哪些核心参数？")]),a._v(" "),v("p",[a._v("1、int "),v("strong",[a._v("corePoolSize")]),a._v("：核心池的大小。线程池的基本大小，并且只有在工作队列满了的情况下才会创建超出这个数量的线程。")]),a._v(" "),v("p",[a._v("这里需要注意的是：")]),a._v(" "),v("p",[a._v("在创建ThreadPoolExecutor的时候，线程不会立即启动，要等到有任务提交时才启动，除非调用prestartCoreThread/prestartAllCoreThreads事先启动核心线程。")]),a._v(" "),v("p",[a._v("再考虑到keepAliveTime和allowCoreThreadTimeOut超时参数的影响，所以没有任务需要执行的时候，线程池的大小不一定是corePoolSize。")]),a._v(" "),v("p",[a._v("2、int "),v("strong",[a._v("maximumPoolSize")]),a._v("：线程池最大线程数，它表示在线程池中最多能创建多少个线程。")]),a._v(" "),v("p",[a._v("线程池中允许的最大线程数，线程池中的当前线程数目不会超过该值。")]),a._v(" "),v("p",[a._v("如果队列中任务已满，并且当前线程个数小于maximumPoolSize，那么会创建新的线程来执行任务。")]),a._v(" "),v("p",[a._v("3、long "),v("strong",[a._v("keepAliveTime")]),a._v("：表示线程没有任务执行时最多保持多久时间会终止。")]),a._v(" "),v("p",[a._v("4、TimeUnit "),v("strong",[a._v("unit")]),a._v("：参数keepAliveTime的时间单位，有7种取值，在TimeUnit类中有7种静态属性。")]),a._v(" "),v("p",[a._v("5、BlockingQueue<Runnable> "),v("strong",[a._v("workQueue")]),a._v("：一个阻塞队列，用来存储等待执行的任务。无界、有界、优先级、无缓冲区队列")]),a._v(" "),v("p",[a._v("6、ThreadFactory "),v("strong",[a._v("threadFactory")]),a._v("：线程工厂，主要用来创建线程。")]),a._v(" "),v("p",[a._v("7、RejectedExecutionHandler "),v("strong",[a._v("handler")]),a._v("：拒绝策略，表示当拒绝处理任务时的策略。")]),a._v(" "),v("h3",{attrs:{id:"_4-3-线程池的执行流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-线程池的执行流程"}},[a._v("#")]),a._v(" 4.3 线程池的执行流程？")]),a._v(" "),v("p",[a._v("1、如果当前线程池中的线程数目小于corePoolSize，则来一个任务，就创建一个线程去执行这个任务。")]),a._v(" "),v("p",[a._v("2、如果当前线程池中的线程数目>=corePoolSize，则每来一个任务，会尝试将其添加到任务队列当中。")]),a._v(" "),v("p",[a._v("若添加成功，则该任务会等待空闲线程将其取出去执行。")]),a._v(" "),v("p",[a._v("若添加失败（一般来说是任务缓存队列已满），则尝试创建新的线程去执行这个任务maximumPoolSize。")]),a._v(" "),v("p",[a._v("3、如果当前线程池中的线程数目达到maximumPoolSize（此时线程池的任务缓存队列已满），则会采取任务拒绝策略进行处理；")]),a._v(" "),v("p",[a._v("4、线程池中的线程数量大于corePoolSize时，如果某线程空闲时间超过keepAliveTime，线程将被终止，直至线程池中的线程数目不大于corePoolSize；")]),a._v(" "),v("p",[a._v("如果允许为核心池中的线程设置存活时间，那么核心池中的线程空闲时间超过keepAliveTime，线程也会被终止。")]),a._v(" "),v("h3",{attrs:{id:"_4-4-线程池的拒绝策略有哪几种"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-线程池的拒绝策略有哪几种"}},[a._v("#")]),a._v(" 4.4 线程池的拒绝策略有哪几种？")]),a._v(" "),v("p",[a._v("任务拒绝策略，通常有以下四种策略：")]),a._v(" "),v("p",[a._v("1）ThreadPoolExecutor.AbortPolicy：丢弃任务并抛出RejectedExecutionException异常。")]),a._v(" "),v("p",[a._v("2）ThreadPoolExecutor.DiscardPolicy：也是丢弃任务，但是不抛出异常。")]),a._v(" "),v("p",[a._v("3）ThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务。")]),a._v(" "),v("p",[a._v("4）ThreadPoolExecutor.CallerRunsPolicy：由调用线程（提交任务的线程）处理该任务。")]),a._v(" "),v("h3",{attrs:{id:"_4-5-线程池的核心线程与最大线程数大小设置多少合适"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-线程池的核心线程与最大线程数大小设置多少合适"}},[a._v("#")]),a._v(" 4.5 线程池的核心线程与最大线程数大小设置多少合适？")]),a._v(" "),v("p",[v("strong",[a._v("核心线程数：")])]),a._v(" "),v("p",[v("strong",[a._v("CPU密集型")]),a._v("任务应配置尽可能小的线程，如配置"),v("strong",[a._v("NCPU+1")]),a._v("个线程的线程池。")]),a._v(" "),v("p",[v("strong",[a._v("IO密集型")]),a._v("任务线程并不是一直在执行任务 ，则应配置尽可能多的线程，如"),v("strong",[a._v("2*NCPU")]),a._v(" 。")]),a._v(" "),v("p",[v("strong",[a._v("最大线程数：")])]),a._v(" "),v("p",[v("strong",[a._v("最大线程数 = （最大任务数-队列容量）/每个线程每秒处理能力")])]),a._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"/img/media/6d7021ba80cfb83f3971fdae8926b94a.png",alt:""}})])]),a._v(" "),v("h3",{attrs:{id:"_4-6-多线程并行执行-然后汇总结果返回怎么实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-多线程并行执行-然后汇总结果返回怎么实现"}},[a._v("#")]),a._v(" 4.6 多线程并行执行，然后汇总结果返回怎么实现？")]),a._v(" "),v("p",[v("img",{attrs:{src:"/img/media/413c10308c03005874954844ea549eda.png",alt:""}})])])}),[],!1,null,null,null);_.default=r.exports}}]);