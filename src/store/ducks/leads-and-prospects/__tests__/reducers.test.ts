import reducer from '../reducers';
import actions from '../actions';

import { expectedLeads } from './dummy';

const NoAction = { type: '' };

describe('store/ducks/leads-and-prospects/reducers', () => {
  it('getLeads()', () => {
    const initialState = reducer(undefined, NoAction);
    const actualState = reducer(initialState, actions.getLeads());
    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(actualState).toEqual(expectedState);
  });

  it('setLeads()', () => {
    const initialState = reducer(undefined, NoAction);
    const actualState = reducer(initialState, actions.setLeads(expectedLeads));
    const expectedState = {
      ...initialState,
      leads: expectedLeads,
    };

    expect(actualState).toEqual(expectedState);
  });

  it('getLeadsFailure()', () => {
    const initialState = reducer(undefined, NoAction);
    const actualState = reducer(initialState, actions.getLeadsFailure());
    const expectedState = {
      ...initialState,
      error: true,
    };

    expect(actualState).toEqual(expectedState);
  });

  it('setProspects()', () => {
    const initialState = reducer(undefined, NoAction);
    const actualState = reducer(initialState, actions.setProspects(expectedLeads));
    const expectedState = {
      ...initialState,
      prospects: expectedLeads,
    };

    expect(actualState).toEqual(expectedState);
  });

  it('leadsAndProspectsClean()', () => {
    const initialState = reducer(undefined, NoAction);
    const actualState = reducer(initialState, actions.leadsAndProspectsClean());
    const expectedState = {
      ...initialState,
    };

    expect(actualState).toEqual(expectedState);
  });
});
