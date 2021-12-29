import { call, put } from 'redux-saga/effects';
import { getLeads } from '../../../services/leads';

import type { Lead, LeadsResponse } from '../../../types/information';

import actions from './actions';
import { buildLeadsAndProspectsData } from './utils';

export function* handleLeads() {
  try {
    const leadsResponse: LeadsResponse[] = yield call(getLeads);
    const leads: Lead[] = yield call(buildLeadsAndProspectsData, leadsResponse);

    yield put(actions.setLeads(leads));
  } catch (err) {}
}
