import React from 'react'

class Movie extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      watched: this.props.item.haveWatched
    }
    this.handleWatched = this.handleWatched.bind(this)
  }

  handleWatched () {
    this.props.handleWatched(this.props.item.title)
    this.setState({
      watched: this.props.item.haveWatched
    })
  }
  render () {
    let divStyle = {
      backgroundColor: this.state.watched ? 'rgb(125, 231, 125)' : 'white'
    }
    let btnStyle = {
      backgroundColor: this.state.watched ? 'rgb(68, 187, 68)' : 'rgb(125, 231, 125)'
    }
    let watchedText = this.state.watched ? ' ✔' : '?'
    return (
      <div style={divStyle} className='movie-item'>
        <span>{this.props.item.title}</span>
      <button style={btnStyle} onClick={this.handleWatched}className='watched'>
        Watched <b>{watchedText}</b>
        </button>
      </div>
    )
  }
}


export default Movie