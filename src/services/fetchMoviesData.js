import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
};

export const fetchGenres = async (language = 'en') =>
  axios
    .get(`/genre/movie/list`, { params: { language } })
    .then((res) => ({ list: res.data.genres }))
    .catch((e) => console.error(e));

export const fetchTrending = async (language = 'en', page = 1) =>
  await axios
    .get(`/trending/movie/day`, {
      params: {
        language,
        page,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((err) => console.error(err));

export const fetchSearch = async (language = 'en', page = 1, query) =>
  await axios
    .get(`/search/movie`, {
      params: {
        language,
        include_adult: false,
        page,
        query,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((err) => console.error(err));

export const fetchDetails = async (language = 'en', id) =>
  await axios
    .get(`/movie/${id}`, {
      params: { language },
    })
    .then((res) => ({ ...res.data }))
    .catch((err) => console.error(err));

export const fetchCredits = async (language = 'en', id) =>
  await axios
    .get(`/movie/${id}/credits`, {
      params: { language },
    })
    .then((res) => [...res.data.cast])
    .catch((err) => console.error(err));

export const fetchReviews = async (language = 'en', id) =>
  await axios
    .get(`/movie/${id}/reviews`, {
      params: { language },
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
