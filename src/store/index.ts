import { createStore, applyMiddleware, Store, compose } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { ExampleState } from './ducks/example/types';

export interface ApplicationState {
  example: ExampleState;
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
