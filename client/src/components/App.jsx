import React from 'react';
import exampleMovieData from '../data/exampleMovieData.js'
import MovieList from './MovieList.jsx'
import InputBars from './InputBars.jsx'
import WatchedTabs from './WatchedTabs.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieData : exampleMovieData,
      movieList: exampleMovieData,
      searchItem: '',
      searchButton: true,
      addMovie: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
  }


  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleWatched (movieName) {
    let movieData = this.state.movieData;
    let indexOfMovie = movieData.findIndex(movie => movie.title === movieName);
    movieData[indexOfMovie].haveWatched = !movieData[indexOfMovie].haveWatched;
    this.setState({
      movieData: movieData
    })
  }

  handleSearch (func) {
    this.handleFilter(func)
    this.setState({
      searchItem: '',
      searchButton: !this.state.searchButton
    })
  }

  handleFilter (func) {
    this.setState({
      movieList: this.state.movieData.filter(func),
    })
  }

  handleAddMovie (movie) {
    let newMovie = [{title: movie, haveWatched: false}]
    if (this.state.addMovie.length > 0) {
      var newList = this.state.movieData.concat(newMovie)
      this.setState({
        movieData: newList,
        addMovie: '',
        movieList: newList
      })
    }
  }

  render() {
    let buttonValue = this.state.searchButton ? 'Go!' : 'Return';
    let searchItem = this.state.searchItem;
    let addMovie = this.state.addMovie;
    return ( <div>
        <header>MovieList</header>
          <div className='top-bar'>
            <WatchedTabs handleFilter={this.handleFilter}/>
            <InputBars handleChange={this.handleChange} searchItem={searchItem} handleSearch={this.handleSearch} buttonValue={buttonValue} handleAddMovie={this.handleAddMovie} addMovie={addMovie}/>
          </div>
          {/* <div>
          <input placeholder='Add movie to list' onChange={this.handleChange} type='text' name='addMovie' value={this.state.addMovie} />
          <input onClick={() => this.handleAddMovie(this.state.addMovie)} type='submit' value='Add'></input><br/>
          <input placeholder='Search...' onChange={this.handleChange} type='text' name='searchItem' value={this.state.searchItem} />
          <input onClick={() => this.handleSearch(this.state.searchItem)} type='submit' value={buttonValue} />
          </div> */}
          <MovieList list={this.state.movieList} handleWatched={this.handleWatched}/>
      </div>
    );
  }
}
export default App;