import React, { useState, useEffect } from 'react';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log('state', state);
  return (
    <>
      <HeroImage />
      <Grid />
      <LoadMoreBtn />
      <MovieThumb />
      <SearchBar />
      <Spinner />
    </>
  );
};

export default Home;
