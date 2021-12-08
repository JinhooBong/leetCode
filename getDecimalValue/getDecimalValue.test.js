const getDecimalValue = require('./getDecimalValue');

describe('Get Decimal Value', () => {

  it('Should be a function', () => {
    expect(typeof getDecimalValue).toBe('function');
  })

  it('Example 1', () => {
    expect(getDecimalValue([1, 0, 1])).toBe(5);
  })

  it('Example 2', () => {
    expect(getDecimalValue([0])).toBe(0);
  })

  it('Example 3', () => {
    expect(getDecimalValue([1])).toBe(1);
  })

  it('Example 4', () => {
    expect(getDecimalValue([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])).toBe(18880);
  })

  it('Example 5', () => {
    expect(getDecimalValue([0, 0])).toBe(0);
  })

});