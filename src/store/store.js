import {createStore, combineReducers, applyMiddleware} from 'redux';
import ListingReducers from './../reducers/ListingReducers/ListingReducers';
import thunk from 'redux-thunk';

const store = createStore((combineReducers({
    list : ListingReducers
}),{}, applyMiddleware(thunk)));

export default store;