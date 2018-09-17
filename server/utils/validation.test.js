const expect = require('expect')

const {isRealString} = require('./validation')

describe('A validation', () => {

  context('when testing a string', () => {

    it('should reject non-string values', () => {

      expect(isRealString(98)).toBe(false)

    })

    it('should reject strings with only spaces', () => {

      expect(isRealString('    ')).toBe(false)

    })

    it('should allow strings with non-space characters', () => {

      expect(isRealString('  asdf  ')).toBe(true)

    })

  })

})
