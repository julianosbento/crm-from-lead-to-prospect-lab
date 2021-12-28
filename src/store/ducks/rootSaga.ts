import { all, takeLatest } from 'redux-saga/effects';

import { ExampleTypes } from './example/types';

import { handleExample } from './example/sagas';

export default function* rootSaga() {
  yield all([takeLatest(ExampleTypes.GET_EXAMPLE, handleExample)]);
}
