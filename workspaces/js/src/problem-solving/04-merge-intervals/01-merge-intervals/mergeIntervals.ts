/*
Statement

	We are given an array of closed intervals, intervals, where each interval has a start time and an end time. The input array is sorted with respect to the start times of each interval. For example, intervals =[[1,4],[3,6],[7,9]] is sorted in terms 1, 3 and 7

	Your task is to merge the overlapping intervals and return a new output array consisting of only the non-overlapping intervals.

Examples:

	Input [1,5],[3, 7],[4, 8],[6, 8]
	Output [1, 8]
	--------------------------------
	Input [10,12],[12, 15]
	Output [10, 15]
	--------------------------------
	Input [1,3],[2, 6],[8,10],[15,18],[18,20]
	Output [1, 6],[8,10],[15, 20]
	--------------------------------
*/

import type { Interval } from '@types'

export const mergeIntervals = (intervals: Interval[]): Interval[] => {
  if (!intervals.length) {
    return []
  }

  const result: Interval[] = []

  const sorted = [...intervals].sort(
    (intervalA, intervalB) => intervalA[0] - intervalB[0]
  )

  result.push([...sorted[0]])

  for (let i = 1; i < sorted.length; i++) {
    const prev = result[result.length - 1]
    const current = sorted[i]

    if (current[0] <= prev[1]) {
      prev[1] = prev[1] - current[1] > 0 ? prev[1] : current[1]
    } else {
      result.push([...current])
    }
  }

  return result
}
