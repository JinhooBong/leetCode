const strStr = require('./strStr');

describe('str Str implementation', () => {

  it('Should be a function', () => {
    expect(typeof strStr).toBe('function');
  })

  it('Should return correct', () => {
    expect(strStr("", "")).toBe(0);
    expect(strStr("hello", "ll")).toBe(2);
    expect(strStr("aaaaa", "baa")).toBe(-1);
  })

});