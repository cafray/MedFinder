import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pharmacyreducer as  pharmacy } from '../reducers/pharmacyreducer';
import { medsreducer as meds} from '../reducers/medsreducer';

const reducers = combineReducers({
    meds,
    pharmacy
});

let middleware = [thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middleware));