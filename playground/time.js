const moment = require('moment')

// var date = new Date()
//
// var months = ['Jan', 'Feb']
//
// console.log(date.getMonth())

// var date = moment()
// date.add(100, 'year').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'))

var someTimestamp = moment().valueOf()
console.log(someTimestamp)

var createdAt = 1234
var date = moment(createdAt)
var time = date.format('h:mm a')
console.log(time)
