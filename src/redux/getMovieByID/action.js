import axios from 'axios';
import { GET_MOVIE, GET_MOVIE_IMG, GET_MOVIE_TR, GET_SIMILAR } from '../utils/constans';
import { API, API_KEY } from '../utils/api';

export const fetchMovieId = (id) => async (dispatch) => {
    await axios
        .get(
            `${API}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        ).then(({ data }) => dispatch(getMovieById(data)));

    await axios
        .get(
            `${API}/3/movie/${id}/images?api_key=${API_KEY}`
        ).then(({ data }) => dispatch(getMovieByIdImages(data.backdrops)));

    await axios
        .get(
            `${API}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        ).then(({ data }) => dispatch(getMovieByIdTrailer(data.results)));

    await axios
        .get(
            `${API}/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
        ).then(({ data }) => dispatch(getSimilarMovie(data.results)));


}

export const getMovieById = (items) => (
    {
        type: GET_MOVIE,
        payload: items,
    }
);

export const getMovieByIdImages = (images) => (
    {
        type: GET_MOVIE_IMG,
        payload: images,
    }
);
export const getMovieByIdTrailer = (video) => (
    {
        type: GET_MOVIE_TR,
        payload: video,
    }
);
export const getSimilarMovie = (similar) => (
    {
        type: GET_SIMILAR,
        payload: similar,
    }
);
