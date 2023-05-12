import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}

/*
Todas as sagas deverão ser importadas e colocadas
dentro do array all da função.
que vai rotear essas sagas para permitir o seu uso
*/
