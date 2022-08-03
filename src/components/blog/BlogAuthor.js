import React, { useEffect } from 'react';

const BlogAuthor = (props) => {
    return (
        <div>
            Author name is : {props.author ? props.author.name : "unknown"}
        </div>
    )
};


export default BlogAuthor;