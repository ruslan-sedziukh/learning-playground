export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>
  let prevThis: unknown
  let prevArgs: any[]

  function debounced(this: unknown, ...args: any[]) {
    // Clear the previous timer if the function is called again within the delay period
    clearTimeout(timeoutId)

    prevThis = this
    prevArgs = args

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }

  debounced.flush = () => {
    func.apply(prevThis, prevArgs)

    prevThis = undefined
    prevArgs = []

    clearTimeout(timeoutId)
  }

  debounced.cancel = () => {
    clearTimeout(timeoutId)
  }

  return debounced
}
