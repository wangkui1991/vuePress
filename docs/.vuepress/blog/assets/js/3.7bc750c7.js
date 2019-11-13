(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(v,_,t){v.exports=t.p+"assets/img/41.cdc9215e.png"},270:function(v,_,t){v.exports=t.p+"assets/img/42.b61cab52.png"},271:function(v,_,t){v.exports=t.p+"assets/img/43.92d73c75.png"},272:function(v,_,t){v.exports=t.p+"assets/img/44.975fcbf7.png"},273:function(v,_,t){v.exports=t.p+"assets/img/45.0655d18e.png"},274:function(v,_,t){v.exports=t.p+"assets/img/46.ccfe41d9.png"},275:function(v,_,t){v.exports=t.p+"assets/img/47.06c06a75.png"},294:function(v,_,t){"use strict";t.r(_);var s=t(38),i=Object(s.a)({},function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器的执行顺序和结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的执行顺序和结构","aria-hidden":"true"}},[v._v("#")]),v._v(" 浏览器的执行顺序和结构")]),v._v(" "),s("h3",{attrs:{id:"一-什么是进程，什么是线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-什么是进程，什么是线程","aria-hidden":"true"}},[v._v("#")]),v._v(" 一. 什么是进程，什么是线程")]),v._v(" "),s("p",[v._v("并行处理：同一时刻处理多个任务，使用并行处理能大大提升性能")]),v._v(" "),s("p",[v._v("进程：并发执行程序的执行过程中资源分配和管理的基本单位")]),v._v(" "),s("p",[v._v("进程类似于工厂，是一个程序的运行实例，操作系统会为该程序创建内存，存放代码，运行中的数据和一个执行任务的主线程，这样的运行环境叫进程")]),v._v(" "),s("p",[v._v("线程：程序执行的最小单位")]),v._v(" "),s("p",[v._v("线程类似于工厂里的人，依附进程，不能单独存在，由进程来启动和管理。多线程并行处理能提升运算效率")]),v._v(" "),s("p",[v._v("进程和线程之间的关系有四个特点：")]),v._v(" "),s("ol",[s("li",[s("p",[v._v("进程中的任意一线程执行出错，都会导致整个进程的崩溃。类似于人疯了，工厂就停产了")])]),v._v(" "),s("li",[s("p",[v._v("线程之间共享进程中的数据。 类似于每个人都可以使用工厂的资源")])]),v._v(" "),s("li",[s("p",[v._v("当一个进程关闭之后，操作系统会回收进程所占用的内存。 类似于工厂倒闭了，国家收回工厂剩下的材料")])]),v._v(" "),s("li",[s("p",[v._v("进程之间的内容互相隔离。 类似于工厂之间是隔离的，互相不知道各自的资源和行为方式，但可以通过出厂交流来通信")])])]),v._v(" "),s("h3",{attrs:{id:"二-浏览器使用什么架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-浏览器使用什么架构","aria-hidden":"true"}},[v._v("#")]),v._v(" 二. 浏览器使用什么架构")]),v._v(" "),s("p",[v._v("单进程：\n早期（2007 年以前），浏览器的所有功能模块都运行在同一个进程里，包括网络，插件，js 运行环境，渲染引擎和页面等\n问题：不稳定，一个线程崩溃导致整个浏览器的崩溃\n不流畅，每个线程负责的功能多，如渲染，js 执行和插件都是运行在一个线程中，同一时刻只能有一个模块可以执行\n不安全，插件和页面脚本也能访问进程中的数据")]),v._v(" "),s("p",[v._v("多进程\n2008 年以后，chrome 形成如下的架构")]),v._v(" "),s("p",[s("img",{attrs:{src:t(269),alt:"1.jpeg"}})]),v._v(" "),s("p",[v._v("每个页面运行在单独的渲染进程中，页面的插件也是运行在单独的插件进程中，进程之间通过 IPC 机制进行通信")]),v._v(" "),s("p",[v._v("目前的多进程架构")]),v._v(" "),s("p",[s("img",{attrs:{src:t(270),alt:"2.jpeg"}})]),v._v(" "),s("ul",[s("li",[v._v("浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),v._v(" "),s("li",[v._v("渲染进程。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")]),v._v(" "),s("li",[v._v("GPU 进程。其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")]),v._v(" "),s("li",[v._v("网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),v._v(" "),s("li",[v._v("插件进程。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])]),v._v(" "),s("h3",{attrs:{id:"三、输入-url-后浏览器是如何处理的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、输入-url-后浏览器是如何处理的","aria-hidden":"true"}},[v._v("#")]),v._v(" 三、输入 URL 后浏览器是如何处理的")]),v._v(" "),s("p",[s("img",{attrs:{src:t(271),alt:"3.jpeg"}})]),v._v(" "),s("p",[v._v("整个过程需要各个进程之间的配合：")]),v._v(" "),s("ul",[s("li",[v._v("浏览器进程主要负责用户交互、子进程管理和文件储存等功能。")]),v._v(" "),s("li",[v._v("网络进程是面向渲染进程和浏览器进程等提供网络下载功能。")]),v._v(" "),s("li",[v._v("渲染进程的主要职责是把从网络下载的 HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。因为渲染进程所有的内容都是通过网络获取的，会存在一些恶意代码利用浏览器漏洞对系统进行攻击，所以运行在渲染进程里面的代码是不被信任的。这也是为什么 Chrome 会让渲染进程运行在安全沙箱里，就是为了保证系统的安全")])]),v._v(" "),s("ol",[s("li",[v._v("用户输入")])]),v._v(" "),s("ul",[s("li",[v._v("如果是搜索内容，地址栏会使用浏览器默认的搜索引擎，")]),v._v(" "),s("li",[v._v("如果输入内容符合 URL 规则，浏览器会根据规则，给内容加上协议，浏览器进程进入加载状态")])]),v._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[v._v("URL 请求过程")])]),v._v(" "),s("ul",[s("li",[v._v("浏览器进程会通过 IPC 把 URL 请求发给网络进程")]),v._v(" "),s("li",[v._v("网络进程查找本地是否缓存了资源，若有，直接返回资源，若没有，进入请求流程")]),v._v(" "),s("li",[v._v("DNS 解析，若有 DNS 缓存，直接用，若没有，会向 DNS 服务器请求")]),v._v(" "),s("li",[v._v("建立 TCP 连接，三次握手")]),v._v(" "),s("li",[v._v("浏览器构建请求行，请求头，cookie 等信息，向服务器发送构建的请求")]),v._v(" "),s("li",[v._v("服务器接收到请求，会根据请求信息生成相应数据（行，头，体），并发给浏览器的网络进程")]),v._v(" "),s("li",[v._v("浏览器接收到服务器的响应头后，网络进程开始解析，如果发现返回的状态吗是 301 或 302，会重定向")]),v._v(" "),s("li",[v._v("网络进程从响应头的 location 读取重定向的地址，然后重新发起新的 http 或者 https 请求，一切从头开始")])]),v._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[v._v("准备渲染进程\n默认情况下，chrome 会为每个页面分配一个渲染进程；但如果从一个页面打开另一个新页面，新页面和当前页面属于同一站点的话，新页面会复用父页面的渲染进程")])]),v._v(" "),s("ul",[s("li",[v._v("网络进程读取响应头信息后，会告知浏览器进程准备")]),v._v(" "),s("li",[v._v("浏览器进程准备渲染进程，并向渲染进程发出‘提交文档’的指令")]),v._v(" "),s("li",[v._v("渲染进程收到后，会和网络进程建立传输数据的“管道”")]),v._v(" "),s("li",[v._v("文档数据传输完成之后，渲染进程会返回“确认提交”的指令给浏览器进程")]),v._v(" "),s("li",[v._v("浏览器收到后，会更新浏览器界面状态")])]),v._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[v._v("渲染阶段")])]),v._v(" "),s("ul",[s("li",[v._v("构建 dom 树，将 html 转换为浏览器能理解的结构")]),v._v(" "),s("li",[v._v("样式计算，将 css 转换为浏览器理解的结构；转换属性，使其标准化；计算 dom 树中每个节点的具体样式")]),v._v(" "),s("li",[v._v("布局阶段：创建布局树，布局计算")]),v._v(" "),s("li",[v._v("分层：类似于图层，根据布局树各节点的属性判断")]),v._v(" "),s("li",[v._v("绘制：把一个图层的绘制拆分很多小的指令，然后把这些指令按照顺序组成一个待绘制的列表")]),v._v(" "),s("li",[v._v("栅格化操作，此时具体绘制工作交给了合成线程来操作，合成线程会将图层分为图块，图层是横向的，图块是纵向纬度，合成线程按照视口附近的图块优先生成位图，图块变位图是有 GPU 生成的，GPU 又是在 GPU 进程中，因此合成线程主要起调度作用，真正合成位图是有 GPU 进程完成的。")]),v._v(" "),s("li",[v._v("位图全部生成后，合成线程发出一个指令给浏览器进程，浏览器将页面内容绘制到内存中，最后再将内存显示在屏幕上。")])]),v._v(" "),s("p",[s("img",{attrs:{src:t(272),alt:"4.jpeg"}})]),v._v(" "),s("h3",{attrs:{id:"四、javascript-在浏览器中是如何执行的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、javascript-在浏览器中是如何执行的","aria-hidden":"true"}},[v._v("#")]),v._v(" 四、javascript 在浏览器中是如何执行的")]),v._v(" "),s("ol",[s("li",[v._v("变量提升")])]),v._v(" "),s("p",[v._v("在 js 代码执行过程中，js 引擎把变量的声明部分和函数的声明部分提升到代码开头的行为")]),v._v(" "),s("ul",[s("li",[v._v("一段 js 代码在执行前需要被 js 引擎编译，再执行")]),v._v(" "),s("li",[v._v("编译阶段，会在执行环境中产生变量环境和可执行代码\n"),s("img",{attrs:{src:t(273),alt:"5.jpeg"}})])]),v._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[v._v("栈溢出")])]),v._v(" "),s("p",[v._v("js 中有很多函数，经常出现一个函数中调用另一个函数的情况，调用栈就是用来管理函数调用关系的一种数据结构")]),v._v(" "),s("p",[v._v("什么是栈？：一种满足后进先出的数据结构")]),v._v(" "),s("p",[v._v("什么是 js 的调用栈：js 利用栈管理执行上下文，js 引擎会将创建好的执行上下文压入栈中")]),v._v(" "),s("p",[v._v("所以全局上下文在最底层，随着 js 执行，不断有执行上下文推入到调用栈中，若有函数调用函数，就继续推入，执行后退出，再加入新的执行上下文。")]),v._v(" "),s("p",[s("img",{attrs:{src:t(274),alt:"6.jpeg"}})]),v._v(" "),s("p",[v._v("由于调用栈是有大小的，所以当入栈的执行上下文超过一定数目，js 引擎就会报错，这种错误就是栈溢出，入终止条件不合适的递归函数。")]),v._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[v._v("作用域")])]),v._v(" "),s("p",[v._v("作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。")]),v._v(" "),s("ul",[s("li",[v._v("全局作用域：对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期")]),v._v(" "),s("li",[v._v("函数作用域：函数内部的变量或者函数，只能在内部被访问，函数执行结束后，变量会被销毁")])]),v._v(" "),s("p",[v._v("js 引入了变量提升机制，没有块级作用域；")]),v._v(" "),s("ul",[s("li",[v._v("变量容易在不被察觉的情况下被覆盖掉")]),v._v(" "),s("li",[v._v("本应销毁的变量没有被销毁")])]),v._v(" "),s("p",[v._v("加入了 let 和 const ，实现块级作用域")]),v._v(" "),s("ul",[s("li",[v._v("函数内部通过 var 声明的变量，在编译阶段全都存放到变量环境中")]),v._v(" "),s("li",[v._v("通过 let 或 const 声明的变量，在编译阶段会被存放到词法环境中")]),v._v(" "),s("li",[v._v("作用域块中通过 let 声明的变量，会被存放在词法环境的一个单独区域\n"),s("img",{attrs:{src:t(275),alt:"7.jpeg"}})])])])},[],!1,null,null,null);_.default=i.exports}}]);