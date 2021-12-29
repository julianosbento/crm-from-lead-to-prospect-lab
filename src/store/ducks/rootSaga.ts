import { all, takeLatest } from 'redux-saga/effects';

import { handleExample } from './example/sagas';
import { ExampleTypes } from './example/types';

import { handleLeads } from './leads-and-prospects/sagas';
import { LeadsAndProspectsTypes } from './leads-and-prospects/types';

export default function* rootSaga() {
  yield all([takeLatest(ExampleTypes.GET_EXAMPLE, handleExample)]);
  yield all([takeLatest(LeadsAndProspectsTypes.GET_LEADS, handleLeads)]);
}
