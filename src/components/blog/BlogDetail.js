import React from 'react';


const BlogDetail = (props) => {
    return (
        <div>
            <h3>
                Title is {props.title}
            </h3>
            <div>
                Blog Body
            </div>
        </div>
    )
};

export default BlogDetail;