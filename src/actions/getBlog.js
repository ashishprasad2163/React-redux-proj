import { GET_BLOG_DETAILS } from "./types";

export const getBlogData = () =>
    async (dispatch) => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let data = await res.json();
            dispatch({
                type: GET_BLOG_DETAILS,
                payload: data
            })
        } catch (error) {
            alert(error);
        }
    };