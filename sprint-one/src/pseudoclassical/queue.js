var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
  return value;
};

Queue.prototype.dequeue = function() {
  var memo = this.storage['0'];
  this.storage = _.reduce(this.storage, function(newObj, value, key) {
    var newKey = Number(key) - 1;
    if (key !== '0') {
      newObj[newKey] = value;
    }
    return newObj;
  }, {});
  return memo;
};


