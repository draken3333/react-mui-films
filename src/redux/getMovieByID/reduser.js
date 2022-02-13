import { GET_MOVIE, GET_MOVIE_IMG, GET_MOVIE_TR, GET_SIMILAR } from '../utils/constans';

const initialState = {

    items: [],
    genres: [],
    images: [],
    video: [],
    similar: [],


}

const muvies = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIE:

            return (
                {
                    ...state,
                    items: action.payload,
                    genres: action.payload.genres


                }
            );


        case GET_MOVIE_IMG:

            return (
                {
                    ...state,
                    images: action.payload

                }
            );
        case GET_MOVIE_TR:

            return (
                {
                    ...state,
                    video: action.payload

                }
            );

            case GET_SIMILAR:

                return (
                    {
                        ...state,
                        similar: action.payload
    
                    }
                );
    


        default:
            return state;
    }

}


export default muvies;