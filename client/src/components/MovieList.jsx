import React from 'react'
import Movie from './Movie.jsx'

var MovieList = (props) => {
  if (props.list.length > 0) {
    return (
      <div>
        <ul>
        {props.list.map((item, index) =>
          <Movie item={item} key={index}/>
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