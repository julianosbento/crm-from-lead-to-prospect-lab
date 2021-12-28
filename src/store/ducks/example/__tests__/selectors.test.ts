import { ApplicationState } from '../../..';
import * as selectors from '../selectors';

import type { ExampleState } from '../types';

describe('example selector', () => {
  const state: ApplicationState = {
    example: {
      error: false,
      example: '',
      loading: false,
    },
  };

  it('getExample()', () => {
    const actualResult = selectors.getExample(state);
    expect(actualResult).toBe('');
  });

  it('getExampleError()', () => {
    const actualResult = selectors.getExampleError(state);
    expect(actualResult).toBe(false);
  });

  it('getExampleLoading()', () => {
    const actualResult = selectors.getExampleLoading(state);
    expect(actualResult).toBe(false);
  });
});
