const addBinary = require('./addBinary');

describe('Add Binary', () => {

  it('Should be a function', () => {
    expect(typeof addBinary).toBe('function');
  })

  it('Example 1', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1010', '1011')).toBe('10101');
  })

})