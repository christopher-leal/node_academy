const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`)
})
