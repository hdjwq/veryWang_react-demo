import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export  const  bashName=(name)=>{
      return (Component)=>{
          return (props)=>{
              return <Router basename={name}>
                    <Component {...props}/>
              </Router>
          }
      }
};//封装高阶函数统一处理bashName
export  const RoutersProvider=({routers})=>{
    return <Switch>
        {routers.map((item,index)=>{
            return <Route {...item} key={index}/>
        })}
    </Switch>
};//统一的嵌套路由组件
