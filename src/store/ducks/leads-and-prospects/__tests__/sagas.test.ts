import { put, call } from 'redux-saga/effects';

import actions from '../actions';
import { handleLeadsAndProspects } from '../sagas';
import { LeadsAndProspectsTypes } from '../types';

describe('leadsAndProspects sagas', () => {
  describe('handleLeadsAndProspects when succeeds', () => {
    const gen = handleLeadsAndProspects();

    it('should set leadsAndProspects string when handleLeadsAndProspects is called', () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual('PUT');
      expect(value.payload.action).toEqual(
        expect.objectContaining({ type: LeadsAndProspectsTypes.SET_LEADS_AND_PROSPECTS, payload: { leadsAndProspects: 'leadsAndProspects' } })
      );
    });
  });
});
