/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/blogs'
const baseUrl2 = 'http://localhost:3001/api/blogs/'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = blog => {
    const request = axios.post(baseUrl, blog)
    return request.then(response => response.data)
}

const update = (changedBlog, id) => {
  const request = axios.put(baseUrl2+id, changedBlog)
  return request.then(response => response.data)
}

export default {getAll, create, update}