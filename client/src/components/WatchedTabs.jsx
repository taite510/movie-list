import React from 'react'

class WatchedTabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      watchedFilter: false
    }
    this.handleWatchedFilter = this.handleWatchedFilter.bind(this)
    this.handleToWatchFilter = this.handleToWatchFilter.bind(this)
  }

  handleWatchedFilter () {
    if (this.state.watchedFilter === true) {
      this.props.handleFilter(movie => true)
    } else {
      let watchedFunc = (watchedStatus => watchedStatus.haveWatched)
      this.props.handleFilter(watchedFunc)
    }
    this.setState({
      watchedFilter: !this.state.watchedFilter
    })
  }

  handleToWatchFilter () {
    let toWatchFunc = (watchedStatus => !watchedStatus.haveWatched)
    this.props.handleFilter(toWatchFunc)
    if (this.state.watchedFilter === true) {
      this.setState({
        watchedFilter: !this.state.watchedFilter
      })
    }
  }

  render() {
    let tabStyle = {
      backgroundColor: this.state.watchedFilter ? 'rgb(125, 231, 125)' : 'white'
    }
    return (
      <div className='top-item'>
        <div style={tabStyle} className='tabs' onClick={this.handleWatchedFilter}>
          <span>Watched</span>
        </div>
        <div className='tabs' onClick={this.handleToWatchFilter}>
          <span>To Watch</span>
        </div>
      </div>
    )
  }
}

export default WatchedTabs