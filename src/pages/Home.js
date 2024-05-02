// Home.js
import React from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <MovieCard />
      {/* Render more MovieCards for other movies */}
    </div>
  );
}

export default Home;
