import { createStore, applyMiddleware, Store, compose } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import type { LeadsAndProspectsState } from './ducks/leads-and-prospects/types';

export interface ApplicationState {
  leadsAndProspects: LeadsAndProspectsState;
}

let sagaMiddleware = createSagaMiddleware();
const typedUseSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

let store: Store<ApplicationState> = createStore(
  rootReducer,
  //@ts-ignore
  compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension())
);

sagaMiddleware.run(rootSaga);

export { typedUseSelector };
export default store;
