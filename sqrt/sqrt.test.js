const sqrt = require('./sqrt');

describe('Square Root', () => {
  
  it('Should be a function', () => {
    expect(typeof sqrt).toBe('function');
  })

  it('Should be correct', () => {
    expect(sqrt(4)).toBe(2)
  })

  it('Should round because truncate decimals', () => {
    expect(sqrt(8)).toBe(2);
  })

})