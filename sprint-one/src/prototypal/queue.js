var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
  return value;
};

queueMethods.dequeue = function() {
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


