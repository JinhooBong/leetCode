const removeDuplicates = require('./removeDuplicates.js');

describe('Remove Duplicates', () => {

  it('Should be a function', () => {
    expect(typeof removeDuplicates).toBe('function');
  });

  it('Should handle base cases', () => {
    expect(removeDuplicates([])).toStrictEqual([]);
  })

});
