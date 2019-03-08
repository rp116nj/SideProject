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

router.get('/:id', async (req, res, next) => {
  try {
    const category = await categories.findByPk(req.params.id)
    res.json(category)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
