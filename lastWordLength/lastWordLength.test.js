const lastWord = require('./lastWordLength');

describe('Length of Last Word', () => {

  it('Should be a function', () => {
    expect(typeof lastWord).toBe('function');
  })

  it('Should be correct', () => {
    expect(lastWord("   fly me   to   the moon  ")).toBe(4);
    expect(lastWord('Hello World')).toBe(5);
    expect(lastWord('luffy is still joyboy')).toBe(6);
  })

})