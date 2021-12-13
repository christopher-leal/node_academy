require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose')

/*
  REST API:
  1. Usar los verbos de HTTP adecuadamente
  2. La transmisión de datos sea JSON/XML
  3. Usar los códigos de respuesta de HTTP adecuadamente
  4. Usar pronombres (en plural) en lugar de verbos
  getMovies -> movies (GET)
  addMovie -> movies (POST)
  5. Expresar las relaciones de las entidades en la URL
  /movies/:id/actors
  6. Las peticiones contengan todo lo necesario para ser ejecutados (es decir, que no haya un estado)
*/

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) return console.log(error)
  console.log('Database connected')
})

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Server online'
  })
})

app.use('/users', require('./src/routes/users'))

app.listen(PORT, () => console.log(`Server listening port ${PORT}`))
