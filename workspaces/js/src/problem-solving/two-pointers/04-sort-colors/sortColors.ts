/*
Statement

  Given an array, colors, which contains a combination of the following three elements:

  0 (representing red)
  1 (representing white)
  2 (representing blue)

  Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. To improve your problem-solving skills, do not utilize the built-in sort function.
*/
export const sortColors = (colors: number[]): number[] => {
  let colorsLength = colors.length

  let orderedZeros = 0
  let orderedOnes = 0
  let pointer = 0

  while (pointer < colorsLength) {
    if (colors[pointer] === 0) {
      ;[colors[orderedZeros], colors[pointer]] = [
        colors[pointer],
        colors[orderedZeros],
      ]

      orderedZeros++

      if (orderedOnes) {
        orderedOnes--
      }
    }

    if (colors[pointer] === 1) {
      ;[colors[orderedZeros + orderedOnes], colors[pointer]] = [
        colors[pointer],
        colors[orderedZeros + orderedOnes],
      ]

      orderedOnes++
    }

    pointer++
  }

  return colors
}
