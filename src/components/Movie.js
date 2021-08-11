import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';// 8A, 8B, see below
import { addFavorite } from '../actions/favoritesAction'; //18 C see event handler and export below

const Movie = (props) => {
    console.log('Movie.js props ', props)
    ;
    const { id } = useParams();
    const { push } = useHistory();

        //* 8B [ ] - Create and connect the necessary event handlers to call deleteMovie on the current movie's id. 
        const useDeleteMovie = () => {
            props.deleteMovie(movie.id)
            push('/movies') //8C [] - After setting the state, redirect the user using the push('/movies') command.
        }
        

    // 4 const movies = [];
    const movies = props.movies; //changed to get correct data rather than an empty array. 

    const movie = movies.find(movie=>movie.id===Number(id));
    const displayFavorites = props.displayFavorites //define display favorites

    //18 C event Handler for addFavorites see import above and export below too. !!!
    const useAddFavorite = () => {
        props.addFavorite({
            title: movie.title,
            id: movie.id
        })
    }


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
                            {/* Stretch goals 1 - It makes sense to not allow the user to favorite an item if favorites is not displayed. Add in means for the favorite button to ONLY display if displayFavorite is true.*/}
                        {displayFavorites && <span onClick={useAddFavorite} key={movie.id} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete">
                                {/* 
                                 8A [ ] **Find the HTML element that should trigger a deletion in the movie component.**  */}
                                <input onClick={useDeleteMovie} key={movie}type="button" className="m-2 btn btn-danger" value="Delete"/></span>
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
    return { 
        movies: state.movieReducer.movies,//4 note - Be sure to make any changes necessary to get the component connected to the movie reducer working again. like importing (caution do not add moveiReducer until needed in step 14. For now use state.movies until necessary in the project)  and import { connect } to be used below
        displayFavorites: state.favoritesReducer.displayFavorites
        //16 Connect the displayFavorites state to the Movie and MovieHeader component. don't use favoritesReducer until step 16
    }
}
//7 [ x ] **We can delete movies within the Movie Component.** Connect the deleteMovie action through the connect method.
// export default connect(mapStateToProps)(Movie);
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);