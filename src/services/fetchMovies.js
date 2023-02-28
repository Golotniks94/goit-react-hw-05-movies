import axios from 'axios';

const defaultParams = {
  api_key: '151d7d67eff269279b50cee772990c55',
  language: 'en-US',
  include_adult: false,
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = defaultParams;

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/all/week');
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieByName = async name => {
  const { data } = await axios.get('/search/movie', {
    params: { ...defaultParams, query: name },
  });
  return data.results;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};
