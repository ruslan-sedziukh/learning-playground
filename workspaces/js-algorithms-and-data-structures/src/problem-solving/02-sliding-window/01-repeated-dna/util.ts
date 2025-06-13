// Valid DNA characters
export type DNA = 'A' | 'C' | 'G' | 'T'

// Mapping of DNA characters to numbers
export const mapping: Record<DNA, number> = {
  A: 1,
  C: 2,
  G: 3,
  T: 4,
}

// base value to multiply coefficients
export const base = 4

// memoize coefficients
export const powerOf4 = (exponent: number): number => 1 << (exponent * 2)

export const isDNA = (char: string): char is DNA => {
  if ('ACGT'.includes(char)) {
    return true
  }

  return false
}

export const getCharsSubstring = (arr: number[]) => {
  // here the space at the beginning is required because values start from 1
  const mapping = ' ACGT'

  return arr.reduce((acc, val) => (acc += mapping[val]), '')
}

export const getNumbersArr = (dna: string) =>
  Array.from(dna).map((char) => {
    if (!isDNA(char)) {
      throw new Error('dna contains wrong characters')
    }

    return mapping[char]
  })
