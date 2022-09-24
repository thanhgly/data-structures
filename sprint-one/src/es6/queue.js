class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.storage[this.size()] = value;
    return value;
  }

  dequeue() {
    var memo = this.storage['0'];
    this.storage = _.reduce(this.storage, function(newObj, value, key) {
      var newKey = Number(key) - 1;
      if (key !== '0') {
        newObj[newKey] = value;
      }
      return newObj;
    }, {});
    return memo;
  }

}
