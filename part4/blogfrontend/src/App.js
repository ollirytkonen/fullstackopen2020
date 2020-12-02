import React, {useState, useEffect} from 'react'
import Addblog from './components/Addblog'
import Blogs from './components/Blogs'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [blogUrl, setBlogUrl] = useState("")
  const [likes, setLikes] = useState(0)


  useEffect(() => {
    blogService
          .getAll()
          .then(initialBlogs => {
          setBlogs(initialBlogs)
      })
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blog = {
      id: blogs.length + 1,
      author: author,
      title: title,
      blogUrl: blogUrl,
      likes: likes,
    }
    blogService
        .create(blog)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setAuthor("")
          setTitle("")
          setBlogUrl("")
        })
  }
  const handleAuthor = (event) => {
    setAuthor(event.target.value)
  }
  const handleTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleUrl= (event) => {
    setBlogUrl(event.target.value)
  }
  const handleLikes = (id) => {
    const blog = blogs.find(n => n.id === id)
    const changedBlog = { ...blog, likes: likes + 1}

    blogService
            .update(changedBlog, id)
            .then(returnedBlog => {
              setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
            })
  }
  return(
    <div>
      <Addblog 
      addBlog={addBlog}
      author={author} 
      handleAuthor={handleAuthor}
      title={title}
      handleTitle={handleTitle}
      blogUrl={blogUrl}
      handleUrl={handleUrl}
      />
      <Blogs blogs={blogs}
      handleLikes={handleLikes}
      setLikes={setLikes}
      likes={likes}
      />
    </div>
  )
}

export default App;
