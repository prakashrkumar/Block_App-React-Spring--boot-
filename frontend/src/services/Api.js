import axios from 'axios';
const API = '/api/posts'

export const getPosts = () => axios.get(API)

export const getPost = (id) => axios.get(`${API}/${id}`)

export const createPost = (data) => axios.post(API, data)

export const deletePost = (id) => axios.delete(`${API}/${id}`)
export const update = (id, data) => axios.put(`${API}/${id}`, data)