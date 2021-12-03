const maxProd = require('./maxProdSubArray');

describe('Maximum Product of Subarray', () => {

  it('Should be a function', () => {
    expect(typeof maxProd).toBe('function');
  })

  it('Example 1', () => {
    expect(maxProd([2, 3, -2, 4])).toBe(6);
  })

  it('Example 2', () => {
    expect(maxProd([-2, 0, -1])).toBe(0);
  })

});