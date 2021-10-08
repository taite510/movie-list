import React from 'react'


let InputBars = (props) => {
  let searchFunc = (movie => {
    var lowercaseMovie = movie.title.toLowerCase()
    var lowercaseSearch = props.searchItem.toLowerCase()
    if (lowercaseMovie.search(lowercaseSearch) >= 0) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className='top-item'>
      <input placeholder='Add movie to list' onChange={props.handleChange} type='text' name='addMovie' value={props.addMovie} />
      <input onClick={() => props.handleAddMovie(props.addMovie)} type='submit' value='Add'></input><br/>
      <input placeholder='Search...' onChange={props.handleChange} type='text' name='searchItem' value={props.searchItem} />
      <input onClick={() => props.handleSearch(searchFunc)} type='submit' value={props.buttonValue} />
    </div>
  )
}

export default InputBars