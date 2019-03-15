const router = require('express').Router();
const Books = require('../db/models/Books');
const Categories = require('../db/models/Categories');
const Op = require('sequelize').Op

//GET all Books ('/api/books')

router.get('/', async (req, res, next) => {
  try {
    const allBooks = await Books.findAll();
    res.json(allBooks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    //console.log('check this', req.params);
    const book = await Books.findByPk(req.params.id, {
      include: [{
        model: Categories,
        //do the eager loading
      }]
    });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
