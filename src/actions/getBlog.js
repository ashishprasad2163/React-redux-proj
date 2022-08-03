import { GET_BLOG_DETAILS, GET_BLOG_AUTHOR } from "./types";

export const getBlogData = () =>
    async (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then(data => {
                let idArray = [...new Set(data.map((blog) => blog.userId))];
                dispatch({
                    type: GET_BLOG_DETAILS,
                    payload: data
                })
                console.log("idArray", idArray);
                return idArray.map((id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`))
            })
            .then((item) => {
                item.map((i) => {
                    i.then((res) => res.json())
                        .then((data) => {
                            console.log("isData", data);
                            dispatch({
                                type: GET_BLOG_AUTHOR,
                                payload: data
                            })
                        })
                })
            })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log("isData", data);
        //     // dispatch({
        //     //     type: GET_BLOG_AUTHOR,
        //     //     payload: data
        //     // })
        // })


    };










//     import { GET_BLOG_DETAILS } from "./types";

// export const getBlogData = () =>
//     async (dispatch) => {
//         try {
//             let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//             let data = await res.json();
//             dispatch({
//                 type: GET_BLOG_DETAILS,
//                 payload: data
//             })
//         } catch (error) {
//             alert(error);
//         }
//     };