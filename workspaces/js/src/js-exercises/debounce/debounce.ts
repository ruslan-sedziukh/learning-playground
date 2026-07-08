export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>
  let pendingThis: unknown
  let pendingArgs: any[]
  let active = false

  const deactivate = (shouldClearTimeout?: boolean) => {
    active = false

    if (shouldClearTimeout) {
      clearTimeout(timeoutId)
    }
  }

  const activate = (context: unknown, args: any[]) => {
    pendingThis = context
    pendingArgs = args
    active = true
  }

  const callFunc = (
    context: unknown,
    args: any[],
    shouldClearTimeout?: boolean,
  ) => {
    // `deactivate` should be called before the function for the case when it recursively calls `debounced`
    deactivate(shouldClearTimeout)
    func.apply(context, args)
  }

  function debounced(this: unknown, ...args: any[]) {
    // Clear the previous timer if the function is called again within the delay period
    clearTimeout(timeoutId)

    activate(this, args)

    // Set a new timer
    timeoutId = setTimeout(() => {
      callFunc(this, args)
    }, delay)
  }

  debounced.flush = () => {
    if (!active) {
      return
    }

    callFunc(pendingThis, pendingArgs, true)
  }

  debounced.cancel = () => {
    if (!active) {
      return
    }

    deactivate(true)
  }

  return debounced
}
