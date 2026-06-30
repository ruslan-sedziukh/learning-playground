
export const hasGetter = <T>(input: any, propName: string): input is T => {

  let proto = input

  // navigate through prototype chain until we found the property or reach the root
  while(proto) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, propName)

    if (descriptor && typeof descriptor.get === 'function') {
      return true
    }

    proto = Object.getPrototypeOf(proto)
  }

  return false
}

export const hasMethod = <T>(input: any, methodName: string): input is T => {
    let proto = input

    // navigate through prototype chain until we found the property or reach the root
    while (proto) {
        const descriptor = Object.getOwnPropertyDescriptor(proto, methodName)
        if (descriptor && typeof descriptor.value === 'function') {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }

    return false
}


export const isIterable = <T> (input: any) : input is Iterable<T> =>
  typeof input === 'object' && input !== null && Symbol.iterator in Object(input)
