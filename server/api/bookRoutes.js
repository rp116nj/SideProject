const router = require('express').Router();
const books = require('../db/models/Books');
const categories = require('../db/models/Categories');
const Op = require('sequelize').Op

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
    //console.log('check this', req.params);
    const book = await books.findByPk(req.params.id, {
      include: [{
        model: categories,
        
      }]
    });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
