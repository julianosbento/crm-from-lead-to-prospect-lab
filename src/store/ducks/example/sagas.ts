import { put } from 'redux-saga/effects';

import actions from './actions';

export function* handleExample() {
  try {
    yield put(actions.setExample('example'));
  } catch (err) {}
}
