export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
//* 9 C [ ] Create an action creator for addMovie in movieActions.js.
export const addMovie = (movie) => {
    return ({ type: ADD_MOVIE, payload:movie})
}