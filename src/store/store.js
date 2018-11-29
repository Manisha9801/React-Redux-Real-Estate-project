import {createStore, combineReducers, applyMiddleware} from 'redux';
import ListingPage from './../reducers/ListingPage/ListingPage';
import FilteringData from './../reducers/FilteringData/FilteringData';
import thunk from 'redux-thunk';

  
const store = createStore(combineReducers({
    list : ListingPage,
    filter : FilteringData
}),{}, applyMiddleware(thunk))

export default store;