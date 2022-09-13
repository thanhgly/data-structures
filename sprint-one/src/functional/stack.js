var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
    return value;
  };

  someInstance.pop = function() {
    var elToPop = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return elToPop;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
