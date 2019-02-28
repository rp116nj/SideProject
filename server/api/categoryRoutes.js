const router = require('express').Router()
const categories = require('../db/models/Categories')

//GET all categories ('/api/categories')

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await categories.findAll()
    res.json(allCategories)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
