import React, { useEffect } from 'react';

const BlogAuthor = ({ authors, id }) => {

    console.log("user page", authors);
    console.log("id", id);
    const renderAuthorName = (authors, id) => {
        authors.find((author) => {
            return author.id === id ? (
                <span>
                    {author.name}
                </span>
            ) : "null"
        })
    };

    return (
        <div>
            Author name is : {renderAuthorName(authors, id)}
        </div>
    )
};


export default BlogAuthor;