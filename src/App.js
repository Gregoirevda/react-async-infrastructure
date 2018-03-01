import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import MoviePage from './MoviePage';
import MovieList from './MovieList';

export default class App extends PureComponent {

  state = {
    currentId: null,
    showDetail: false
  };

  deferSetState = (state) => {
    console.log('deferSetState');
    ReactDOM.unstable_deferredUpdates(() => {
      console.log('unstable_deferredUpdates');
      this.setState(state);
    });
  };

  componentDidUpdate(nextProps, prevState) {
    if(prevState.showDetail !== this.state.showDetail) {
      window.scrollTo(0, 0);
    }
  }

  _onMovieDetailsClick = ({id}) => {
    this.setState({
      currentId: id,
    });

    this.deferSetState({
      showDetail: true
    });
  };

  _handleBackClick = () => {
    this.setState({
      showDetail: false,
      currentId: null
    })
  };

  render() {
    const {showDetail, currentId} = this.state;
    if(showDetail) {
      return <MoviePage id={currentId} handleBackClick={this._handleBackClick}/>
    } else {
      return <MovieList onClick={this._onMovieDetailsClick}/>
    }
  }
}