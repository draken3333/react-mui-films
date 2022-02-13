import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import getSlidersImge from './HeaderSlider/reducer';
import sortBy from './SortBy/reduser';
import getMovieByID from './getMovieByID/reduser';

const composedEnchancer = compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const rootReducer = combineReducers({
    sliderDate: getSlidersImge,
    sortBy,
    getMovieByID
})

const store = createStore(rootReducer, composedEnchancer);


export default store;