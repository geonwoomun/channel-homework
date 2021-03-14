import { all, fork, takeLatest } from '@redux-saga/core/effects';
import { createPromiseSaga } from '../../lib/utils/asyncUtils';
import { getCountryListAPI } from '../../lib/apis';
import { GET_COUNTRY_LIST } from '../reducers/country';

const getCountryList = createPromiseSaga(GET_COUNTRY_LIST, getCountryListAPI);

function* watchGetCountryList() {
  yield takeLatest(GET_COUNTRY_LIST, getCountryList);
}

export default function* countrySaga() {
  yield all([fork(watchGetCountryList)]);
}
