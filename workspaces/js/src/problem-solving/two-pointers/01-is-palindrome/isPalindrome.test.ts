import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
	it.each([
		{ input: 'kaYak', expected: true },
		{ input: 'hello', expected: false },
		{ input: 'RaCEACAR', expected: false },
		{ input: 'A', expected: true },
		{ input: 'ABCDABCD', expected: false },
		{ input: '', expected: true },
		{ input: 'RACEACAR', expected: false },
	])('returns $expected for $input', ({ input, expected }) => {
		expect(isPalindrome(input)).toBe(expected)
	})
})
