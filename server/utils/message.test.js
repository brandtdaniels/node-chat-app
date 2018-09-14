const expect = require('expect')

const {generateMessage} = require('./message')

describe('A message', () => {

  context('when being generated', () => {

    it('should generate correct message object', () => {

      const message = generateMessage('me', 'text')

      expect(message.from).toBe('me')

      expect(message.text).toBe('text')

      expect(typeof message.createdAt).toBe('number')

    })

  })

})
