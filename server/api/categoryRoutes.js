const router = require('express').Router()
const categories = require('../db/models/Categories')
const books = require('../db/models/Books');

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
    //console.log('id param', req.params.id)
    const category = await categories.findByPk(req.params.id)
    const allBooksInCategory = await books.findAll({
      where: {
        categoryId: req.params.id
      }
    })
    //console.log('allBooks', allBooksInCategory)
    res.json({ category, allBooksInCategory})
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
