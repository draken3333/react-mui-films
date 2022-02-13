import { SORT_BY } from "../utils/constans";

const initialState = {
  items: [],
};

const sortBy = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default sortBy;
