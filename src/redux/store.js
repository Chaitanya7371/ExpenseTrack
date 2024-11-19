import { combineReducers, legacy_createStore as createStore } from 'redux';
import expenseReducer from './tracker/reducers';

const rootReducer = combineReducers({
    tracker : expenseReducer
})

const store = createStore(rootReducer);

export default store;
