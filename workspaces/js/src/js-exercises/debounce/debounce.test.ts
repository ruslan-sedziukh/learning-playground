import { debounce } from './debounce'

jest.useFakeTimers()

describe('debounce', () => {
  const debounceTimeout = 15
  const longDebounceTimeout = 500
  const names = ['John', 'Dan', 'Aria']

  describe('when is called few times with less then debounce time interval', () => {
    it('is called only once', () => {
      const result: string[] = []

      const obj = {
        name: names[0],
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, longDebounceTimeout),
      }

      obj.register()

      obj.name = names[1]
      obj.register()

      obj.name = names[2]
      setTimeout(() => {
        obj.register()
      }, 150)

      expect(result).toHaveLength(0)

      jest.runAllTimers()

      expect(result).toHaveLength(1)
      expect(result[0]).toBe('Aria')
    })
  })

  describe('when is called few times with more then debounce time interval', () => {
    it('is called every time', () => {
      const result: string[] = []
      const obj = {
        name: names[0],
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, debounceTimeout),
      }
      const callTimeout = 100

      obj.register()

      setTimeout(() => {
        obj.name = names[1]
        obj.register()

        setTimeout(() => {
          obj.name = names[2]
          obj.register()
        }, callTimeout)
      }, callTimeout)

      jest.runAllTimers()

      expect(result).toHaveLength(3)
      expect(result).toEqual(names)
    })
  })

  describe('cancel method', () => {
    it('cancels debounced function execution', () => {
      const result: string[] = []

      const obj = {
        name: names[0],
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, debounceTimeout),
      }

      obj.register()
      obj.register.cancel()

      jest.runAllTimers()

      expect(result).toHaveLength(0)
    })
  })

  describe('flush method', () => {
    it('executes debounced immediately', () => {
      const result: string[] = []

      const obj = {
        name: names[0],
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, debounceTimeout),
      }

      obj.register()
      obj.register.flush()

      expect(result).toHaveLength(1)
    })

    it('uses the latest pending this and args', () => {
      const result: string[] = []
      const firstCallSuffix = 'first'
      const secondCallSuffix = 'second;'
      const firstObj = {
        name: names[0],
      }
      const secondObj = {
        name: names[2],
      }

      const register = debounce(function (
        this: typeof firstObj | typeof secondObj,
        suffix: string,
      ) {
        result.push(`${this.name}-${suffix}`)
      }, debounceTimeout)

      register.call(firstObj, firstCallSuffix)
      register.call(secondObj, secondCallSuffix)

      register.flush()

      expect(result).toEqual([`${names[2]}-${secondCallSuffix}`])
    })

    it('clears the scheduled timer after flush', () => {
      const result: string[] = []

      const register = debounce((value: string) => {
        result.push(value)
      }, debounceTimeout)

      register('latest')
      register.flush()
      jest.runAllTimers()

      expect(result).toEqual(['latest'])
    })
  })

  describe('recursive calls', () => {
    it('schedules a new timer when the debounced callback calls itself', () => {
      const result: number[] = []
      let callCount = 0

      const debounced = debounce(() => {
        callCount += 1
        result.push(callCount)

        if (callCount < 2) {
          debounced()
        }
      }, debounceTimeout)

      debounced()

      // runs only the timer that was pending before the call
      jest.runOnlyPendingTimers()
      expect(result).toEqual([1])

      jest.runOnlyPendingTimers()
      expect(result).toEqual([1, 2])
    })
  })
})
