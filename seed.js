const { db } = require('./server/db')
const { green, red } = require('chalk')

const Category = require('./server/db/models/Categories')

const categories = [{
  Name: 'Fiction',
  imageUrl: '',
  Location: 'Aisle 1',
  Description: 'Fiction is a literary genre in which the plot takes place in an imaginary setting .It can also be applied to other types of narrative, including theatre, opera, cinema and television, as well as video games and graphic novels.'

}]

const seed = 