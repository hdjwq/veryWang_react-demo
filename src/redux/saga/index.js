import {all} from 'redux-saga/effects'
import takeInfoActions from './info'
import takeListActions from './list'
import takeRefreshActions from './refresh'
export default function *rootSaga() {
      yield all([
          takeInfoActions(),
          takeListActions(),
          takeRefreshActions()
      ])
} //批量启动saga监听