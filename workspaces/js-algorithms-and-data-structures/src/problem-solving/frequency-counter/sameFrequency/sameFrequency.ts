export const sameFrequency = (n1: number, n2: number): boolean => {
  const n1Str = String(n1)
  const n2Str = String(n2)

  if (n1Str.length !== n2Str.length) {
    return false
  }

  const n1Counter: Record<string, number> = {}

  n1Str.split('').forEach((char) => {
    if (n1Counter[char]) {
      n1Counter[char]++
    } else {
      n1Counter[char] = 1
    }
  })

  const n2Chars = n2Str.split('')

  for (let i = 0; i < n2Chars.length; i++) {
    const char = n2Chars[i]

    if (!n1Counter[char]) {
      return false
    }

    n1Counter[char]--

    if (n1Counter[char] === 0) {
      delete n1Counter[char]
    }
  }

  const n1CounterKeys = Object.keys(n1Counter)

  if (n1CounterKeys.length === 0) {
    return true
  }

  return false
}
