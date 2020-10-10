
describe('sanity check suite', () => {
  test('sanity check true === true', () => {
    expect(true).toBe(true);
  });

  test('sanity check expect to FAIL 1 === 2', () => {
    expect(1).toBe(2);
  });
});