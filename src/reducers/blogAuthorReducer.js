import {
    GET_BLOG_AUTHOR
} from '../actions/types.js';

const initialState = {
    author: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_AUTHOR:
            return {
                ...state,
                author: action.payload.data
            }

        default:
            return state;
    }
}