import React from 'react'
import Blog from './Blog'

const Blogs = (props) => {
    return(
        <table>
         <Blog blogs={props.blogs} handleLikes={props.handleLikes}
         setlikes={props.setlikes} likes={props.likes}
         />       
        </table>  
    )
}

export default Blogs;