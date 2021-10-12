const guessNumber = require('./guessNumber.js');

describe('Guess Number', () => {

  it('Should be a function', () => {
    expect(typeof guessNumber).toBe('function');
  })

});