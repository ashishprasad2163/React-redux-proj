import React, { useEffect } from 'react';
import BlogAuthor from './BlogAuthor';
import BlogDetail from './BlogDetail';
import { connect } from 'react-redux';
import { getBlogData } from '../../actions/getBlog';


const Blog = ({ getBlogData, blogs, authors }) => {
    console.log("authors", authors);
    const renderBlogList = () => {
        return (
            <div>
                {
                    blogs && blogs.length ? (blogs.map((blog) => {
                        return (
                            <div key={blog.id}>
                                <BlogDetail title={blog.title} />
                                <br />
                                <BlogAuthor author={authors.find((author) => author.id === blog.userId)} />
                            </div>
                        )
                    })) : <div>
                        Fetching failed
                    </div>
                }
            </div >
        )
    }
    useEffect(() => {

        const getBlog = async () => {
            await getBlogData();
            console.log("fetched blogs");
        }
        getBlog();
    }, []);
    return (
        <div>
            {renderBlogList()}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        blogs: state.blogReducer.blogs,
        // ids: [...new Set(state.blogReducer.blogs.map((blog) => blog.userId))],
        authors: (state.authorReducer.authors),
    }
}

export default connect(mapStateToProps, { getBlogData })(Blog);