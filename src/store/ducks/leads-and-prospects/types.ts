import type { Lead } from '../../../types/information';

export enum LeadsAndProspectsTypes {
  GET_LEADS = '@leadsAndProspects/GET_LEADS',
  SET_LEADS = '@leadsAndProspects/SET_LEADS',
  GET_LEADS_FAILURE = '@leadsAndProspects/GET_LEADS_FAILURE',
  SET_PROSPECTS = '@leadsAndProspects/SET_PROSPECTS',
  LEADS_AND_PROSPECTS_CLEAN = '@leadsAndProspects/LEADS_AND_PROSPECTS_CLEAN',
}

export interface LeadsAndProspectsState {
  readonly leads: Lead[];
  readonly prospects: Lead[];
  readonly error: boolean;
  readonly loading: boolean;
}
