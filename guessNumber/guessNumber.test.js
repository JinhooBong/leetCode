const guessNumber = require('./guessNumber.js');

describe('Guess Number', () => {

  it('Should be a function', () => {
    expect(typeof guessNumber).toBe('function');
  });

  it('Should pass base case', () => {
    expect(guessNumber(1)).toBe(1);
  })

});