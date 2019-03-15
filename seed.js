const { db } = require('./server/db')
const { green, red } = require('chalk')

const Category = require('./server/db/models/Categories')
const Book = require('./server/db/models/Books')

const categories = [
  {
  name: 'Fiction',
  location: 'Aisle 1',
  description: 'Fiction is a literary genre in which the plot takes place in an imaginary setting .It can also be applied to other types of narrative, including theatre, opera, cinema and television, as well as video games and graphic novels.'
  },
  {
    name: 'Drama',
    location: 'Aisle 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates necessitatibus voluptatibus fugit incidunt ratione ullam natus quam temporibus beatae, distinctio perferendis, tenetur facere officia minus eaque excepturi aliquid, neque nam!'
  },
  {
    name: 'Thriller',
    location: 'Aisle 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione fuga iusto optio, maxime odio praesentium architecto illum molestias, vitae sunt officia ad excepturi placeat inventore facere culpa? Distinctio, excepturi.'
  }
]
const books = [
  {
    name: 'Abc',
    authorName: 'xyz',
    authorEmail: 'xyz@mail.com',
    edition: 1,
    categoryId: 1
  },
  {
    name: 'Cbe',
    authorName: 'lmn',
    authorEmail: 'lmn@mail.com',
    edition: 3,
    categoryId: 2
  },
  {
    name: 'BLR',
    authorName: 'ap',
    authorEmail: 'ap@mail.com',
    edition: 1,
    categoryId: 3
  },
  {
    name: 'Hyd',
    authorName: 'kar',
    authorEmail: 'kar@mail.com',
    edition: 1,
    categoryId: 1
  }, {
    name: 'Chec',
    authorName: 'Tmn',
    authorEmail: 'tmn@mail.com',
    edition: 2,
    categoryId: 3
  }
]
const seed = async () => {
  try {
    await db.sync({ force: true })
    await Promise.all(categories.map(category => {
      return Category.create(category)
    }))
    await Promise.all(books.map(book => {
      return Book.create(book)
    }))
    console.log(green('Seeding success!'))
    db.close()
  }
  catch (err) {
    console.error(red('Oh no! Something went wrong!'))
    console.error(err)
    db.close()
  }
}
seed()
