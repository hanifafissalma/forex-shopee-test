import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ratesReducer from '../reducer/rates';
import kursReducer from '../reducer/getkurs';
import inputReducer from '../reducer/inputkurs';
const reducers = combineReducers({
    rateslist: ratesReducer,
    selectedrates: ratesReducer,
    kurs:kursReducer,
    input_kurs: inputReducer
})
const middleware = applyMiddleware(logger, thunk);
export default createStore(reducers, middleware);
