import React from 'react';
import MovieDetails from './MovieDetails';
import MovieReviews from './MovieReviews';

export default function MoviePage({id, handleBackClick}) {
  return (
    <div>
      <MovieDetails id={id} handleBackClick={handleBackClick}/>
      <MovieReviews id={id}/>
    </div>
  )
}

