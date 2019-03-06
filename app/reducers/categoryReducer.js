import axios from 'axios'

const initialCategories = []
  
// Action Type
//const gotAllCategories = 'GET_ALL_CATEGORIES'

//Action Creator
export const getAllCategories = (categories) => ({
  type: 'GET_ALL_CATEGORIES',
  categories
})

//Thunks
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/categories')
      const categories = response.data
      console.log('in thunk', categories)
      dispatch(getAllCategories(categories))
    }
    catch (err) {
      throw (err)
    }
  }
}

export const categoryReducer = (state = initialCategories, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      console.log('in reducer', action.categories)
      return {...state, categories: action.categories}
    default:
      return state;
  }
};
