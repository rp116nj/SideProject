'use strict'

const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const app = express()

//logging middleware
app.use(volleyball)

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', requires('./api')) //includes all the routes we write

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})// all other requests get index.html page

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = app
