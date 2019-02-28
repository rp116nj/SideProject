const initialState = {
  books: []
};
// Action Type
const gotAllBooks = 'GET_ALL_BOOKS'

//Action Creator
export const getAllBooks = (books) => ({
  type: gotAllBooks,
  books
})
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case gotAllBooks:
      return {...state, books: action.books}
    default:
      return state;
  }
};
