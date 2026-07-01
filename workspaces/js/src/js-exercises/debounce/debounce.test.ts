import { debounce } from './debounce'

jest.useFakeTimers()

describe('debounce', () => {
  describe('when is called few times with less then debounce time interval', () => {
    test('is called only once', () => {
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
        obj.register
      }, 150)

      expect(result).toHaveLength(0)

      jest.runAllTimers()

      expect(result).toHaveLength(1)
      expect(result[0]).toBe('Aria')
    })
  })
})
