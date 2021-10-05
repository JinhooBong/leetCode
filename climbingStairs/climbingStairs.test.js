const climbStairs = require('./climbingStairs');

describe('Climbing Stairs', () => {

  it('Should be a function', () => {
    expect(typeof climbStairs).toBe('function');
  });

  it('Should be 2', () => {
    expect(climbStairs(2)).toBe(2);
  })

  it('Should be 3', () => {
    expect(climbStairs(3)).toBe(3);
  })

});