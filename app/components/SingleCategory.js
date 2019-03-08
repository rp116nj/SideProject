import  { Component } from 'react'
import { connect } from 'react-redux'
import {getCategory} from '../reducers/categoryReducer'

 export class SingleCategory extends Component {
  componentDidMount() {
    this.props.getCategory()
  }
  render() {
    console.log('props', this.props)
    return ('Hello')
  }
}
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    category: state.category.selectedCategory
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps.match.params)
  const categoryId = Number(ownProps.match.params.id)
  console.log('categoryId', categoryId)
  return {
    getCategory: () => dispatch(getCategory(categoryId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory)
