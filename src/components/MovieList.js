import React from 'react';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux'; //ADDED for mapStateToProps below
import { deleteMovie } from '../actions/movieActions'; //7 (more below) Import deleteMovie as part of the connect method 

const MovieList = (props)=> {
    console.log('props from MovieList.js', props);//checks what props are coming in
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
    return{ movies: state.movies//Make changes necessary to get the component connected to the movie reducer working again. Remember .reducer will NOT be in this line of code until later. 
    }
}

export default connect(mapStateToProps, {deleteMovie})(MovieList);
//7 [ ] **We can delete movies within the Movie Component.** Connect the deleteMovie action through the connect method. Note I imported { delete movie above }