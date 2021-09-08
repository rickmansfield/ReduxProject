import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //15 see below
import { removeFavorite } from '../actions/favoritesAction';//19 C Event handler see onClick below

const FavoriteMovieList = (props) => {
    console.log('FavoriteMovieList props: ', props) 
    // const favorites = []; // replace this
    const favorites = props.favorites; 
    const removeFavorite = props.removeFavorite //19C necessary for removeFavorite event

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        {/* 19 C see import and expoer for this  */}
                        <span><span onClick={()=>{removeFavorite(movie.id)}} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

//* 15 [ ] Connect the favorites state to the FavoriteMovieList component and test. The test is just the console.log I Think. The state is an empty array becuase up till now we have not added fucntionality to add a favorite to the favorites list
// 
const mapStateToProps = (state) => {
    console.log('FavoriteMoviesList state: ', state)
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList); //Connect the action