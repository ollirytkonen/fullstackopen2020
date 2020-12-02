import React from 'react'
const Blog = (props) => {
   
    return(
        <tbody>
            <tr>
                <th>Author</th>
                <th>Title</th>
                <th>BlogUrl</th>
                <th>Likes</th>
            </tr>
        {props.blogs.map(blog => 
            <tr key={blog.id}>
            <td >{blog.author}</td>
            <td >{blog.title}</td>
            <td >{blog.blogUrl}</td>
            <td >{blog.likes}</td>
            <td><button onClick={() => props.handleLikes(blog.id)}>Vote</button></td>
            </tr>              
            )}         
        </tbody>
    )
}

export default Blog;