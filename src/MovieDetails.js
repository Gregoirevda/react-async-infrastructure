import React, {PureComponent} from 'react';
import {fetchMovieDetails} from './api';
import {runPureTask} from './future';


export default class MovieDetails extends PureComponent {

  state = {
    movieDetails: {}
  };

  render(){
    const {id, handleBackClick, showDetail} = this.props;
    const {movieDetails} = this.state;
    console.log('showDetail', showDetail);

    /* Looks BAD */
    const prom = runPureTask(() => fetchMovieDetails(id))
      .then((res) => {
        this.setState({
          movieDetails: res
        });
      });

    console.log('prom', prom);
    console.log('movieDetails', movieDetails);
    return showDetail && <div>
      <h4> MovieDetails {id}</h4>
      <p>
        title: {movieDetails.title}
      </p>

      <p>
        director: {movieDetails.director}
      </p>

      <button onClick={handleBackClick}> Back </button>
    </div>;
  }
}