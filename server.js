const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())
app.use(express.json())
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server online'
  })
})

app.listen(PORT, () => console.log(`Server listening port ${PORT}`))
