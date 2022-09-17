var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = {};

  list.addToTail = function(value) {
    var node = Node(value);
    var size = Object.keys(list.storage).length;
    if (size >= 1) {
      list.storage[size - 1].next = value;
    }
    list.storage[size] = node;
    list.head = list.storage[0];
    list.tail = list.storage[size];
  };

  list.removeHead = function() {
    var temp = list.head;
    list.storage = _.reduce(list.storage, function(memo, value, key) {
      if (key > 0) {
        memo[key - 1] = value;
      }
      return memo;
    }, {});
    list.head = list.storage[0];
    list.tail = list.storage[Object.keys(list.storage).length];
    return temp.value;
  };

  list.contains = function(target) {
    return _.some(list.storage, function(node) {
      return node.value === target;
    });
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
