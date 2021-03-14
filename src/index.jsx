import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './contexts/reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './contexts/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, middleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
