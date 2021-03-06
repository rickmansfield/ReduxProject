# Redux React Module Project: Movie CRUD

This module explored the redux philosophy, creation of the redux store and using connect to link state and action to arbitrary components.

- [Redux React Module Project: Movie CRUD](#redux-react-module-project-movie-crud)
  - [Objectives](#objectives)
  - [Introduction](#introduction)
  - [Instructions](#instructions)
    - [Task 1: Project Set Up](#task-1-project-set-up)
    - [Task 2: Project Requirements](#task-2-project-requirements)
      - [Setup Redux](#setup-redux)
      - [Connecting the Movie reducer](#connecting-the-movie-reducer)
      - [Connecting the Delete and Add Movie actions](#connecting-the-delete-and-add-movie-actions)
      - [Build out the favorites reducer](#build-out-the-favorites-reducer)
      - [Build out the favorites actions](#build-out-the-favorites-actions)
    - [Stretch goals](#stretch-goals)
  - [Rick Mansfield's Pull Request](#rick-mansfields-pull-request)
  - [Questions](#questions)
    - [What is Redux](#what-is-redux)
    - [Why  Reedux?](#why--reedux)
  - [Resources](#resources)

## Objectives
- Understand the use and setup of Redux
- Use Redux to connect existing state and actions to components
- Use the combineReducer method to combine states.
- Build reducers, actions and redux connections from scratch

## Introduction
In this project, you take a fairly complex application used to search a movie database and connect it to two different reducers through redux. You will both connect existing state definitions and build entire reducer / redux pairings from scratch.

![Movie DB Example](project-goals.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-redux`
* [ ] Download project dependencies by running `npm install``
* [ ] Start up the app using `npm start`

### Task 2: Project Requirements
#### Setup Redux
> *The DOM and movie reducer has been provided for you, but it's up to to connect it to redux...*

* 1 [ x ] In index.js, make use of the createStore method and Provider component to link your App to redux.

#### Connecting the Movie reducer
> *Within the reducers folder is the movieReducers file. We have the state already setup it up here with some initial data. Let's connect that state to our component.*

* 2 [ x ] **In movieReducer.js, make sure that we are setting our state by default to initialState.** Otherwise your state will not have the original structure it needs to function!

* 3A [ x ] **The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props.
* 3B [ x ] Replace our static movie variable with that prop.

* 4 [ x ] **The Movie component needs to access our list of movies to function.** Map movies to props here as well.

* 5 [ x ] **Finally, MovieHeader uses appTitle to display the title text.** Connect this component to appTitle and test appTitle is correctly displayed in your app.


#### Connecting the Delete and Add Movie actions
> *Looks like you got a good handle on mapping stateToProps! Now let's connect some actions.*

* 6 [ x ] Note that the deleteMovie reducer case and action creator are already available.

* 7 [ x ] **We can delete movies within the Movie Component.** Connect the deleteMovie action through the connect method.

* 8A [ x ] **Find the HTML element that should trigger a deletion in the movie component.** 
* 8B [ x ] - Create and connect the necessary event handlers to call deleteMovie on the current movie's id. 
* 8C [x ] - After setting the state, redirect the user using the push('/movies') command.

* 9 A [ x ] Add in an ADD_MOVIE case to movieReducer.js.
* 9 B [ x ] Make this new case return a version of state with new movie values passed in through the payload.
* 9 C [ x ] Create an action creator for addMovie in movieActions.js.
* 10 A [ x ] Find the component that triggers the adding of a movie and connect the addMovie action. (Found using chrome dev tools under components)
* 10 B [ x ] Create and connect the necessary event handlers to call addMovie.
* 10 C [ x ] Add in push('/movies/) after calling your action to trigger a redirect.

#### Build out the favorites reducer
> *Alright! Now that the movie reducer is complete, you have the chance to build a reducer from scratch to handle favorite movie functionality. We will also work on combining reducers.*

* 11 [ x ] Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
  -  favorites: an array of movie objects
  -  displayFavorites: a boolean that holds if favorite elements should be displayed in app

* 12 A [ ] **Import your new reducer file into the ./reducers/index.js file.** 12 B [ ] As a start, only add a default case to the switch statement. (back in favoritesReducer.js)

* 13 [ x ] **In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**

* 14 [ x ] **Notice that your movie functions no longer work. Why?** Make changes necessary to get the component connected to the movie reducer working again.(see MovieHeader.js, Movie.js)

* 15 [ x ] Connect the favorites state to the FavoriteMovieList component and test.

* 16 [ ] Connect the displayFavorites state to the Movie and MovieHeader component.

#### Build out the favorites actions
> *Now is your chance to build our all the rest of the app on your own. You can do this!*

 17-19 Add in A) reducer cases, B) action creators and C) event handler code for the following actions:

  17 - A) reducer case toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
  B) action creators and C) event handler code 
  Review app.js import/export and state. 
  
  18 - A) Reducer case addFavorites: Adds in a new movie object into the favorites list.B) action creators and C) event handler code

  19 - A) reducer case removeFavorite: Removes a movie Object from the favorites list with an id passed in.B) action creators and C) event handler code

### Stretch goals
1 - It makes sense to not allow the user to favorite an item if favorites is not displayed. Add in means for the favorite button to ONLY display if displayFavorite is true.
- Right now, you can favorite the same movie multiple times. Change the addFavorite action to only add in a new favorite if it doesn't already exist.
- Add in the ability to remove a movie from the favorites list if that movie is removed from our main movie list.
- Style to your heart's content ??????


## Rick Mansfield's Pull Request

- [Link for Convenience](https://github.com/LambdaSchool/web-module-project-redux/compare/main...rickmansfield:rick-mansfield?expand=1)

## Questions 

### What is Redux

- Redux is a predictable state container for JavaScript apps that replaced Flux.
- It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
- You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
- The Redux website says `Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.`
  
### Why  Reedux?

  - Redux helps you manage "global" state - state that is needed across many parts of your application.
  - The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.
  - Beats prop drilling hands down!!!
  - State connected only where needed. 
  - Makes state management MORE predictable. 

## Resources
![Redux Chart](src\assets\ReduxChart.JPG)

Test contribution in Github