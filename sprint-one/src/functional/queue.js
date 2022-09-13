var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
    return value;
  };

  someInstance.dequeue = function() {
    var memo = storage['0'];
    delete storage['0'];
    storage = _.reduce(storage, function(newObj, value, key) {
      var newKey = Number(key) - 1;
      newObj[newKey] = value;
      return newObj;
    }, {});
    return memo;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
