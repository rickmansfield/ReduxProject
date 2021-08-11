import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //15 see below

const FavoriteMovieList = (props) => {
    console.log('FavoriteMovieList props: ', props) 
    // const favorites = []; // replace this
    const favorites = props.favorites; 

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

//* 15 [ ] Connect the favorites state to the FavoriteMovieList component and test.
// 
const mapStateToProps = (state) => {
    console.log('FavoriteMoviesList state: ', state)
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList); //Connect the action