import { combineReducers } from 'redux';

import example from './example/reducers';
import leadsAndProspects from './leads-and-prospects/reducers';

export default combineReducers({
  example,
  leadsAndProspects,
});
