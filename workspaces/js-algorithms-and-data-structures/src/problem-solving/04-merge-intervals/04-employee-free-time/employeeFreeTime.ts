import { Heap } from '@lib/Heap'

import type { Interval } from '@types'
import internal from 'stream'

/*
Statement

	You’re given a list containing the schedules of multiple employees. Each person’s schedule is a list of non-overlapping intervals in sorted order. An interval is specified with the start and end time, both being positive integers. Your task is to find the list of finite intervals representing the free time for all the employees.

	Note: The common free intervals are calculated between the earliest start time and the latest end time of all meetings across all employees.

Examples

		schedule [[[1,3], [6,7]], [[2,4]], [[2,5], [9,12]]]
		free time [[5,6], [7, 9]]
	  ---------------------------------------------
		schedule [[[2,3], [7,9]], [[1,4], [6, 7]]]
		free time [[4,6]]
		---------------------------------------------
		schedule [[[1, 2], [3, 4]], [[2, 3]], [[4, 6]]]
		free time []
		---------------------------------------------
		schedule [[[1, 3], [5, 6], [9, 10]],[[2, 4], [7, 8]], [[8, 11], [12, 14]]]
		free time [[4, 5], [6, 7], [11, 12]]
		---------------------------------------------
		schedule [[[3, 5], [8, 10]], [[4, 6], [9, 12]], [[5, 6], [8, 10]]]
		free time [[6, 8]]
*/

const START = 0
const END = 1

type HeapItem = {
  start: number
  employeeIndex: number
  intervalIndex: number
  interval: Interval
}

const minComparator = (
  { start: first }: HeapItem,
  { start: second }: HeapItem
): number => first - second

export const employeeFreeTime = (schedule: Interval[][]): Interval[] => {
  const result: Interval[] = []

  const heap = new Heap(minComparator)

  // Add interval from each employee
  for (let i = 0; i < schedule.length; i++) {
    const employee = schedule[i]

    if (employee[0]) {
      heap.push({
        start: employee[0][START],
        employeeIndex: i,
        intervalIndex: i,
        interval: [...employee[0]],
      })
    }
  }

  let intervalI = 1
  let busy = [...heap.peek().interval]
  let current = heap.peek().interval

  // Add intervals batch by batch and check if they are overlapping
  while (heap.size > 0) {
    // Find none overlapping intervals from batch intervals
    while (heap.size > 0) {
      if (current[START] > busy[END]) {
        result.push([busy[END], current[START]])
        busy = [...current]
      } else {
        busy[END] = current[END] - busy[END] < 0 ? busy[END] : current[END]
      }

      current = heap.pop().interval
    }

    // Add next interval from each employee
    for (let i = 0; i < schedule.length; i++) {
      const employee = schedule[i]

      if (employee[intervalI]) {
        heap.push({
          start: employee[intervalI][START],
          employeeIndex: i,
          intervalIndex: i,
          interval: [...employee[intervalI]],
        })
      }
    }

    intervalI++
  }

  // Check whats left
  if (current[START] > busy[END]) {
    result.push([busy[END], current[START]])
    busy = [...current]
  } else {
    busy[END] = current[END] - busy[END] < 0 ? busy[END] : current[END]
  }

  return result
}

// export const employeeFreeTime = (schedule:Interval[][]): Interval[] => {
// 	const result: Interval[] = []

// 	// initialize the free time heap
// 	const minHeap = new Heap<HeapItem>(minComparator)

// 	// fill first intervals for all employees
// 	schedule.forEach((employee, employeeIndex) => minHeap.push({
// 		start: employee[0][START], // start of the interval
// 		employeeIndex,
// 		intervalIndex: 0
// 	}))

// 	if (minHeap.size === 0) {
// 		return result
// 	}

// 	let prev = minHeap.peek()!.start

// 	while(minHeap.size > 0) {
// 		const {employeeIndex, intervalIndex} = minHeap.pop()

// 		const employee = schedule[employeeIndex]

// 		const interval = employee[intervalIndex]

// 		if (interval[START] > prev) {
// 			result.push([
// 				prev,
// 				interval[START]
// 			])
// 		}

// 		prev = Math.max(prev, interval[END])

// 		if (intervalIndex + 1 < employee.length) {
// 			const nextInterval = employee[intervalIndex + 1]

// 			minHeap.push({
// 				start: nextInterval[START],
// 				employeeIndex,
// 				intervalIndex: intervalIndex + 1
// 			})
// 		}
// 	}

// 	return result
// }
