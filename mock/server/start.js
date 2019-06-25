const  program =require('commander');
const startServer=require('./server');
const fs=require('fs');
const path=require('path');
program
      .version("0.0.1")
      .option('-c, --config [type]', 'mock config file path',"./config/config.json")
      .parse(process.argv);

const programProvider=()=>{
      const rootPath=path.join(__dirname,"../");
      let configPath=program.config;
      if (!path.isAbsolute(configPath)){
         configPath=path.join(rootPath,configPath);
      }
      fs.readFile(configPath,function (err,data) {
          if (err){
              console.log("读取配置文件失败:",err);
              return;
          }
          const config=JSON.parse(data);
          config.rootPath=rootPath;
          startServer(config);
      })
}

programProvider();

