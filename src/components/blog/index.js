import React, { useEffect } from 'react';
import BlogAuthor from './BlogAuthor';
import BlogDetail from './BlogDetail';
import { connect } from 'react-redux';
import { getBlogData } from '../../actions/getBlog';
import { getAuthorData } from '../../actions/getAuthor';


const Blog = ({ getBlogData, blogs, getAuthorData, ids, authors }) => {

    const renderBlogList = () => {
        return (
            <div>
                {
                    blogs && blogs.length ? (blogs.map((blog) => {
                        // console.log("test;;", authors.find((author) => author.id === blog.userId));
                        return (
                            <div key={blog.id}>
                                <BlogDetail title={blog.title} />
                                <br />
                                {/* <BlogAuthor authorId={authors.find((author) => author.id === blog.userId)} /> */}
                                <BlogAuthor authors={authors} id={blog.userId} />
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
             ids.map((id) => getAuthorData(id));
            console.log("fetching authors");
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
        ids: [...new Set(state.blogReducer.blogs.map((blog) => blog.userId))],
        authors: state.authorReducer.authors,
    }
}

export default connect(mapStateToProps, { getBlogData, getAuthorData })(Blog);