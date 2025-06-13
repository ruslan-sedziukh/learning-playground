import { powerOf4 } from './util'
import { findRepeatedSequences } from '.'

describe('findRepeatedSequences', () => {
  it.each([
    {
      dna: 'AAAAACCCCCAAAAACCCCCC',
      k: 8,
      expected: ['AAAAACCC', 'AAAACCCC', 'AAACCCCC'],
    },
    {
      dna: 'GGGGGGGGGGGGGGGGGGGGGGGGG',
      k: 9,
      expected: ['GGGGGGGGG'],
    },
    {
      dna: 'TTTTTCCCCCCCTTTTTTCCCCCCCTTTTTTT',
      k: 10,
      expected: [
        'TTTTTCCCCC',
        'TTTCCCCCCC',
        'TTCCCCCCCT',
        'TCCCCCCCTT',
        'CCCCCCCTTT',
        'CCCCCTTTTT',
        'CCCCTTTTTT',
        'TTTTCCCCCC',
        'CCCCCCTTTT',
      ],
    },
    {
      dna: 'AAAAAACCCCCCCAAAAAAAACCCCCCCTG',
      k: 10,
      expected: ['AAAAAACCCC', 'AAAAACCCCC', 'AAAACCCCCC', 'AAACCCCCCC'],
    },
    {
      dna: 'AGC',
      k: 4,
      expected: [],
    },
  ])('computes correct results for $dna', ({ dna, k, expected }) => {
    const result = findRepeatedSequences(dna, k)

    expect(Array.from(result).sort()).toEqual(expected.sort())
  })
})
