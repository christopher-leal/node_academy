const User = require('./../models/user')
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.json({
      success: true,
      data: users
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

const addUser = async (req, res) => {
  console.log(req.body)
  res.json({ success: true })
}

const patchUser = async (req, res) => {
  console.log(req.body)
  res.json({ success: true })
}

const deleteUser = async (req, res) => {
  console.log(req.body)
  res.json({ success: true })
}

module.exports = {
  getUsers,
  addUser,
  patchUser,
  deleteUser
}
