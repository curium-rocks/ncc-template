import { describe, it, expect, jest } from '@jest/globals'
import index from '../src/index'
describe('index', () => {
  it('should export main', () => {
    expect(typeof index === 'function')
  })
  it('should greet the world', () => {
    const mockConsole = jest.fn()
    index({
      log: mockConsole
    })
    expect(mockConsole).toHaveBeenCalledWith('Hello world')
  })
})
