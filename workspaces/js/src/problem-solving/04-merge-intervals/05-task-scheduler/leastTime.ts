import { Heap } from '@lib/Heap'

/*
Statement

	Given a character array tasks, where each character represents a unique task, and a positive integer n that represents the cooling period between any two identical tasks, find the minimum number of time units the CPU will need to complete all the given tasks.

	Each task requires one unit to perform, and the CPU must wait for at least n units of time before it can repeat the same task.

	During the cooling period, the CPU may perform other tasks or remain idle.

Examples
	Input
		tasks ['A', 'A', 'B', 'B'] n 2

	Output 2

		['A', 'B', 'Idle', 'A', 'B']
	---------------------------------
	Input
	  tasks ['1', 'B', 'A', 'A', 'B', 'C'] n 3

	Output 9
    ['A', 'B', 'C', 'Idle', 'A', 'B', 'Idle', 'Idle', 'A']

Hint
  Try to compute the maximum idle time based on the max frequency and update when extracting tasks from the max heap.
*/

type Item = {
  task: string
  count: number
  lastPerformPosition?: number
}

const maxComparator = (
  { count: first }: Item,
  { count: second }: Item
): number => second - first

const idle = 'Idle'

export const leastTime = (tasks: string[], n: number): number => {
  const counter: Record<string, Item> = {}
  const result: string[] = []
  const heap = new Heap(maxComparator)

  tasks.forEach((task) => {
    if (counter[task]) {
      counter[task].count++
    } else {
      counter[task] = {
        task,
        count: 1,
      }
    }
  })

  const items = Array.from(Object.keys(counter)).map((key) => counter[key])

  items.forEach((item) => heap.push(item))

  let topItem: Item | undefined = heap.pop()

  while (topItem) {
    if (
      topItem.lastPerformPosition === undefined ||
      result.length - topItem?.lastPerformPosition > n
    ) {
      result.push(topItem.task)

      topItem.lastPerformPosition = result.length - 1
      topItem.count--

      if (topItem.count) {
        heap.push(topItem)
      }

      if (heap.size) {
        topItem = heap.pop()
      } else {
        topItem = undefined
      }
    } else {
      const waiting: Item[] = []

      // Find task that can be performed
      while (
        heap.size &&
        typeof topItem.lastPerformPosition === 'number' &&
        result.length - topItem.lastPerformPosition <= n
      ) {
        // Save all tasks that cant be performed now
        waiting.push(topItem)

        topItem = heap.pop()
      }

      if (
        topItem.lastPerformPosition === undefined ||
        result.length - topItem.lastPerformPosition > n
      ) {
        result.push(topItem.task)

        topItem.lastPerformPosition = result.length - 1
        topItem.count--

        if (topItem.count) {
          heap.push(topItem)
        }
      } else {
        result.push(idle)

        heap.push(topItem)
      }

      // Push all tasks that could not be performed
      waiting.forEach((item) => heap.push(item))

      if (heap.size) {
        topItem = heap.pop()
      } else {
        topItem = undefined
      }
    }
  }

  return result.length
}
