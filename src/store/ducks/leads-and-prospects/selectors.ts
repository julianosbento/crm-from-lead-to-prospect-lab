import { createSelector } from 'reselect';

import type { ApplicationState } from '../..';
import type { LeadsAndProspectsState } from './types';

export const leadsAndProspectsSlice = (state: ApplicationState): LeadsAndProspectsState =>
  state.leadsAndProspects;

export const getLeads = createSelector(
  leadsAndProspectsSlice,
  (state: LeadsAndProspectsState) => state.leads
);

export const getProspects = createSelector(
  leadsAndProspectsSlice,
  (state: LeadsAndProspectsState) => state.prospects
);

export const getLeadsAndProspectsLoading = createSelector(
  leadsAndProspectsSlice,
  (state: LeadsAndProspectsState) => state.loading
);
