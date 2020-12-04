const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('there are two blogs on the list', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(2)
    console.log(response.body)
  })
  
  test('the first blog author is Timo Pekkanen', async () => {
    const response = await api.get('/api/blogs')
  
    expect(response.body[0].author).toBe('Timo Pekkanen')
  })
afterAll(() => {
  mongoose.connection.close()
})