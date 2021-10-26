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

  it('Should return leetcode correct', () => {
    expect(strStr("aaa", "aaaa")).toBe(-1);
    expect(strStr("Mississippi", "issip")).toBe(4);
  })

});