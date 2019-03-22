// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import { categoryReducer } from './categoryReducer'
import { bookReducer } from './bookReducer'

const rootReducer = combineReducers({
  category: categoryReducer,
  book: bookReducer,
  })
// const initialState = {};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export default rootReducer;
