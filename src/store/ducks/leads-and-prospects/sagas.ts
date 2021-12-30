import { call, put, select } from 'redux-saga/effects';
import { getLeads } from '../../../services/leads';

import actions from './actions';
import { buildLeadsAndProspectsData, filterLeadsAndProspects, validateLeads } from './utils';

import { leadsAndProspectsSelectors } from '.';
import { getNationalRegistries } from '../../../services/national-registry';
import { getNationalArchives } from '../../../services/national-archives';

import type { Lead, LeadsResponse, NationalRegistryResponse } from '../../../types/information';

export function* handleLeads() {
  try {
    const leadsResponse: LeadsResponse = yield call(getLeads);
    const leads: Lead[] = yield call(buildLeadsAndProspectsData, leadsResponse);

    yield put(actions.setLeads(leads));
  } catch (err) {
    yield put(actions.getLeadsFailure());
  }
}

export function* handleLeadsValidation() {
  try {
    const storedLeads: Lead[] = yield select(leadsAndProspectsSelectors.getLeads);

    const nationalRegistriesResponse: NationalRegistryResponse = yield call(getNationalRegistries);
    const nationalArchivesResponse: NationalRegistryResponse = yield call(getNationalArchives);

    const scoredLeads: Lead[] = yield call(
      validateLeads,
      storedLeads,
      nationalRegistriesResponse,
      nationalArchivesResponse
    );

    const { leads, prospects } = yield call(filterLeadsAndProspects, scoredLeads);

    yield put(actions.setLeads(leads));
    yield put(actions.setProspects(prospects));
  } catch (err) {
    yield put(actions.getLeadsFailure());
  }
}
