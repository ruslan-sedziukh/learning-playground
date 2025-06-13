import {
  binarySearch,
  buildData,
  findIndexMaxDifference,
  findMissingNumber,
  mergeSorted,
  rotateKLeft,
  sequentialSearch,
  sumAll,
  sumEven,
  waveArray,
} from './01-simple'

describe('sumAll', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns 0',
      input: [],
      expected: 0,
    },
    {
      desc: 'when array contains multiple values',
      message: 'returns the sum of all values',
      input: [1, 2, 3],
      expected: 6,
    },
  ])('$desc', ({ input, expected, message }) => {
    test(`${message}`, () => {
      expect(sumAll(input)).toBe(expected)
    })
  })
})

describe('sumEven', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns 0',
      input: [],
      expected: 0,
    },
    {
      desc: 'when array contains multiple values',
      message: 'returns the sum of all even values',
      input: [1, 2, 3, 4],
      expected: 6,
    },
  ])('$desc', ({ input, expected }) => {
    test('$message', () => {
      expect(sumEven(input)).toBe(expected)
    })
  })
})

describe('sequentialSearch', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns false',
      input: [],
      target: 1,
      expected: false,
    },
    {
      desc: 'when target is not found',
      message: 'returns false',
      input: [1, 2, 3],
      target: 4,
      expected: false,
    },
    {
      desc: 'when target is found',
      message: 'returns true',
      input: [1, 2, 3],
      target: 2,
      expected: true,
    },
  ])('$desc', ({ input, target, expected }) => {
    test('$message', () => {
      expect(sequentialSearch(input, target)).toBe(expected)
    })
  })
})

describe('binarySearch', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns false',
      input: [],
      target: 1,
      expected: false,
    },
    {
      desc: 'when target is not found',
      message: 'returns false',
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      target: 10,
      expected: false,
    },
    {
      desc: 'when target is found',
      message: 'returns true',
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      target: 2,
      expected: true,
    },
  ])('$desc', ({ input, target, expected, message }) => {
    test(`${message}`, () => {
      expect(binarySearch(input, target)).toBe(expected)
    })
  })
})

describe('rotateKLeft', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns an empty array',
      input: [],
      k: 1,
      expected: [],
    },
    {
      desc: 'when k is greater than the length of the array',
      message: 'returns a rotated array',
      input: [1, 2, 3, 4, 5],
      k: 6,
      expected: [2, 3, 4, 5, 1],
    },
    {
      desc: 'when k is less than the length of the array',
      message: 'returns a rotated array',
      input: [1, 2, 3, 4, 5],
      k: 2,
      expected: [3, 4, 5, 1, 2],
    },
    {
      desc: 'when k is equal to the length of the array',
      message: 'returns the elements in the same order',
      input: [1, 2, 3, 4, 5],
      k: 5,
      expected: [1, 2, 3, 4, 5],
    },
  ])('$desc', ({ input, k, expected, message }) => {
    test(`${message}`, () => {
      expect(rotateKLeft(input, k)).toEqual(expected)
    })
  })
})

describe('waveArray', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns an empty array',
      input: [],
      expected: [],
    },
    {
      desc: 'when array contains multiple values',
      message: 'returns a wave array',
      input: [8, 1, 2, 3, 4, 5, 6, 4, 2],
      expected: [8, 1, 3, 2, 5, 4, 6, 2, 4],
    },
    {
      desc: 'when array contains multiple values',
      message: 'returns a wave array',
      input: [8, 1, 2, 3, 4, 5, 6, 4, 2, 5],
      expected: [8, 1, 3, 2, 5, 4, 6, 2, 5, 4],
    },
  ])('$desc', ({ input, expected, message }) => {
    test(`${message}`, () => {
      expect(waveArray(input)).toEqual(expected)
    })
  })
})

describe('findIndexMaxDifference', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns -1',
      input: [],
      expected: -1,
    },
    {
      desc: 'when array contains multiple values',
      message:
        'returns the maximum difference between the indices of two elements',
      input: [8, 1, 2, 3, 4, 5, 6, 4, 2],
      expected: 7,
    },
  ])('$desc', ({ input, expected, message }) => {
    test(`${message}`, () => {
      expect(findIndexMaxDifference(input)).toBe(expected)
    })
  })
})

describe('mergeSorted', () => {
  describe.each([
    {
      desc: 'when arrays are empty',
      message: 'returns an empty array',
      input: [[], []],
      expected: [],
    },
    {
      desc: 'when arrays contain values',
      message: 'returns a merged sorted array',
      input: [
        [1, 3, 5],
        [2, 4, 6, 7],
      ],
      expected: [1, 2, 3, 4, 5, 6, 7],
    },
  ])('$desc', ({ input, expected }) => {
    test('$message', () => {
      expect(mergeSorted(input[0], input[1])).toEqual(expected)
    })
  })
})

describe('findMissingNumber', () => {
  describe.each([
    {
      desc: 'when array is empty',
      message: 'returns -1',
      input: [],
      expected: -1,
    },
    {
      desc: 'when array contains values',
      message: 'returns the missing number',
      input: [1, 2, 3, 5, 6, 7, 8],
      expected: 4,
    },
    {
      desc: 'when array has no missing values',
      message: 'returns the missing number',
      input: [1, 2, 3, 4, 5, 6, 7, 8],
      expected: -1,
    },
  ])('$desc', ({ input, expected, message }) => {
    test(`${message}`, () => {
      expect(findMissingNumber(input)).toBe(expected)
    })
  })
})

describe('buildData', () => {
  describe.each([
    {
      desc: 'when arrays are empty',
      message: 'returns an empty object',
      names: [],
      values: [],
      expected: {},
    },
    {
      desc: 'when arrays contain values',
      message: 'returns an object with the names and values',
      names: ['a', 'b', 'c'],
      values: [1, 2, 3],
      expected: { a: 1, b: 2, c: 3 },
    },
  ])('$desc', ({ names, values, expected, message }) => {
    test(`${message}`, () => {
      expect(buildData(names, values)).toEqual(expected)
    })
  })
})
