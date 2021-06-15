import Router from 'express'
import PostController from './PostController.js'

const route = new Router()

route.post('/posts', PostController.create)
route.get('/posts', PostController.getAll)
route.get('/posts/:id', PostController.getOne)
route.put('/posts', PostController.update)
route.delete('/posts/:id', PostController.delete)

export default route