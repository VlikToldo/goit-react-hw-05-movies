import axios from 'axios';

const searchMovie = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=cc476e5bf962689cf79d0305b2ea0701'
  );
  return data;
};

const searchDetails = async (movieId) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=cc476e5bf962689cf79d0305b2ea0701`)
    return data;
}

const searchCast = async (movieId) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cc476e5bf962689cf79d0305b2ea0701&language=en-US`)
    return data;
}

const searchReviews = async (movieId) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cc476e5bf962689cf79d0305b2ea0701&language=en-US`)
  return data;
}

const searchFilm = async (name) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cc476e5bf962689cf79d0305b2ea0701&query=${name}&language=en-US`)
  return data;
}

export { searchMovie, searchDetails, searchCast, searchReviews, searchFilm };
