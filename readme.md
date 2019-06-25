<h3>react 简易架构</h3>


使用create-react-app 脚手架搭建
使用情况:
  react:16+
  redux+react-router(v4.0+)+redux-saga+axios+immutable

相关文档:
  react:https://react.docschina.org/(16+版本生命周期略有不同，以及部分新特性。请认真查看后开始项目)
  redux:https://www.redux.org.cn/(状态管理工具)
  react-router:https://reacttraining.com/react-router/web/example/basic(于之前版本差距较大,建议认真阅读文档)
  redux-saga:https://redux-saga-in-chinese.js.org/(redux异步处理工具,摆脱回调地狱)
  axios:https://www.kancloud.cn/yunye/axios/234845 (网络请求库)   
  immutable:https://github.com/immutable-js/immutable-js(具体不知道怎么描述，看文档吧)

作者寄语
  本项目基于react但不限于react我想应该在其他前端工程此项目的目录结构也适用。
  http请求以及路由配置还有redux配置等，力求统一为配置文件。达到修改一处的目的。
  后续计划
   此版本未加react-router-redux 所以并不能做到统一的登陆验证(预计下一个版本加入)
   此版本没有增加自动选择配置文件的功能，所以配置文件还需要手动修改(预计下一个版本加入)
   项目缺少相关的compoent文件后续也许会放几个简单的component文件(看心情,顺便问一下有没有搞设计的朋友，做一个UI组件库莱耍一下三)
   后续争取做为一个命令行工具使用(看是不是需要装逼) 
    
关于作者     
  有问题联系邮箱 747723658@qq.com(听说用qq邮箱很捞？)
  
重点介绍
 本项目用大的mock代理为一个为proxy.exe的二进制文件(作者使用golang完成),会读取mock相关的文件
 如访问 /test 会读取相关的mock文件夹下面的test.json文件,后续计划使用node服务完成预计2个版本后完成.
 别问我为什么没有mac版，作者买不起mac。如需golang源码联系邮箱获取.(已废弃)
 
 6月25日更新:<br/>
 使用nodejs做mock<br/>
 启动文件为 node ./mock/server/start.js -c (可选参数，配置文件,默认路径为./mock/config/config.json)<br/>
 data 下面为mock数据   
 
 
PS:这些只是计划，也需会更新也需不会。哈哈
 

  
目录介绍:
  ├─config # webpack配置文件
  ├─src # 工程源码
  │  └─src
  │      ├─components # 项目一些公用的组件(建议尽量和业务逻辑抽离,方便复用)
  │      │  
  │      ├─fetch #存放网络请求文件夹
  │      │     ├─ index.js # fetch 逻辑和构建文件
  │      │     ├─ xxxMap.js # 维护uri和fetch实列的映射关系
  │      │     └─ uri #网络地址配置文件
  │      ├─page # 页面文件
  │      │  
  │      │
  │      ├─redux # redux相关配置文件
  │      │    ├─ actions # 维护redux相关的映射关系
  │      │    ├─ reducer #存放对应的reducer处理函数
  │      │    ├─ saga  #存放对应了异步处理函数
  │      │    └─ store.js # redux启动文件
  │      ├─router # 路由配置文件
  │      │    ├─router.js # 路由配置config         
  │      │    └─util.js # 一些公用的路由工具函数
  │      │ 
  │      ├─ App.js # 启动文件
  │      │  
  │      ├─ config.js # 项目相关的一些配置文件
  │      │
  │      ├─ serviceWorker.js #serviceWorker 缓存文件建议生产环境下别用除非自己定义接口规则 
  │      │
  │      └─ setupProxy.js #相关代理配置可配置多个地址
  ├─mock # mock服务配置及数据来源
  │  
  │  
  │
  ├─public # 资源
  │
  └─scripts # 项目启动文件     
  
  
  