const router = require('express').Router()
const books = require('../db/models/Books')

//GET all Books ('/api/books')

router.get('/', async (req, res, next) => {
  try {
    const allBooks = await books.findAll()
    res.json(allBooks)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
