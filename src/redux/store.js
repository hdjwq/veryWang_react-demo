import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
export default ()=>{
      const sagaMiddleware = createSagaMiddleware();
      return {
            ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
            runSaga: sagaMiddleware.run,
      } //创建store并加入saga中间件
}

