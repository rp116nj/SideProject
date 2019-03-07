const router = require('express').Router();
const books = require('../db/models/Books');

//GET all Books ('/api/books')

router.get('/', async (req, res, next) => {
  try {
    const allBooks = await books.findAll();
    res.json(allBooks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const book = await books.findByPk(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
