import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import Home from '../pages/home/index'
import HomeIndex from '../pages/home/indexPage'
import My from '../pages/home/my'
const router=[
    {
      path:'/',
      exact:true,
      component:()=><Redirect to='/home'/>
    },
    {
        path:"/home",
        exact:false,
        isLogin:false,
        component:Home,
        children:[
            {
                path:"/index",
                exact:true,
                isLogin:false,
                component:HomeIndex,
            },{
                path:"/my",
                exact:true,
                isLogin:false,
                component:My,
            }
        ]
    }
];//路由配置
const makeRouterDom=(data,key)=>{
   const {path,exact,isLogin,component:Component,children}=data;
   return <Route path={path} exact={exact}  key={key} render={(props)=>{
       if (!sessionStorage.getItem("login")&&isLogin){
           return <Redirect to='/login'/>
       }
       return <Component {...props} routers={children}/>
   }}/>
} //构建router组件
export default ()=>{
     let routerDoms=[];
     for (let [index,item] of router.entries()){
          routerDoms.push(makeRouterDom(item,index));
     }
    return routerDoms;
} //生成路由文件