import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Movie = (props) => {
    console.log('Movie.js props ', props)
    ;
    const { id } = useParams();
    const { push } = useHistory();

    // 4 const movies = [];
    const movies = props.movies; //changed to get correct data rather than an empty array. 

    const movie = movies.find(movie=>movie.id===Number(id));
    const displayFavorites = props.displayFavorites //define display favorites
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
//4 [ ] **The Movie component needs to access our list of movies to function.** Map movies to props here as well.
const mapStateToProps = (state) => {
    console.log("STATE from MovieList.js", state);
    return{ 
        movies: state.movies,//4 note - Be sure to make any changes necessary to get the component connected to the movie reducer working again. like importing (caution added moveiReducer until needed use state.movies until necessary in the project)  and import { connect } to be used below
        displayFavorites: state.displayFavorites
        //Connect the displayFavorites state to the Movie and MovieHeader component. don't use favoritesReducer yet. 
    }
}
export default connect(mapStateToProps)(Movie);