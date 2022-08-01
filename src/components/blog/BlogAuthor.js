import React, { useEffect } from 'react';

const BlogAuthor = ({ authorId }) => {

    console.log("user page", authorId);
    return (
        <div>
            Author name is : {authorId}
        </div>
    )
};


export default BlogAuthor;