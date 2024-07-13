import React from 'react'
import { Blogs, Footer, Navbar } from "../components"

const Homepage = ({ blogs }) => {
    console.log("HomePage")
    console.log(blogs)

    return (
        <div>
            <Navbar />
            <Blogs blogs={blogs ? blogs : ""} />
            <Footer />
        </div>
    )
}

export default Homepage