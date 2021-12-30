import { ApplicationState } from '../../..';
import * as selectors from '../selectors';

import { expectedLeads, expectedProspects } from './dummy';

describe('store/ducks/leads-and-prospects/selectors', () => {
  const state: ApplicationState = {
    leadsAndProspects: {
      error: false,
      leads: expectedLeads,
      prospects: expectedProspects,
      loading: false,
    },
  };

  it('getLeads()', () => {
    const actualResult = selectors.getLeads(state);
    expect(actualResult).toEqual(expectedLeads);
  });

  it('getProspects()', () => {
    const actualResult = selectors.getLeads(state);
    expect(actualResult).toEqual(expectedProspects);
  });

  it('getLeadsAndProspectsLoading()', () => {
    const actualResult = selectors.getLeadsAndProspectsLoading(state);
    expect(actualResult).toBe(false);
  });
});
