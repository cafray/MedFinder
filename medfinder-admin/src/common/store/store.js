import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authreducer as  auth } from '../reducers/authreducer';
import { pharmacyreducer as pharmacy} from '../reducers/pharmacyreducer';

const reducers = combineReducers({
    auth,
    pharmacy
});

let middleware = [thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
