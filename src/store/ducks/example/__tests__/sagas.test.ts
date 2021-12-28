import { put, call } from 'redux-saga/effects';

import actions from '../actions';
import { handleExample } from '../sagas';
import { ExampleTypes } from '../types';

describe('example sagas', () => {
  describe('handleExample when succeeds', () => {
    const gen = handleExample();

    it('should set example string when handleExample is called', () => {
      const value = gen.next().value as any;

      expect(value.type).toEqual('PUT');
      expect(value.payload.action).toEqual(
        expect.objectContaining({ type: ExampleTypes.SET_EXAMPLE, payload: { example: 'example' } })
      );
    });
  });
});
