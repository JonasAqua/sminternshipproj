let assert = require('assert')
let password = require('../src/password.js')

describe('password.js', function () {
  describe('#checkPasswordLength ()', function () {
    it('should return false if the password is less than 10 characters [123456789]', function () {
      assert.equal(false, password.checkPasswordLength('123456789'))
    })

    it('should return true if the password has a length of 10 characters [1234567890]', function () {
      assert.equal(true, password.checkPasswordLength('1234567890'))
    })

    it('should return true if the password is more than 10 characters [12345678911]', function () {
      assert.equal(true, password.checkPasswordLength('12345678911'))
    })
  })

  describe('#checkPasswordForUppercase ()', function () {
    it('should return false if the password has no uppercase [abc]', function () {
      assert.equal(false, password.checkPasswordForUppercase('abc'))
    })

    it('should return true if the password has at least one uppercase character [aBc]', function () {
      assert.equal(true, password.checkPasswordForUppercase('aBc'))
    })
  })

  describe('#checkPasswordForLowercase ()', function () {
    it('should return false if the password has no lowercase [abc]', function () {
      assert.equal(false, password.checkPasswordForLowercase('ABC'))
    })

    it('should return true if the password has at least one lowercase character [aBc]', function () {
      assert.equal(true, password.checkPasswordForLowercase('aBc'))
    })
  })

  describe('#checkPasswordForDigit ()', function () {
    it('should return false if the password has no digit [abc]', function () {
      assert.equal(false, password.checkPasswordForDigit('ABC'))
    })

    it('should return true if the password has at least one digit [aB0]', function () {
      assert.equal(true, password.checkPasswordForDigit('aB0'))
    })
  })

  describe('#checkPasswordForSpecialCharacter ()', function () {
    it('should return false if there are no special characters', function () {
      assert.equal(false, password.checkPasswordForSpecialCharacter('abc'))
    })

    it('should return true if there is space', function () {
      assert.equal(true, password.checkPasswordForSpecialCharacter('a c'))
    })

    it('should return true if there is ^', function () {
      assert.equal(true, password.checkPasswordForSpecialCharacter('a^c'))
    })

    it('should return true if there is |', function () {
      assert.equal(true, password.checkPasswordForSpecialCharacter('a|c'))
    })
  })

  describe('#checkPasswordForNoIdenticalCharacters ()', function () {
    it('should return false if there are three repeating characters [abbbc]', function () {
      assert.equal(false, password.checkPasswordForNoIdenticalCharacters('abbbc'))
    })

    it('should return false if there are three repeating numbers [a333v]', function () {
      assert.equal(false, password.checkPasswordForNoIdenticalCharacters('a333v'))
    })

    it('should return false if there are three repeating special characters [a!!!g]', function () {
      assert.equal(false, password.checkPasswordForNoIdenticalCharacters('a!!!g'))
    })

    it('should return true if there are no repeating characters [abcd]', function () {
      assert.equal(true, password.checkPasswordForNoIdenticalCharacters('abcd'))
    })

    it('should return true if there is a two characters [abbcd]', function () {
      assert.equal(true, password.checkPasswordForNoIdenticalCharacters('abbcd'))
    })

    it('should return true if there are three characters but not repeating [abbcb]', function () {
      assert.equal(true, password.checkPasswordForNoIdenticalCharacters('abbcb'))
    })
  })

  describe('#checkPasswordForSecurity ()', function () {
    it('should return false if the password is 123456', function () {
      assert.equal(false, password.checkPasswordForSecurity('123456'))
    })

    it('should return false if the password is less than 10 characters [123456789]', function () {
      assert.equal(false, password.checkPasswordForSecurity('123456789'))
    })

    it('should return false if the password has 0 uppercase characters [abcdefghijklmnop]', function () {
      assert.equal(false, password.checkPasswordForSecurity('abcdefghijklmnop'))
    })

    it('should return false if the password has 0 lowercase characters [ABCDEFGHIJKLMNOP]', function () {
      assert.equal(false, password.checkPasswordForSecurity('abcdefghijklmnop'))
    })

    it('should return false if the password has 0 digits [aBcDeFgHiJkLmNoP]', function () {
      assert.equal(false, password.checkPasswordForSecurity('aBcDeFgHiJkLmNoP'))
    })

    it('should return false if the password has 0 special characters [aB1dE2gH3jK4mN5p]', function () {
      assert.equal(false, password.checkPasswordForSecurity('aB1dE2gH3jK4mN5p'))
    })

    it('should return false if there are more than 2 identical characters in a row [!aB1d@E2gggH3jK4]', function () {
      assert.equal(false, password.checkPasswordForSecurity(''))
    })

    it('should return true if there are more than 10 characters, at least 1 uppercase character, at least 1 lowercase character, at least 1 digit, at least 1 special character and no more than 2 identical characters in a row [!aB1d@E2ggH3jK4g]', function () {
      assert.equal(true, password.checkPasswordForSecurity('!aB1d@E2ggH3jK4g'))
    })
  })
})
