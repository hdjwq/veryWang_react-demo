import {INFO_START,INFO_END,INFO_ERR} from '../actions/info'
import {fromJS} from 'immutable'

const defaultState=fromJS({});//默认state
const defaultFetchState=fromJS({
    pending:true,
    data:null,
    err:false
});//默认单个的info state

export default (state=defaultState,action)=>{
    const {type,payload={}}=action;
    const {key,data,err}=payload;
    switch (type) {
        case INFO_START:
             if (state.has(key)){ //如果包含这个info信息更新
                return state.withMutations((i)=>{
                    i
                        .setIn([key,"pending"],true)
                        .setIn([key,'err'],false)
                })
             }
             return state.set(key,defaultFetchState);//不包含设置
        case INFO_END://完成的时候必然已经包含了默认的state所以只需设置
            return state.withMutations((i)=>{
                i
                    .setIn([key,"pending"],false)
                    .setIn([key,'err'],err)
                    .setIn([key,'data'],data)
            });
        default:
            return state
    }
}