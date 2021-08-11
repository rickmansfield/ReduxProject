import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieHeader = (props) => {
    console.log('MovieHeader props', props);//To verify what's here. 
    // const appTitle = "";
    const appTitle = props.appTitle;//changed to reflect dynamic title via props.

    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}
//5 [ ] **Finally, MovieHeader uses appTitle to display the title text.** Connect this component to appTitle and test appTitle is correctly displayed in your app.
const mapStateToProps = (state) => {
    console.log('State from MovieHeader.js: ', state);
    return {
        appTitle: state.movieReducer.appTitle,
        //#5 note remember movieReducer will not be used "yet" at this point for appTitle state. Ccorrect this in step 14
    }
}
// export default MovieHeader;
export default connect(mapStateToProps)(MovieHeader); 