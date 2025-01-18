import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getPopularData(page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  return data.results;
}

async function fetchMovieSearcher(text, page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}&page=${page}`
  );

  return data;
}

async function fetchMovieForId(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
}

async function fetchMovieVideoForId(id) {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  return data;
}

async function getGenres() {
  const { data } = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  return data.genres;
}

async function fetchUpcomingMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=US`
  );

  return response.json();
}

export {
  getPopularData,
  fetchMovieSearcher,
  fetchMovieForId,
  getGenres,
  fetchMovieVideoForId,
  fetchUpcomingMovies,
};
