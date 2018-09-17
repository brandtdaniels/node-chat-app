const expect = require('expect')

const {Users} = require('./users')

describe('A Users', () => {

  var users

  beforeEach(() => {

    users = new Users()
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: 2,
      name: 'Jack',
      room: 'React Course'
    }, {
      id: 3,
      name: 'Julie',
      room: 'Node Course'
    }]

  })

  it('should add new user', () => {

    var users = new Users()

    var user = {
      id: 123,
      name: 'Brandt',
      room: 'Tribe'
    }

    var resUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user])

  })

  it('should remove a user', () => {

    var user = users.removeUser(1)

    expect(user.id).toBe(1)

    expect(users.users.length).toBe(2)

  })

  it('should get a user', () => {

    var user = users.getUser(2)

    expect(user.id).toBe(2)

  })

  it('should return names of users', () => {

    var userList = users.getUserList('Node Course')

    expect(userList).toEqual(['Mike', 'Julie'])

  })

})
