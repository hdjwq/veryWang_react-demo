import {put,takeEvery,call} from 'redux-saga/effects'
import {INFO_START,INFO_END,INFO} from '../actions/info'
import Fetch from '../../fetch'
function *takeRequest(action) {
     const {payload:{params},key}=action;//获取action信息
     yield put({
         type:INFO_START,
         payload:{
             key
         }
     });//发送infoRequest开始
     const resData=yield call(Fetch[key],params);//调用api函数
     const {status,data}=resData;
     const resPayload={
         data:data.data,
         key,
         err:false
     };
     if (status!==200||data.code!==200){
         resPayload.err=true
     }//如有其他code和逻辑请自行设置
    yield put({
        type:INFO_END,
        payload:resPayload
    })//infoRequest结束并设置值
}

export default function *takeInfoActions() {
      yield  takeEvery(INFO,takeRequest);//启动无阻塞监听
}