import { ApplicationState } from '../../..';
import * as selectors from '../selectors';

import type { LeadsAndProspectsState } from '../types';

describe('leadsAndProspects selector', () => {
  const state: ApplicationState = {
    leadsAndProspects: {
      error: false,
      leadsAndProspects: '',
      loading: false,
    },
  };

  it('getLeadsAndProspects()', () => {
    const actualResult = selectors.getLeadsAndProspects(state);
    expect(actualResult).toBe('');
  });

  it('getLeadsAndProspectsError()', () => {
    const actualResult = selectors.getLeadsAndProspectsError(state);
    expect(actualResult).toBe(false);
  });

  it('getLeadsAndProspectsLoading()', () => {
    const actualResult = selectors.getLeadsAndProspectsLoading(state);
    expect(actualResult).toBe(false);
  });
});
