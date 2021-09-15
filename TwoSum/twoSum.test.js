const twoSum = require('./twoSum.js');

describe('Two Sums', () => {

  it('Should be a function', () => {
    expect(typeof twoSum).toBe('function');
  });

  it('Should return [0, 1] for [2, 7, 11, 15], 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });

  it('Should return [1, 2] for [3, 2, 4], 6', () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });

  it('Should return [0, 1] for [3, 3], 6', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  });

});