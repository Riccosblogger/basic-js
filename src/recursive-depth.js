module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0) {
      for (const value of arr) {
        if(Array.isArray(value))
          depth = Math.max(this.calculateDepth(value), depth);
      }
      return ++depth;
    }
  }