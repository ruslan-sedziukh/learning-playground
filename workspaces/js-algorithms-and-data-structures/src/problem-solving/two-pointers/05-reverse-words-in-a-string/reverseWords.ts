/*
Statement

	Given a sentence, reverse the order of its words without affecting the order of letters within the given word.
*/
const reverseWordsByMe = (sentence: string): string => {
  const sentenceLength = sentence.length

  let reversed = ''

  let i = sentenceLength - 1
  let j = 0

  while (i >= 0) {
    if ((sentence[i - 1] === ' ' || i === 0) && sentence[i] !== ' ') {
      j = i

      if (reversed !== '') {
        reversed += ' '
      }

      while (j < sentenceLength && sentence[j] !== ' ') {
        reversed += sentence[j]

        j++
      }
    }

    i--
  }

  return reversed
}

const reverseWordsByAdonis = (sentence: string): string => {
  const regex = /\s+/g
  const trimmedSentence = sentence.replace(regex, ' ').trim()
  const buf = trimmedSentence.split('')

  let start = 0
  const stop = buf.length

  reverseHelper(buf, start, stop - 1)

  console.log('buf!:', buf)

  for (let right = 0; right < stop; right++) {
    if (buf[right] === ' ') {
      reverseHelper(buf, start, right - 1)
      console.log('buf:', buf)
      start = right + 1
    }
  }

  reverseHelper(buf, start, stop - 1)

  return buf.join('')
}

const reverseHelper = (data: string[], left: number, right: number) => {
  while (left < right) {
    ;[data[left], data[right]] = [data[right], data[left]]
    left++
    right--
  }
}

export const reverseWords = reverseWordsByAdonis
