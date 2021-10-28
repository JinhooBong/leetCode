const insertSearch = require('./insertSearch');

describe('Insert Search', () => {

  it('Should be a function', () => {
    expect(typeof insertSearch).toBe('function');
  })

  it('Should be correct', () => {
    expect(insertSearch([1, 3, 5, 6], 5)).toBe(2);
    expect(insertSearch([1, 3, 5, 6], 2)).toBe(1);
    expect(insertSearch([1, 3, 5, 6], 7)).toBe(4);
    expect(insertSearch([1, 3, 5, 6], 0)).toBe(0);
    expect(insertSearch([1], 0)).toBe(0);
  });


});