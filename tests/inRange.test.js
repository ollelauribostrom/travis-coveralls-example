import inRange from '../src/inRange';

describe('{unit}: Testing inRange', () => {
  it('should return true if in range', () => {
    expect(inRange({ number: 5, low: 0, high: 10 })).toEqual(true);
  });
  it('should return false if not in range', () => {
    expect(inRange({ number: 1, low: 5, high: 10 })).toEqual(false);
  });
  /*
  it('should include low value in range', () => {
    expect(inRange({ number: 5, low: 5, high: 10 })).toEqual(true);
  });
  it('should include high value in range', () => {
    expect(inRange({ number: 10, low: 0, high: 10 })).toEqual(true);
  });
  */
});
