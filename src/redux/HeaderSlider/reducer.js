import { SET_SLIDERDATE } from '../utils/constans';

const initialState = {

    items: []

}

const sortBy = (state = initialState, action) => {

    switch (action.type) {
        case SET_SLIDERDATE :

            return (
                {
                    ...state,
                    items: action.payload

                }
            );

        default:
            return state;
    }

}


export default sortBy;