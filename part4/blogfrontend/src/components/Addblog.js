import React from 'react';

const AddBlog = (props) => {

  return(
    <form type ="submit" onSubmit={props.addBlog}>
        <h1>Add Blog</h1>
        Author: <input value={props.author} onChange={props.handleAuthorChange} required/><br/>
        Title: <input value={props.title} onChange={props.handleTitleChange} required/><br/>
        BLOG Url: <input value={props.url} onChange={props.handleUrlChange} required/><br/>
        <button type="submit">Add Blog</button> 
    </form>
  )
}
export default AddBlog;