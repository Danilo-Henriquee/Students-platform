import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Criação do middleware Saga
const sagaMiddleware = createSagaMiddleware();

/*
Criação do store para os reducers e aplicando o
middleware do saga
*/
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);

// Executando o saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
