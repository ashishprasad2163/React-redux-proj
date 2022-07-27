import React, { useEffect } from 'react';
import BlogAuthor from './BlogAuthor';
import BlogDetail from './BlogDetail';
import { connect } from 'react-redux';
import { getBlogData } from '../../actions/getBlog';


const Blog = ({ getBlogData, blogs }) => {

    const renderBlogList = () => {
        return (
            <div>
                {
                    blogs && blogs.length ? (blogs.map((blog) => (
                        <div key={blog.id}>
                            <BlogDetail title={blog.title} />
                            <br />
                            <BlogAuthor author={blog.userId} />
                        </div>
                    ))) : <div>
                        Fetching failed
                    </div>
                }
            </div >
        )
    }
    useEffect(() => {
        getBlogData();
    }, []);
    return (
        <div>
            {renderBlogList()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        blogs: state.blogReducer.blogs
    }
}

export default connect(mapStateToProps, { getBlogData })(Blog);