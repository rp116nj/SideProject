const router = require('express').Router()
const Categories = require('../db/models/Categories')
const Books = require('../db/models/Books');

//GET all categories ('/api/categories')

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Categories.findAll()
    res.json(allCategories)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    //console.log('id param', req.params.id)
    const category = await Categories.findByPk(req.params.id)
    const allBooksInCategory = await Books.findAll({
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

router.post('/', async (req, res, next) => {
  try {
    console.log('request body', req.body)
    //const [categoryInstance, wasCreated] = await categories.findOrCreate(req.body)
    const newCategory = await Categories.create(req.body)
    //res.json(categoryInstance)
    res.json(newCategory)
  } catch (error) {
    next(error);
  }
})
module.exports = router
