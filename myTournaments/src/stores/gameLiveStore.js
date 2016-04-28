import { createStore } from 'redux'
import gameLiveReducer from './reducers';

let store = createStore(gameLiveReducer);
