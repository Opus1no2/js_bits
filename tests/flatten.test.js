const f = require('../flatten');

test('flatten()', () => {
  const ray = [1, 2, 3, [4, 5]];
  expect(f.flatten(ray)).toEqual([1, 2, 3, 4, 5]);
});

test('recursiveFlatten()', () => {
  const ray = [1, 2, 3, [4, 5]];
  expect(f.recursiveFlatten(ray)).toEqual([1, 2, 3, 4, 5]);
});

test('deepFlatten()', () => {
  const ray = [1, 2, 3, [4, 5, [6, 7]]];
  expect(f.recursiveFlatten(ray)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('whileFlatten()', () => {
  const ray = [1, 2, 3, [4, 5, [6, 7]]];
  expect(f.whileFlatten(ray)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
