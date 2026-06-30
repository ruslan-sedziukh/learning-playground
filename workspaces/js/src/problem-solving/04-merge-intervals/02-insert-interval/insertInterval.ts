import type { Interval } from '@types'

/*
Statement

	Given a sorted list of non-overlapping intervals and a new interval, your task is to insert the new interval into the correct position while ensuring that the resulting list of intervals remains sorted and non-overlapping. Each interval is a pair of nonnegative numbers, the first being the start time and the second being the end time of the interval.

Examples

	Existing intervals [1,3],[5, 7],[8, 9],[10, 13]
	New Intervals [2, 6]
	Output [1, 7] [8, 9], [10, 13]
	--------------------------------
	Existing intervals [1, 3],[6, 9]
	New Intervals [2, 5]
	Output [1, 5] [6, 9]
	--------------------------------
*/

const START = 0,
  END = 1

export const insertInterval = (
  existingIntervals: Interval[],
  newInterval: Interval
): Interval[] => {
  const result: Interval[] = []

  let i = 0

  let current = existingIntervals[i]

  // Push intervals that does not overlap with new one
  while (i < existingIntervals.length && newInterval[START] > current[START]) {
    result.push(current)
    i++
    current = existingIntervals[i]
  }

  // this may be overlapping interval
  const lastInterval = result[result.length - 1]

  // merge last with new if it overlaps
  if (lastInterval && newInterval[START] <= lastInterval[END]) {
    lastInterval[END] =
      lastInterval[END] - newInterval[END] > 0
        ? lastInterval[END]
        : newInterval[END]
  } else {
    result.push(newInterval)
  }

  current = existingIntervals[i]
  let prev = result[result.length - 1]

  // merge other existing intervals if needed
  while (i < existingIntervals.length && current[START] <= prev[END]) {
    prev[END] = prev[END] - current[END] > 0 ? prev[END] : current[END]

    i++

    current = existingIntervals[i]
    prev = result[result.length - 1]
  }

  // push non overlapping existing intervals thats left
  while (i < existingIntervals.length) {
    result.push(existingIntervals[i])
    i++
  }

  return result
}
