import { base, getCharsSubstring, getNumbersArr, powerOf4 } from './util'

export const findRepeatedSequences = (dna: string, k: number): Set<string> => {
  const output = new Set<string>()
  const hashs = new Set<number>()

  const numbersArr = getNumbersArr(dna)

  // calc first substring hash
  let hash = 0

  for (let i = 0; i < k; i++) {
    hash += numbersArr[i] * powerOf4(k - i - 1)
  }

  hashs.add(hash)

  const indexLimit = dna.length - k

  // slide through rest of the string
  for (let i = 1; i < indexLimit; i++) {
    hash =
      (hash - numbersArr[i - 1] * Math.pow(base, k - 1)) * base +
      numbersArr[i + k - 1]

    if (hashs.has(hash)) {
      output.add(getCharsSubstring(numbersArr.slice(i, i + k)))
    } else {
      hashs.add(hash)
    }
  }

  return output
}
