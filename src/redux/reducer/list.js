import {fromJS} from 'immutable'
import {LIST_START,LIST_END,REFRESH_END,REFRESH_START} from '../actions/list'

const defaultState=fromJS({

});//默认state
const  defaultListState=fromJS({
       pending:true,
       err:false,
       pageSize:10,
       current:0,
       data:null,
       refresh:false
});//默认单个的list state

export default  (state=defaultState,action)=>{
      const {type,payload={}}=action;
      const {key,data,err,current}=payload;//由于没有服务端所有current本地维护建议还是由服务端维护
      switch (type) {
          case LIST_START:
           if (state.has(key)){//如果包含这个list信息更新
             return  state.withMutations((s)=>{
                  s
                      .setIn([key,'pending'],true)
                      .setIn([key,"err"],false)
             })
           }
           return state.set(key,defaultListState);//不包含设置
          case LIST_END://完成的时候必然已经包含了默认的state所以只需设置
              return state.withMutations((s)=>{
                    s
                        .setIn([key,'pending'],false)
                        .setIn([key,"err"],err)
                        .setIn([key,"current"],current)
                        .updateIn([key,"data"],(old)=>{
                            if (old===null){
                                return data
                            }
                            return old.concat(data);
                        })

              });
          case REFRESH_START:
               return state.withMutations((s)=>{
                   s
                       .setIn([key,'refresh'],true)
                       .setIn([key,"err"],false)
                       .setIn([key,"pending"],false)
               });
          case REFRESH_END:
              return state.withMutations((s)=>{
                  s
                      .setIn([key,'refresh'],false)
                      .setIn([key,"err"],err)
                      .setIn([key,"pending"],false)
                      .setIn([key,"data"],data)
              });
          default:
              return state;
      }

}