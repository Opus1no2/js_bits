function deepCloneArray(arr, ray = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ray.push(deepCloneArray([...arr[i]]));
    } else {
      ray.push(arr[i]);
    }
  }
  return ray;
}

function deepCloneArray1(arr) {
  return arr.map((val, i, self) => {
    if (Array.isArray(val)) {
      return deepCloneArray1(val);
    } else {
      return val;
    }
  });
};

module.exports = {
  deepCloneArray,
  deepCloneArray1,
};
