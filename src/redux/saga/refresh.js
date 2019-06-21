import {takeEvery,put,call} from 'redux-saga/effects'
import {REFRESH,REFRESH_START,REFRESH_END} from '../actions/list'
import Fetch from '../../fetch'
function *refreshSaga(action) {
    const {payload:{params},key}=action;//获取action信息
    yield put({
        type:REFRESH_START,
        payload:{
            key
        }
    });//发送listRequest开始
    const resData=yield call(Fetch[key],Object.assign({current:1},params));//发送ajax请求
    const {status,data}=resData;
    const resPayload={
        data:data.data,
        key,
        err:false,
        current:1
    };
    if (status!==200||data.code!==200){
        resPayload.err=true
    }//如有其他code和逻辑请自行设置
    yield put({
        type:REFRESH_END,
        payload:resPayload
    })//listRequest结束并设置值
}

export default function *takeRefreshActions() {
    yield takeEvery(REFRESH,refreshSaga)
}