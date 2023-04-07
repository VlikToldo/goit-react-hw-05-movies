import axios from 'axios';
const API_KEY = 'cc476e5bf962689cf79d0305b2ea0701';
const COMMON_URL = 'https://api.themoviedb.org/3';

const searchMovie = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

const searchDetails = async (movieId) => {
    const {data} = await axios.get(`${COMMON_URL}/movie/${movieId}?api_key=${API_KEY}`)
    return data;
}

const searchCast = async (movieId) => {
    const {data} = await axios.get(`${COMMON_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    return data;
}

const searchReviews = async (movieId) => {
  const {data} = await axios.get(`${COMMON_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
  return data;
}

const searchFilm = async (name) => {
  const {data} = await axios.get(`${COMMON_URL}/search/movie?api_key=${API_KEY}&query=${name}&language=en-US`)
  return data;
}

export { searchMovie, searchDetails, searchCast, searchReviews, searchFilm };
