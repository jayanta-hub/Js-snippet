Array.prototype.sortArray = function () {
  const n = this.length;

  // Bubble Sort algorithm
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        // Swap
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this;
};
