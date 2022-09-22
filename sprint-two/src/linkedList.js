var LinkedList = function() {
  var list = {};
  list.storage = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create node
    var node = Node(value);
    var size = Object.keys(list.storage).length;

    // If list not empty, add to tail
    if (size >= 1) {
      // Add new node to tail, get prev element and set prev.next to new node
      console.log(list.storage[size]);
      var prev = list.storage[size - 1];
      prev.next = value;
    }

    list.storage[size] = node;
    list.head = list.storage[0];
    list.tail = list.storage[size];
  };

  list.removeHead = function() {
    var temp = list.storage[0].value;
    list.storage = _.reduce(list.storage, function(memo, value, key) {
      if (key > 0) {
        memo[key - 1] = value;
      }
      return memo;
    }, {});
    list.head = list.storage[0];
    console.log(list);
    return temp;
  };

  list.contains = function(target) {
    for (var key in list.storage) {
      if (list.storage[key].value === target) {
        return true;
      }
    }
    return false;
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