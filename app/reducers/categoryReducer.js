const initialState = {
  categories: []
};
// Action Type
const gotAllCategories = 'GET_ALL_CATEGORIES'
 
//Action Creator
export const getAllCategories = (categories) => ({
  type: getAllCategories,
  categories
})
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case gotAllCategories:
      return {...state, categories: action.categories}
    default:
      return state;
  }
};
