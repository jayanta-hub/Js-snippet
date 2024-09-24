Array.prototype.uniqueArray = function () {
  return this.reduce((acc, curr) => {
    if (acc.length === 0) acc.push(curr);
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
};
