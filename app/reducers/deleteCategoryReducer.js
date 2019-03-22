import axios from 'axios'
const initialdeletedCategory = {} 
  


export const deleteCategory = category => ({
  type: 'DELETE_CATEGORY',
  category
})

export const  deleteACategory = () => {
  return async dispatch => {
    try {
      const response = await axios.delete(`/api/${id}`)
      const category = response.data
      console.log('in thunk', deleteACategory)
      dispatch(deleteACategory(category))
    }
    catch (err) {
      throw err
    }
  }
}

 const deleteCategoryReducer = (state = initialdeletedCategory, action) => {
  switch (action.type) {
    case 'DELETE_CATEGORY':
      return action.category
    default:
      return state
  }
}
export default deleteCategoryReducer
