function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>

  return function (this: unknown, ...args: any[]) {
    // Clear the previous timer if the function is called again within the delay period
    clearTimeout(timeoutId)

    // Set a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
