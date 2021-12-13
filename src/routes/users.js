const Router = require('express').Router
const UsersController = require('./../controllers/users')
const validationMiddleware = require('../middleware/validationMiddleware')
const router = Router()

router.get('/', UsersController.getUsers)
router.post('/', [validationMiddleware], UsersController.addUser)
router.patch('/', [validationMiddleware], UsersController.patchUser)
router.delete('/', [validationMiddleware], UsersController.deleteUser)

module.exports = router
