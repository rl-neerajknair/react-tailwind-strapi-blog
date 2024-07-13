import React from 'react'
import { Footer, Navbar, BlogContent } from "../components"

const BlogContentPage = ({ blogs }) => {
    return (
        <div>
            <Navbar />
            <BlogContent blogs={blogs} />
            <Footer />
        </div>
    )
}

export default BlogContentPage