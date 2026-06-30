type RegisterObject = {
  [index: string]: number
}

const getCharRegister = (str: string): RegisterObject => {
  const register: RegisterObject = {}

  for (let char of str) {
    const lowerCaseChar = char.toLowerCase()

    register[lowerCaseChar] = register[lowerCaseChar] ? register[lowerCaseChar] + 1 : 1
  }

  return register
}

const areAnagramRegisters = (register1: RegisterObject, register2: RegisterObject): boolean => {
  for (let char in register1) {
    if (char === ' ') {
      continue
    }

    if (!register2[char] || register1[char] !== register2[char]) {
      return false
    }
  }

  return true
}

const validAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false
  }

  return areAnagramRegisters(getCharRegister(str1), getCharRegister(str2))
}

const str1_1 = 'disco'
const str1_2 = 'sidco'

console.log(validAnagram(str1_1, str1_2))

const str2_1 = 'Disco'
const str2_2 = 'sidco'

console.log(validAnagram(str2_1, str2_2))

const str3_1 = 'a gentleman'
const str3_2 = 'elegant man'

console.log(validAnagram(str3_1, str3_2))
