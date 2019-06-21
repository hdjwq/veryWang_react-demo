/*
* 整体思路：根据Map里的val值映射到fetch实列上,方便一个key在reducer里和fetch里面复用
* */
import Axios from 'axios'
import Config from '../config'
import * as infoMap from './infoMap'
import infoUri from './uri/infoUri'
import listUri from './uri/listUri'
import * as listMap from './listMap'
class Fetch {
     constructor(){
         this.structure(infoMap,infoUri);
         this.structure(listMap,listUri);
     }
    structure(data,obj){
         const keys=Object.keys(data);
         for (let item of keys){
             const relName=data[item];
             this[relName]=this.reqProvider(obj[relName]);
         }
     } //构造熟悉到this上

     reqProvider(config){
         return (params)=>{
             return this.request(config,params);
         }
     }//闭包函数保存config文件
     request(config,params){
         let {url,method,headers}=config;
         method=method.toUpperCase();
         let headerConfig={
             'X-Requested-With': 'XMLHttpRequest',
             "content-type":"application/json"
         };
         if (headers){
             headerConfig=Object.assign(headerConfig,headers);
         }
         const requestConfig={
             url,
             method,
             headers:headerConfig,
             baseURL:Config.proxy,
             responseType:"json",
             xsrfCookieName:"",// `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
             xsrfHeaderName: 'X-XSRF-TOKEN',  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
         };
         if (method==="GET"){
             requestConfig.params=params;
         }else {
             requestConfig.data=params;
         }
         return new Promise((resolve,reject)=>{
             Axios(requestConfig).then((res)=>{
                  resolve(res);
             }).catch(()=>{
                 //失败也请使用成功的回掉js try catch 语句会出现作用域转换的问题影响作用域链的查找。
                 resolve({
                     code:500,
                     msg:"服务器错误!"
                 })
             })
         })
     }//axios配置详情见官方文档https://www.kancloud.cn/yunye/axios/234845
}
const  fetchs=new Fetch();
export  default fetchs;