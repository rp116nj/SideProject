import axios from 'axios'
const initialState = {
  books: [],
  selectedBook: {}
}
// Action Type
//const gotAllBooks = 'GET_ALL_BOOKS'

//Action Creator
export const getAllBooks = (books) => ({
  type: 'GET_ALL_BOOKS',
  books
})
export const getSingleBook = book => ({
  type: 'GET_SINGLE_BOOK',
  book
})
//Thunks
export const getBooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/books')
      const books = response.data
      console.log('in thunk', books)
      dispatch(getAllBooks(books))
    }
    catch (err) {
      throw (err)
    }
  }
}

export const getBook = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/books/${id}`);
      const book = response.data;
      dispatch(getSingleBook(book));
    }
    catch (err) {
      throw err;
    }
  }
}
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BOOKS':
      return { ...state, books: action.books }
    case 'GET_SINGLE_BOOK':
     return {...state, selectedBook: action.book}
    default:
      return state;
  }
};
