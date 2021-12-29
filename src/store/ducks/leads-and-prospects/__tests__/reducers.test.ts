import reducer from '../reducers';
import actions from '../actions';

const NoAction = { type: '' };

describe('leadsAndProspects reducer', () => {
    it('getLeadsAndProspects()', () => {
      const initialState = reducer(undefined, NoAction);
      const actualState = reducer(initialState, actions.getLeadsAndProspects());
      const expectedState = {
        ...initialState,
        loading: true,
      };

      expect(actualState).toEqual(expectedState);
  });
});
