import React from 'react'
import Movie from './Movie.jsx'

let MovieList = (props) => {
  if (props.list.length > 0) {
    return (
      <div className='movie-list'>
        <ul>
        {props.list.map(item =>
          <Movie item={item} key={item.title} handleWatched={props.handleWatched}/>
        )}
        </ul>
      </div>
    )
  } else {
    return (
      <h3>No Movie Found</h3>
    )
  }
}

export default MovieList;