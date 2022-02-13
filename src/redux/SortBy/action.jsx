import axios from "axios";
import { SORT_BY, PAGE_CHANGE } from "../utils/constans";
import { API, API_KEY } from "../utils/api";

export const sortByFetchData = (sortByValue, pages) => (dispatch) => {
  axios
    .get(
      `${API}/3/movie/${
        sortByValue === "popular"
          ? "popular"
          : sortByValue === "upcoming"
          ? "upcoming"
          : "top_rated"
      }?api_key=${API_KEY}&language=en-US&page=${pages}`
    )
    .then(({ data }) => dispatch(sortBy(data.results)));


};

export const sortBy = (items) => ({
  type: SORT_BY,
  payload: items,
});

export const page = (number) => ({
  type: PAGE_CHANGE,
  payload: number,
});
