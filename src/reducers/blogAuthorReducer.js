import {
    GET_BLOG_AUTHOR
} from '../actions/types.js';

const initialState = {
    authors: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_AUTHOR:
            return {
                ...state,
                authors: state.authors.concat(action.payload)
            }

        default:
            return state;
    }
}




// const authorData = {
//     ...state.authorData,
//     [action.payload.id]: action.payload.name
// };
// return {
//     ...state,
//     authors: {
//         ...state.authors,
//         authorData
//     }
// }

// import {
//     GET_BLOG_AUTHOR
// } from '../actions/types.js';

// const initialState = {
//     authors: [],
// };

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case GET_BLOG_AUTHOR:
//             return {
//                 ...state,
//                 authors: state.authors.concat(action.payload)
//             }

//         default:
//             return state;
//     }
// }