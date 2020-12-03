import React from 'react';

const BlogList = (props) => {

  return(
    <table>
      <tbody>
      <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Url</th>
        <th>Votes</th>
      </tr>
      {props.blogs.map(blog => {
        return(
          <tr key = {blog.id}>
            <td>{blog.author}</td>
            <td>{blog.title}</td>
            <td>{blog.url}</td>
            <td>{blog.likes}</td>
            <td><button onClick={() => props.handleVote(blog.id)}>Vote</button></td>
            <td><button onClick={() => props.handleDelete(blog.id)}>Delete</button></td>
          </tr>
        ) 
      })}
      </tbody>
    </table>
  )
}
export default BlogList;