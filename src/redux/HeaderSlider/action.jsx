import axios from 'axios';
import { API , API_KEY} from '../utils/api'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

export const fetchSliderData = () => (dispatch) => {
    axios
    .get(
     `${API}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${getRandomInt(1,10)}`
    )
    .then(({ data }) => dispatch(sliderDataAction(data.results)));

}

export const sliderDataAction = (items) => (
    {
        type: 'SET_SLIDERDATE',
        payload: items,

    }
);


