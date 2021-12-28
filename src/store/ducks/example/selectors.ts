import { createSelector } from 'reselect';

import type { ApplicationState } from '../..';
import type { ExampleState } from './types';

export const exampleSlice = (state: ApplicationState): ExampleState => state.example;

export const getExample = createSelector(exampleSlice, (state: ExampleState) => state.example);

export const getExampleError = createSelector(exampleSlice, (state: ExampleState) => state.error);

export const getExampleLoading = createSelector(
  exampleSlice,
  (state: ExampleState) => state.loading
);
