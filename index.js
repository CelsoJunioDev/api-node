// config inicial
require('dotenv').config()
const express = require('express')
const app = express()
const personRoutes = require('./routes/personRoutes')

// depois do db
const mongoose = require('mongoose')



app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas
app.use('/person', personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.phhyv.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))