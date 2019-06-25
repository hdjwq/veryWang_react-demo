<h3>react 简易架构</h3><br/>
<br/>
<br/>
使用create-react-app 脚手架搭建<br/>
使用情况:<br/>
  react:16+<br/>
  redux+react-router(v4.0+)+redux-saga+axios+immutable<br/>

相关文档:<br/>
  react:https://react.docschina.org/(16+版本生命周期略有不同，以及部分新特性。请认真查看后开始项目)<br/>
  redux:https://www.redux.org.cn/(状态管理工具)<br/>
  react-router:https://reacttraining.com/react-router/web/example/basic(于之前版本差距较大,建议认真阅读文档)<br/>
  redux-saga:https://redux-saga-in-chinese.js.org/(redux异步处理工具,摆脱回调地狱)<br/>
  axios:https://www.kancloud.cn/yunye/axios/234845 (网络请求库) <br/>  
  immutable:https://github.com/immutable-js/immutable-js(具体不知道怎么描述，看文档吧)<br/>

作者寄语
  本项目基于react但不限于react我想应该在其他前端工程此项目的目录结构也适用。<br/>
  http请求以及路由配置还有redux配置等，力求统一为配置文件。达到修改一处的目的。<br/>
  后续计划<br/>
   此版本未加react-router-redux 所以并不能做到统一的登陆验证(预计下一个版本加入)<br/>
   此版本没有增加自动选择配置文件的功能，所以配置文件还需要手动修改(预计下一个版本加入)<br/>
   项目缺少相关的compoent文件后续也许会放几个简单的component文件(看心情,顺便问一下有没有搞设计的朋友，做一个UI组件库耍一下三)<br/>
   后续争取做为一个命令行工具使用 <br/>
    
关于作者     
  有问题联系邮箱 747723658@qq.com<br/>
  
重点介绍
 本项目用大的mock代理为一个为proxy.exe的二进制文件(作者使用golang完成),会读取mock相关的文件<br/>
 如访问 /test 会读取相关的mock文件夹下面的test.json文件,后续计划使用node服务完成预计2个版本后完成.<br/>
 别问我为什么没有mac版，作者买不起mac。如需golang源码联系邮箱获取.(已废弃)<br/>
 
 6月25日更新:<br/>
 使用nodejs做mock<br/>
 启动文件为 node ./mock/server/start.js -c (可选参数，配置文件,默认路径为./mock/config/config.json)<br/>
 data 下面为mock数据   <br/>
 <br/>
 <br/>
 

  
目录介绍:<br/>
  ├─config # webpack配置文件<br/>
  ├─src # 工程源码<br/>
  │  └─src<br/>
  │      ├─components # 项目一些公用的组件(建议尽量和业务逻辑抽离,方便复用)<br/>
  │      │  
  │      ├─fetch #存放网络请求文件夹<br/>
  │      │     ├─ index.js # fetch 逻辑和构建文件<br/>
  │      │     ├─ xxxMap.js # 维护uri和fetch实列的映射关系<br/>
  │      │     └─ uri #网络地址配置文件<br/>
  │      ├─page # 页面文件<br/>
  │      │  
  │      │
  │      ├─redux # redux相关配置文件<br/>
  │      │    ├─ actions # 维护redux相关的映射关系<br/>
  │      │    ├─ reducer #存放对应的reducer处理函数<br/>
  │      │    ├─ saga  #存放对应了异步处理函数<br/>
  │      │    └─ store.js # redux启动文件<br/>
  │      ├─router # 路由配置文件<br/>
  │      │    ├─router.js # 路由配置config  <br/>       
  │      │    └─util.js # 一些公用的路由工具函数<br/>
  │      │ 
  │      ├─ App.js # 启动文件<br/>
  │      │  
  │      ├─ config.js # 项目相关的一些配置文件<br/>
  │      │
  │      ├─ serviceWorker.js #serviceWorker 缓存文件建议生产环境下别用除非自己定义接口规则<br/> 
  │      │
  │      └─ setupProxy.js #相关代理配置可配置多个地址<br/>
  ├─mock # mock服务配置及数据来源<br/>
  │   ├─ server # mock服务端文件<br/>
  │   ├─ config #mock配置文件<br/>
  │   └─ data #mock数据源<br/> 
  │
  ├─public # 资源<br/>
  │
  └─scripts # 项目启动文件   <br/>  
  
  
  