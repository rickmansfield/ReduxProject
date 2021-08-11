//* 11 [ x ] Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//-  favorites: an array of movie objects
//-  displayFavorites: a boolean that holds if favorite elements should be displayed in app
const initialState = {
    favorites: [],
    displayFavorites: true
}

//* 12 A [ ] **Import your new reducer file into the ./reducers/index.js file.
//** 12 B [ ] As a start, only add a default case to the switch statement. (back in favoritesReducer.js)
const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
        return state;
    }
    
}
export default reducer;