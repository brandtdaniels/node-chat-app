const expect = require('expect')

const {generateMessage, generateLocationMessage} = require('./message')

describe('A message', () => {

  context('when being generated', () => {

    it('should generate correct message object', () => {

      const message = generateMessage('me', 'text')

      expect(message.from).toBe('me')

      expect(message.text).toBe('text')

      expect(typeof message.createdAt).toBe('number')

    })

  })

  context('when generating a location message', () => {

    it('should generate correct location object', () => {

      const locationMessage = generateLocationMessage('me', 33, -117)

      expect(locationMessage.from).toBe('me')

      expect(locationMessage.url).toBe('https://www.google.com/maps?q=33,-117')

      expect(typeof locationMessage.createdAt).toBe('number')

    })

  })

})
