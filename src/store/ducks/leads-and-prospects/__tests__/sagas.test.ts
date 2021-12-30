import { put, call } from 'redux-saga/effects';
import { getLeads } from '../../../../services/leads';
import { getNationalArchives } from '../../../../services/national-archives';
import { getNationalRegistries } from '../../../../services/national-registry';
import actions from '../actions';

import { handleLeads, handleLeadsValidation } from '../sagas';
import { LeadsAndProspectsTypes } from '../types';
import { filterLeadsAndProspects, validateLeads } from '../utils';
import {
  expectedLeads,
  expectedNationalArchives,
  expectedNationalRegistries,
  expectedProspects,
} from './dummy';

describe('store/ducks/leads-and-prospects/sagas', () => {
  describe('handleLeads*()', () => {
    const gen = handleLeads();

    it('should set leads when handleLeads is called with success', () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual('CALL');
      expect(value.payload.fn).toEqual(getLeads);
    });

    it('should not set leads and clear state when handleLeads is called with error', () => {
      const value = gen.throw(new Error('Error')).value as any;

      expect(value.type).toEqual('PUT');
      expect(value.payload.action).toEqual(
        expect.objectContaining({ type: LeadsAndProspectsTypes.GET_LEADS_FAILURE })
      );
    });
  });

  describe('handleLeadsValidation*()', () => {
    const gen = handleLeadsValidation();

    it('should set leads and prospects when handleLeadsValidation is called with success', () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual('SELECT');
      expect(gen.next(expectedLeads as any).value).toEqual(call(getNationalRegistries));
      expect(gen.next(expectedNationalRegistries as any).value).toEqual(call(getNationalArchives));
      expect(gen.next(expectedNationalArchives as any).value).toEqual(
        call(
          validateLeads as any,
          expectedLeads,
          expectedNationalRegistries,
          expectedNationalArchives
        )
      );
      expect(gen.next(expectedLeads as any).value).toEqual(
        call(filterLeadsAndProspects as any, expectedLeads)
      );
      expect(gen.next({ leads: expectedLeads, prospects: expectedProspects } as any).value).toEqual(
        put(actions.setLeads(expectedLeads))
      );
      expect(gen.next(expectedLeads as any).value).toEqual(
        put(actions.setProspects(expectedProspects))
      );
    });

    it('should not set leads and prospects and clear state when handleLeadsValidation is called with error', () => {
      const value = gen.throw(new Error('Error')).value as any;

      expect(value.type).toEqual('PUT');
      expect(value.payload.action).toEqual(
        expect.objectContaining({ type: LeadsAndProspectsTypes.GET_LEADS_FAILURE })
      );
    });
  });
});
