import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

//* 12 A [ ] **Import your new reducer file into the ./reducers/index.js file.** 12 B [ ] As a start, only add a default case to the switch statement. (back in favoritesReducer.js)
import favoritesReducer from './favoritesReducer';

//* 13 [ ] **In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})
export default rootReducer;