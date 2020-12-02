import React from 'react'

const Addblog = (props) => {
  
  return(
      <div>
        <h2>Add Blog</h2>
        <form onSubmit={props.addBlog}>
            Author: <input value={props.author}onChange={props.handleAuthor}/><br/>
            Title: <input value={props.title}onChange={props.handleTitle}/><br/>
            Url: <input value={props.blogUrl} onChange={props.handleUrl}/><br/>
            <button type="submit">Add</button>
        </form>
    </div>
      
  )
}

export default Addblog;