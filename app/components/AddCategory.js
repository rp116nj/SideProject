import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createNewCategory} from '../reducers/categoryReducer'

class CategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      description: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value})
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const category = this.state
    this.props.createNewCategory(category)
    this.setState({
      name: '',
      location: '',
      description: '',
    });
  }
  render() {
    return (
      <div>
        <h3>Add a Category</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Location: <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
          </label>
          <label>
            Description: <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = null
const mapDispatchToProps = { createNewCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
