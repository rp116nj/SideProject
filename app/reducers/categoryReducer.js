import axios from 'axios'
const initialState = {
  categories: [],
  selectedCategory: {},
}
// Action Type
//const gotAllCategories = 'GET_ALL_CATEGORIES'

//Action Creator
export const getAllCategories = categories => ({
  type: 'GET_ALL_CATEGORIES',
  categories
})
export const getSingleCategory = category => ({
  type: 'GET_SINGLE_CATEGORY',
  category
})
export const createCategories = category => ({
  type: 'CREATE_CATEGORY',
  category
})
export const deleteCategory = id => ({
  type: 'DELETE_CATEGORY',
  id,
});
//Thunks
export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/categories')
      const categories = response.data
      console.log('in thunk', categories)
      dispatch(getAllCategories(categories))
    } catch (err) {
      throw err
    }
  }
}

export const getCategory = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/categories/${id}`)
      const category = response.data
      console.log('in single thunk', getCategory)
      dispatch(getSingleCategory(category))
    } catch (err) {
      throw err
    }
  }
}

export const createNewCategory = category => {
  return async dispatch => {
    try {
      const response = await axios.post(`/api/categories`, category)
      console.log(response)
      dispatch(createCategories(category))
    } catch (err) {
      throw err;
    }
  }

}

export const deleteACategory = (id) => {
  return async dispatch => {
    try {
      const response = await axios.delete(`/api/categories/${id}`)
      const data = response.data
      console.log('data', data)
      console.log('in thunk', deleteACategory)
      dispatch(deleteCategory(id))
    }
    catch (err) {
      throw err
    }
  }
}
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      console.log('in reducer', action.categories);
      return { ...state, categories: action.categories };
    case 'GET_SINGLE_CATEGORY':
      return { ...state, selectedCategory: action.category };
    case 'CREATE_CATEGORY':
      return {...state, categories: [...state.categories, action.category]}
    case 'DELETE_CATEGORY':
      return {...state, categories: state.categories.filter(category => category.id !== action.id) }
    default:
      return state;
  }
};
