import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesAction'
//* 11 [ x ] Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//-  favorites: an array of movie objects
//-  displayFavorites: a boolean that holds if favorite elements should be displayed in app
const initialState = {
    favorites: [],
    displayFavorites: true
}

//* 12 A [ ] **Import your new reducer file into the ./reducers/index.js file.
//** 12 B [ ] As a start, only add a default case to the switch statement. (back in favoritesReducer.js)
const favoritesreducer = (state = initialState, action) => {
    switch(action.type){
        //17 A) Add in a case for TOGGLE_FAVORITES
        case TOGGLE_FAVORITES:
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }
        //18 A) Add in a case for ADD_FAVORITE    
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }  
        //19 A) Add in a case for REMOVE_FAVORITE     
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item =>{
                    return item.id !== action.payload
                })
            }    
        default:
        return state;
    }
    
}
export default favoritesreducer;