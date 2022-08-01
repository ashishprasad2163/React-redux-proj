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
                        console.log("blog", blog);
                        console.log("test;;", authors.find((author) => author.id === blog.userId));

                        <div key={blog.id}>
                            <BlogDetail title={blog.title} />
                            <br />
                            {/* {authors.find((author) => author.id === blog.id)} */}
                            {/* <BlogAuthor authorId={authors.find((author) => author.id === blog.userId)} /> */}
                            <BlogAuthor authorId={authors} />
                        </div>
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
            ids.map(async (id) => await getAuthorData(id.userId));
        }
        getBlog();
        console.log("fetched blogs");
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
        ids: state.blogReducer.blogs.filter((blog) => blog.id),
        authors: state.authorReducer.authors,
    }
}

export default connect(mapStateToProps, { getBlogData, getAuthorData })(Blog);