const { db } = require('./server/db')
const { green, red } = require('chalk')

const Category = require('./server/db/models/Categories')
const Book = require('./server/db/models/Books')

const categories = [
  {
  Name: 'Fiction',
  Location: 'Aisle 1',
  Description: 'Fiction is a literary genre in which the plot takes place in an imaginary setting .It can also be applied to other types of narrative, including theatre, opera, cinema and television, as well as video games and graphic novels.'
  },
  {
    Name: 'Drama',
    Location: 'Aisle 2',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates necessitatibus voluptatibus fugit incidunt ratione ullam natus quam temporibus beatae, distinctio perferendis, tenetur facere officia minus eaque excepturi aliquid, neque nam!'
  },
  {
    Name: 'Thriller',
    Location: 'Aisle 3',
    Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione fuga iusto optio, maxime odio praesentium architecto illum molestias, vitae sunt officia ad excepturi placeat inventore facere culpa? Distinctio, excepturi.'
  }
]
const books = [
  {
    Name: 'Abc',
    AuthorName: 'xyz',
    AuthorEmail: 'xyz@mail.com',
    Edition: 1,
    categoryId: 1
  },
  {
    Name: 'Cbe',
    AuthorName: 'lmn',
    AuthorEmail: 'lmn@mail.com',
    Edition: 3,
    categoryId: 2
  },
  {
    Name: 'BLR',
    AuthorName: 'ap',
    AuthorEmail: 'ap@mail.com',
    Edition: 1,
    categoryId: 3
  },
  {
    Name: 'Hyd',
    AuthorName: 'kar',
    AuthorEmail: 'kar@mail.com',
    Edition: 1,
    categoryId: 1
  }, {
    Name: 'Chec',
    AuthorName: 'Tmn',
    AuthorEmail: 'tmn@mail.com',
    Edition: 2,
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
