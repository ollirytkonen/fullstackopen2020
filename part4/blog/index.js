require('dotenv').config()

const express = require('express')
const app = express()
const Blog = require('./models/blog')
app.use(express.static('build'))
app.use(express.json())



app.get('/api/blogs', (request, response) => {
    Blog.find({}).then(blogs => {
      response.json(blogs)
    })
  })

app.get('/api/blogs/:id', (request, response) => {
    Blog.findById(request.params.id).then(blog => {
      response.json(blog)
    })
})
app.post('/api/blogs', (request, response) => {
  const body = request.body
  const blog = new Blog({
    author: body.author,
    title: body.title,
    url: body.url,
    likes: body.likes,
  })

  blog.save().then(savedNote => {
    response.json(savedNote)
  })
})
app.delete('/api/blogs/:id', (request, response) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    
})
app.put('/api/blogs/:id', (request, response) => {
  const body = request.body

  const blog = {
    author: body.author,
    title: body.title,
    url: body.url,
    likes: body.likes,
  }

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })