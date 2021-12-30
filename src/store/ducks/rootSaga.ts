import { all, takeLatest } from 'redux-saga/effects';

import { handleLeads, handleLeadsValidation } from './leads-and-prospects/sagas';
import { LeadsAndProspectsTypes } from './leads-and-prospects/types';

export default function* rootSaga() {
  yield all([takeLatest(LeadsAndProspectsTypes.GET_LEADS, handleLeads)]);
  yield all([takeLatest(LeadsAndProspectsTypes.VALIDATE_LEADS, handleLeadsValidation)]);
}
