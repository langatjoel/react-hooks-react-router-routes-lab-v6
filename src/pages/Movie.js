// Movie.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();

  // Fetch movie details based on id
  
  return (
    <div>
      <h1>Movie Page</h1>
      {/* Display movie details */}
    </div>
  );
}

export default Movie;
