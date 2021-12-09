const canReach = require('./canReach');

describe('Can Reach', () => {

  it('Should be a function', () => {
    expect(typeof canReach).toBe('function');
  })

  it('Example 1', () => {
    expect(canReach([4,2,3,0,3,1,2], 5)).toBe(true);
  })

  it('Example 2', () => {
    expect(canReach([4,2,3,0,3,1,2], 0)).toBe(true);
  })

  it('Example 3', () => {
    expect(canReach([3,0,2,1,2], 2)).toBe(false)
  })

})