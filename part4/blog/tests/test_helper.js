const User = require('../models/user')
const Blog = require('../models/blog')

const initialBlogs = [
    {
        author:"Timo Pekkarinen",
        title:"Juoksuhaudantie",
        url:"www.com",
        likes:0
    },
    {
        author:"Aleksi Mäkelä",
        title:"Lastenhautausmaa",
        url:"hello world",
        likes:0
    }
  ]
  
  const nonExistingId = async () => {
    const blog = new Blog({ author: 'willremovethissoon', title: "new Date()", url: "asd", likes: 0 })
    await blog.save()
    await blog.remove()
  
    return blog._id.toString()
  }
  
  const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
  }
  const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }
  
  module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb,
    usersInDb,
  }