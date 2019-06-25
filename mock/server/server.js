const express  = require('express');
const fs=require('fs');
const path=require('path');
const app=express();
let configs;
app.all("/*",function (req,res) {
    const {path:filePth,rootPath}=configs;
    const dataPath=path.join(rootPath,filePth);
    const method=req.method.toUpperCase();
    const resData={
        code:200,
        msg:"",
        data:null
    };
    const uri=req.url;
    fs.readFile(path.join(dataPath,`${uri}.json`),function (err,data) {
        if (err!==null){
            if (err.errno===-4058){
                resData.code=404;
                resData.msg="未找到资源";
            }else{
                resData.code=500;
                resData.msg=err.toString()
            }
        }else {
            const jsData=JSON.parse(data);
           if (jsData.method.toUpperCase()===method||!jsData.method){
                  const {headers}=jsData;
                  if (headers){
                      const keys=Object.keys(headers);
                      for (let item of keys){
                          res.set(item,headers[item])
                      }
                  }
                  resData.data=jsData.data;
            }else {
                resData.code=404;
                resData.msg="接口类型错误!该接口类型为"+jsData.method;
            }
        }
        res.send(resData)
    });
});
const startServer=(config)=>{
    const {port=3000}=config;
    configs=config;
    const server = app.listen(port, function () {
        const port = server.address().port;
        console.log("应用实例，访问地址为 http://%s:%s", "127.0.0.1", port)
    });
};

module.exports=startServer;