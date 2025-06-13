import { reverseWords } from './reverseWords'

describe('reverseWords', () => {
  it.each([
    ['We love  Go ', 'Go love We'],
    // [' We love Go ', 'Go love We'],
    // ['1234 abc XYZ', 'XYZ abc 1234'],
    // ['You are amazing', 'amazing are You'],
    // ['Hello     World', 'World Hello'],
    // ['Greeting123', 'Greeting123'],
  ])('reverses words in the sentence', (input, expected) => {
    const result = reverseWords(input)
    expect(result).toBe(expected)
  })
})

/*

- Only one space should separate words
- No space should be at the beginning and the end of reversed string

Simplified idea:
- Start from the end
- Go backward util space or string first character will be reached and add all character to the right before another space or string end

Tricky cases:
- If space was reached and before it are spaces
- If string start was reached and 

*/
