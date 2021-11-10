const singleNum = require('./singleNum');

describe('Single Number', () => {

  it("Should be a function", () => {
    expect(typeof singleNum).toBe('function');
  });

  it('Should be correct', () => {
    expect(singleNum([2,2,1])).toBe(1);
    expect(singleNum([4,1,2,1,2])).toBe(4);
    expect(singleNum([1])).toBe(1);
  })

});