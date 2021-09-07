import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
//2 In movieReducer.js, make sure that we are setting our state by default to initialState.** Otherwise your state will not have the original structure it needs to function!
const reducer = (state = initialState, action) => {
    console.log('dragonReducer.js ln:10 action:', action);
    console.log('dragonReducer.js ln:11 state:', state);
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item => (action.payload !== item.id))
            }
        //9 A [ ] Add in an ADD_MOVIE case to movieReducer.js.
        case ADD_MOVIE:
            //9 B [ ] Make this new case return a version of state with new movie values passed in through the payload.
            return {
                //
                ...state,
                movies: [...state.movies, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;