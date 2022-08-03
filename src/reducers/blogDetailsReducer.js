import {
    GET_BLOG_DETAILS
} from '../actions/types.js';

const initialState = {
    blogs: [],
};

export default (state = initialState, action) => {
    console.log("reducer",action.payload);
    switch (action.type) {
        case GET_BLOG_DETAILS:
            return {
                ...state,
                blogs: [...action.payload]
            }

        default:
            return state;
    }
}