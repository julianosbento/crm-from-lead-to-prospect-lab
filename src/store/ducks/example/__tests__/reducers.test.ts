import reducer from '../reducers';
import actions from '../actions';

const NoAction = { type: '' };

describe('example reducer', () => {
    it('getExample()', () => {
      const initialState = reducer(undefined, NoAction);
      const actualState = reducer(initialState, actions.getExample());
      const expectedState = {
        ...initialState,
        loading: true,
      };

      expect(actualState).toEqual(expectedState);
  });
});
