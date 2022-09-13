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
    var elToDel = storage['0'];
    delete storage['0'];
    _.each(storage, function(value, key) {
      storage[Number(key) - 1] = value;
    });
    delete storage[someInstance.size() - 1];
    return elToDel;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
