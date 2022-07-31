import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthorData } from '../../actions/getAuthor';
import PropsTypes from 'prop-types';

const BlogAuthor = ({ authorId, author: { name }, getAuthorData, }) => {
    useEffect(() => {
        getAuthorData(authorId)
    }, []);

    console.log("useruserx name", name);
    return (
        <div>
            Author name is : {name}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        author: state.authorReducer.author,
        // user: state.authorReducer.users.filter((user) => user.id === ownProps.id),
    }
}

export default connect(mapStateToProps, { getAuthorData })(BlogAuthor);