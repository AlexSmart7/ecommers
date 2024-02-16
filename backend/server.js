const express = require('express')
const connectDB =require ('./config/db')
const colors = require ('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errormiddleware')
const port = process.env.PORT || 5000

connectDB ()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use ('/api/productos', require ('./routes/productosRoutes'))

app.use (errorHandler)


app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))
