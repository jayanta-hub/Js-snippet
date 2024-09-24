function isObj(obj) {
  return (
    obj != null &&
    (typeof obj === "object" ||
      typeof obj === "function" ||
      Object.prototype.toString.call(obj) === "[object Object]")
  );
}
function areObjectsEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;

  for (const key of obj1Keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (isObj(val1) && isObj(val2)) {
      if (!areObjectsEqual(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}

Array.prototype.uniqueArrayOfObjects = function () {
  return this.reduce((acc, curr) => {
    if (acc.length === 0) acc.push(curr);
    if (!acc.some((a) => areObjectsEqual(a, curr))) acc.push(curr);
    return acc;
  }, []);
};
