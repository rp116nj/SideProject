const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('category', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjqia2Or9rgAhUSVd8KHZRvAbYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.usp.ac.fj%2Fstudyskills%2FCFDL%2Fmodule1%2FKnow-about-information%2FTypes-of-information%2FBook-Chapter.html&psig=AOvVaw0ljvADBUJQ5cx4gcEW2WPP&ust=1551303794386687',
  },
  Location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
