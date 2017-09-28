function checkPasswordLength (password) {
  return password.length >= 10
}

function checkPasswordForUppercase (password) {
  return /[A-Z]/.test(password)
}

function checkPasswordForLowercase (password) {
  return /[a-z]/.test(password)
}

function checkPasswordForDigit (password) {
  return /[0-9]/.test(password)
}

function checkPasswordForSpecialCharacter (password) {
  return /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password)
}

function checkPasswordForNoIdenticalCharacters (password) {
  let currentRepeat = 1
  let lastChar = password[0]
  for (var i = 1; i < password.length; i++) {
    console.log(password[i])
    console.log(password[i] === lastChar)
    if (password[i] === lastChar) {
      currentRepeat += 1
      if (currentRepeat === 3) {
        return false
      }
    } else {
      lastChar = password[i]
      currentRepeat = 1
    }
  }
  return true
}

function checkPasswordForSecurity (password) {
  return (
    checkPasswordLength(password) &&
    checkPasswordForUppercase(password) &&
    checkPasswordForLowercase(password) &&
    checkPasswordForDigit(password) &&
    checkPasswordForSpecialCharacter(password) &&
    checkPasswordForNoIdenticalCharacters(password)
  )
}

module.exports = {
  checkPasswordLength,
  checkPasswordForUppercase,
  checkPasswordForLowercase,
  checkPasswordForSecurity,
  checkPasswordForDigit,
  checkPasswordForSpecialCharacter,
  checkPasswordForNoIdenticalCharacters
}
