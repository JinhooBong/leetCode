const maxSub = require('./maxSubArray');

describe('Max Sub Array', () => {

  it('Should be a function', () => {
    expect(typeof maxSub).toBe('function')
  })

  it('Should be correct', () => {
    expect(maxSub([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maxSub([5,4,-1,7,8])).toBe(23);
    expect(maxSub([1])).toBe(1);
  })
});