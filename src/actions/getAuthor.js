import { GET_BLOG_AUTHOR } from "./types";

export const getAuthorData = (id) =>
    async (dispatch) => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await res.json();
            dispatch({
                type: GET_BLOG_AUTHOR,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    };