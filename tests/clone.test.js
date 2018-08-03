const c = require('../clone');

test('deepCloneArray()', () => {
  const ray = [1, 2, 3, [4, 5, [6, 7]]];
  expect(c.deepCloneArray(ray)).toEqual(ray);
});

test('deepCloneArray1()', () => {
  const ray = [1, 2, 3, [4, 5, [6, 7]]];
  expect(c.deepCloneArray1(ray)).toEqual(ray);
});
