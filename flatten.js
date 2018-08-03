function flatten(arr) {
  return arr.reduce((pre, curr) =>  pre.concat(curr), []);
}

function recursiveFlatten(arr, ray = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      recursiveFlatten(arr[i], ray);
    } else {
      ray.push(arr[i]);
    }
  }
  return ray;
}

function deepFlatten(arr) {
  return arr.reduce((pre, curr) => Array.isArray(curr)
    ? deepFlatten(curr)
    : pre.concat(curr), []);
}

function whileFlatten(arr) {
  const stack = [...arr];
  const ray = [];

  while(stack.length > 0) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      ray.push(next);
    }
  }

  return ray.reverse();
}

module.exports = {
  flatten,
  recursiveFlatten,
  deepFlatten,
  whileFlatten,
};
