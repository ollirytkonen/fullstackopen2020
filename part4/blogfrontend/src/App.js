import React,{useState, useEffect} from 'react';
import AddBlog from './components/AddBlog'
import BlogList from './components/BlogList'
import blogService from './services/blogs'

const App = () => {
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      blogService
        .getAll()
        .then(initialBlogs => {
          setBlogs(initialBlogs)
        })
  }, [])
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }
  const addBlog = (event) => {
    event.preventDefault()
    const blog = {
      id: blogs.length + 1,
      author: author,
      title: title,
      url: url,
      likes: 0
    }
    blogService
        .create(blog)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setAuthor("")
          setTitle("")
          setUrl("")
    })
  }
  
  const handleVote = id => {
    const blog = blogs.find(blog => blog.id === id)
    const changedBlog = {...blog, likes: blog.likes +1 }
    blogService
      .update(id,changedBlog)
      .then(returnedVote=> {
        setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedVote))
      })      
  }

  const handleDelete = id => {
    blogService
        .deleteBlog(id)
        .then( () => {
          setBlogs(blogs.filter(blog => blog.id !== id))
        })
  }
  return(
    <div>
      <AddBlog 
      addBlog={addBlog}
      handleAuthorChange={handleAuthorChange}
      handleTitleChange={handleTitleChange}
      handleUrlChange={handleUrlChange}
      author={author}
      title={title}
      url={url}
      />
      <BlogList
        handleDelete={handleDelete}
        handleVote={handleVote}
        blogs={blogs}
      />
    </div>
  )
}
export default App;