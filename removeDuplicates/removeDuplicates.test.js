const removeDuplicates = require('./removeDuplicates.js');

describe('Remove Duplicates', () => {

  it('Should be a function', () => {
    expect(typeof removeDuplicates).toBe('function');
  });

  it('Should handle base cases', () => {
    expect(removeDuplicates([])).toStrictEqual([]);
  })

  it('Should return 2', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  })

  it('Should return 5', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });

  it('Should return 4', () => {
    expect(removeDuplicates([0, 1, 2, 3])).toBe(4);
  })

});
