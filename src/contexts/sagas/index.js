import { all, call } from 'redux-saga/effects';
import country from './country';

export default function* rootSaga() {
  yield all([call(country)]);
}
