import { combineReducers } from 'redux';
import country from './country';
import search from './search';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  country,
  search,
  form: formReducer
});

export default rootReducer;
