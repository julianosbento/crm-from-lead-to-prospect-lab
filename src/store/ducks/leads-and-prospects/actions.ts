import { action } from 'typesafe-actions';
import { LeadsAndProspectsTypes } from './types';

import type { Lead } from '../../../types/information';

export const getLeads = () => action(LeadsAndProspectsTypes.GET_LEADS);

export const setLeads = (leads: Lead[]) => action(LeadsAndProspectsTypes.SET_LEADS, { leads });

export const getLeadsFailure = () => action(LeadsAndProspectsTypes.GET_LEADS_FAILURE);

export const validateLeads = () => action(LeadsAndProspectsTypes.VALIDATE_LEADS);

export const setProspects = (prospects: Lead[]) =>
  action(LeadsAndProspectsTypes.SET_PROSPECTS, { prospects });

export const leadsAndProspectsClean = () =>
  action(LeadsAndProspectsTypes.LEADS_AND_PROSPECTS_CLEAN);

const actions = {
  getLeads,
  setLeads,
  getLeadsFailure,
  validateLeads,
  setProspects,
  leadsAndProspectsClean,
};

export default actions;
