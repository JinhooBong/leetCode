const addDigits = require('./addDigits');

describe('Add Digits', () => {

  it('Should be a function', () => {
    expect(typeof addDigits).toBe('function');
  })

  it('Should handle single digits', () => {
    expect(addDigits(2)).toBe(2);
  })

  it('Should handle double digits', () => {
    expect(addDigits(0)).toBe(0);
  })

  it('Should handle double digits', () => {
    expect(addDigits(11)).toBe(2);
    expect(addDigits(38)).toBe(2);
    expect(addDigits(10)).toBe(1);
    expect(addDigits(19)).toBe(1);
  })

})