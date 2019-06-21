import {takeEvery,put,select,call} from 'redux-saga/effects'
import {LIST,LIST_START,LIST_END} from '../actions/list'
import Fetch from '../../fetch'
function *listSaga(action) {
       const {payload:{params},key}=action;//获取action信息
       yield put({
              type:LIST_START,
              payload:{
                  key
              }
       });//发送listRequest开始
       const current=yield select((state)=>{
              return state.list.getIn([key,"current"])+1;
       });//获取当前页码并加一
       const resData=yield call(Fetch[key],Object.assign({current},params));//发送ajax请求
       const {status,data}=resData;
       const resPayload={
              data:data.data,
              key,
              err:false,
              current
       };
       if (status!==200||data.code!==200){
              resPayload.err=true
       }//如有其他code和逻辑请自行设置
       yield put({
              type:LIST_END,
              payload:resPayload
       })//listRequest结束并设置值
}

export default function *takeListActions() {
       yield takeEvery(LIST,listSaga)
}