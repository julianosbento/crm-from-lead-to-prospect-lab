import { Reducer } from 'redux';

import { LeadsAndProspectsState, LeadsAndProspectsTypes } from './types';

const INITIAL_STATE: LeadsAndProspectsState = {
  error: false,
  leads: [],
  prospects: [],
  loading: false,
};

const reducer: Reducer<LeadsAndProspectsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeadsAndProspectsTypes.GET_LEADS:
      return { ...state, loading: true };
    case LeadsAndProspectsTypes.SET_LEADS:
      return {
        ...state,
        loading: false,
        error: false,
        leads: action.payload.leads,
      };
    case LeadsAndProspectsTypes.GET_LEADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        leads: INITIAL_STATE.leads,
        prospects: INITIAL_STATE.prospects,
      };
    case LeadsAndProspectsTypes.SET_PROSPECTS:
      return {
        ...state,
        loading: false,
        error: false,
        prospects: action.payload.prospects,
      };
    case LeadsAndProspectsTypes.LEADS_AND_PROSPECTS_CLEAN:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
