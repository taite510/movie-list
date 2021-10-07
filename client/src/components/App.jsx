import React from 'react';
import exampleMovieData from '../data/exampleMovieData.js'
import MovieList from './MovieList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: exampleMovieData,
      searchItem: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (event) {
    event.persist()
    console.log(event)

    this.setState({
      searchItem: event.target.value
    })
  }
  handleSearch (searchedMovie) {
    this.setState({
      movieList: exampleMovieData.filter(movie => {
        var lowercaseMovie = movie.title.toLowerCase()
        var lowercaseSearch = searchedMovie.toLowerCase()
        if (lowercaseMovie.search(lowercaseSearch) >= 0) {
          return true
        } else {
          return false
        }
      }),
      searchItem: ''
    })
  }

  render() {
    return ( <div>
        <header>MovieList</header>
          <label>
          <em>Search</em> for a Movie:<br/>
            <input onChange={this.handleChange}type="text" name="name" value={this.state.searchItem}/>
          </label>
          <input onClick={() => this.handleSearch(this.state.searchItem)}type="submit" value="Submit" />
          <MovieList list={this.state.movieList}/>
      </div>
    );
  }
}
export default App;