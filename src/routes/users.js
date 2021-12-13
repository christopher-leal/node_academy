const Router = require('express').Router
const UsersController = require('./../controllers/users')
const validationMiddleware = require('../middleware/validationMiddleware')
const router = Router()
const { body } = require('express-validator')

router.get('/', UsersController.getUsers)

router.post('/', [
  body('name').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email have to have email@email.com format'),
  body('password').notEmpty().withMessage('Password is required'),
  body('phone').notEmpty().withMessage('Phone is required').isLength({ min: 10, max: 10 }).withMessage('Phone length must be 10'),
  body('birthday').notEmpty().withMessage('Birthday is required').isDate().withMessage('Birthday must be a date'),
  validationMiddleware
], UsersController.addUser)

router.put('/:id', [
  body('email').exists().optional().isEmail().withMessage('Email have to have email@email.com format'),
  body('phone').exists().optional().isLength({ min: 10, max: 10 }).withMessage('Phone length must be 10'),
  body('birthday').exists().optional().isDate().withMessage('Birthday must be a date'),
  validationMiddleware
], UsersController.patchUser)

router.delete('/:id', UsersController.deleteUser)

module.exports = router
