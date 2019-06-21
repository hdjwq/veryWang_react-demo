import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Routers from './router/router'
import {Provider} from 'react-redux'
import store from './redux/store'
import rootSaga from './redux/saga'
const stores=store();
stores.runSaga(rootSaga);//启动saga
const App=() =>{
  return (
      <Provider store={stores}>
          <Router>
              <Switch>
                  <Routers/>
              </Switch>
          </Router>
      </Provider>
  );
};

export default App;
