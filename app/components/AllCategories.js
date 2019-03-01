import React, { Component } from 'react'
import { categoryReducer } from '../reducers/categoryReducer'
import {Link} from 'react-router-dom'

export default class AllCategories extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    const categories = this.props.categories
    console.log(categories)
    return (
      categories.map((category) => {
        return (
          <div key={category.id}>
            <Link to={'/categories/${category.id'}>{category.Name}</Link>
          </div>
        )
      })
    )
  }
}
