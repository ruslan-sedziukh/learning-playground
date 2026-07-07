import { debounce } from './debounce'

jest.useFakeTimers()

describe('debounce', () => {
  describe('when is called few times with less then debounce time interval', () => {
    it('is called only once', () => {
      const result: string[] = []

      const obj = {
        name: 'John',
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, 500),
      }

      obj.register()

      obj.name = 'Dan'
      obj.register()

      obj.name = 'Aria'
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
      const debounceTimeout = 15
      const callTimeout = 100

      const names = ['John', 'Dan', 'Aria']

      const obj = {
        name: names[0],
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, debounceTimeout),
      }

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
    it('cancels debouced function execution', () => {
      const result: string[] = []

      const obj = {
        name: 'John',
        register: debounce(function (this: typeof obj) {
          result.push(this.name)
        }, 15),
      }

      obj.register()

      obj.register.cancel()

      jest.runAllTimers()

      expect(result).toHaveLength(0)
    })
  })
})
