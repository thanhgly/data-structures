var DoublyLinkedList = function() {
  var doublyLinkedList = {};
  doublyLinkedList.head = null;
  doublyLinkedList.tail = null;

  doublyLinkedList.addToTail = function(value) {
    var node = Node(value);
    if (doublyLinkedList.head === null) {
      doublyLinkedList.head = node;
    } else {
      var current = doublyLinkedList.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      current.next.prev = current;
    }
    doublyLinkedList.tail = node;
    // console.log(doublyLinkedList);
  };

  doublyLinkedList.removeHead = function() {
    var temp = doublyLinkedList.head.value;
    if (doublyLinkedList.head !== null) {
      doublyLinkedList.head = doublyLinkedList.head.next;
    }
    return temp;
  };

  doublyLinkedList.contains = function(target) {
    var current = doublyLinkedList.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  doublyLinkedList.addToHead = function(value) {
    var node = Node(value);
    if (doublyLinkedList.head === null) {
      doublyLinkedList.head = node;
    }
    doublyLinkedList.head.prev = node;
    doublyLinkedList.head = node;
  };

  doublyLinkedList.removeTail = function() {
    var temp = doublyLinkedList.tail.value;

    if (doublyLinkedList.tail.prev !== null) {
      doublyLinkedList.tail = doublyLinkedList.tail.prev;
    } else {
      doublyLinkedList.tail = null;
    }
    return temp;
  };

  return doublyLinkedList;
};


var Node = function(value) {
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;
  return node;
};