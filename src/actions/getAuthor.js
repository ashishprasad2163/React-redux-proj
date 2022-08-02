import { GET_BLOG_AUTHOR } from "./types";
import _ from 'lodash';


// const _getAuthorData = _.memoize((async (id, dispatch) => {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     let data = await res.json();
//     console.log("adataaaaa",data);
//     dispatch({
//         type: GET_BLOG_AUTHOR,
//         payload: data
//     })
// }))

// export const getAuthorData = (id) =>
//     async (dispatch) => {
//         try {
//             console.log("action rann");
//             _getAuthorData(id, dispatch)
//         } catch (error) {
//             console.log(error);
//         }
//     };

// const _getAuthorData = _.memoize((async (id, dispatch) => {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     let data = await res.json();
//     console.log("adataaaaa", data);
//     dispatch({
//         type: GET_BLOG_AUTHOR,
//         payload: data
//     })
// }))

export const getAuthorData = (id) =>
    async (dispatch) => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await res.json();
            console.log("adataaaaa", data);
            dispatch({
                type: GET_BLOG_AUTHOR,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    };