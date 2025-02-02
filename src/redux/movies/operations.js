import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'f3b7458c34b3a95455ce5f7edb53b2eb',
};

export const getPopularData = createAsyncThunk(
  'movies/fetchPopular',
  async (page = 1, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/trending/movie/day?page=${page}`);

      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieSearcher = createAsyncThunk(
  'movies/searchMovies',
  async ({ searchQuery, page = 1 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/search/movie?query=${searchQuery}&page=${page}`);
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieById = createAsyncThunk(
  'movie/fetchMovieById',
  async (movieId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`movie/${movieId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieVideoById = createAsyncThunk(
  'movie/fetchMovieVideoById',
  async (movieId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/movie/${movieId}/videos`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovieByGenres = createAsyncThunk(
  'movie/fetchMovieByGenres',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/genre/movie/list?language=en-US`);
      return data.genres;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  'movie/fetchUpcomingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/movie/upcoming?language=en-US&page=1&region=US`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
