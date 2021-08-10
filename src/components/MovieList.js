import React from 'react';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux'; //ADDED for mapStateToProps below

const MovieList = (props)=> {
    console.log('props from MovieList.js', props);
    // const movies = [];//3B
    const movies = props.movies;//see 3B (3A is below)

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
//3A The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props. Replace our static movie variable with that prop above 
const mapStateToProps = (state) => {
    console.log("STATE from MovieList.js", state);
    return{ movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(MovieList);