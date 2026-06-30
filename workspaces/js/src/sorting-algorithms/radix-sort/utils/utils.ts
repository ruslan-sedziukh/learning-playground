export const getDigit = (num: number, position: number) =>
  Math.floor(Math.abs(num) / Math.pow(10, position)) % 10

export const getDigitsNumber = (num: number) => {
  if (num === 0) {
    return 1
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1
}

export const getMaxDigitsNumber = (arr: number[]) => {
  if (arr.length === 0) {
    return 0
  }

  let maxDigits = 0

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const digits = getDigitsNumber(num)

    if (digits > maxDigits) {
      maxDigits = digits
    }
  }

  return maxDigits
}
