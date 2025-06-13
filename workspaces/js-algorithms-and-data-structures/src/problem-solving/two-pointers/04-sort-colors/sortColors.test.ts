import { sortColors } from './sortColors'

describe('sortColors', () => {
  it.each([
    [
      [0, 1, 0],
      [0, 0, 1],
    ],
    [[1], [1]],
    [
      [2, 2],
      [2, 2],
    ],
    [
      [1, 1, 0, 2],
      [0, 1, 1, 2],
    ],
    [
      [2, 1, 1, 0],
      [0, 1, 1, 2],
    ],
    [
      [2, 0, 1, 0, 2, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 2, 2],
    ],
  ])('sort colors correctly', (input, expected) => {
    const result = sortColors([...input])
    expect(result).toEqual(expected)
  })
})

/*

[2, 0, 1, 2, 0, 1]

- Numbers are unordered
- Result should be ordered
- Two pointers should be used

- Two pointers can be used to swap numbers
- If use three pointer one can point to last 0, one to last 1 and third can use previous two swap number 
- If we have no ordered ones and found 0 we just need to swap element to position of last ordered zero + 1
- If we have ordered ones? We need to move zero and do something with one. We cant just exchange positions of number that pointer found and position of last zero + 1 because there is already an one that should be there. And we cant use slice, or pop. In this case we can do 2 swaps. First swap found zero first ordere one and then swap that one to correct place.

- Two cases 
  - When zero is next after 1 
  - Other

*/
