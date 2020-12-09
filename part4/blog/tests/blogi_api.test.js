const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')

const api = supertest(app)
const Blog = require('../models/blog')


/*
beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(helper.initialBlogs[1])
  await blogObject.save()
})
test('a valid note can be added ', async () => {
    const newBlog = {
        author:"Aleksi Mäkelä",
        title:"Lastenhautausmaa",
        url:"hello world",
        likes:0
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
    
      const authors = blogsAtEnd.map(n => n.author)
    expect(authors).toContain(
      'Aleksi Mäkelä'
    )
  })

test('Blogs are returned as json', async () => {
 const response = await api.get('/api/blogs')
 expect(response.body).toHaveLength(helper.initialBlogs.length)
})
test('blog without content is not added', async () => {
    const newBlog = {
      author: "simo"
    }
  
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  
    const response = await api.get('/api/blogs')
  
    expect(response.body).toHaveLength(initialBlogs.length)
  })
test('there are three blogs', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(2)
  })
test('the first note is about HTTP methods', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].author).toBe('Timo Pekkarinen')
  })
test('a specific note is within the returned notes', async () => {
    const response = await api.get('/api/blogs')
    const contents = response.body.map(r => r.author)
    expect(contents).toContain(
      'Timo Pekkarinen'
    )
  })
  */

afterAll(() => {
  mongoose.connection.close()
})