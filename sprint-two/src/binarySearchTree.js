var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, methods);
  return newTree;
};

var methods = function() {

};

methods.insert = function(value) {
  var node = BinarySearchTree(value);
  var current = this;

  while (current.value !== value) {
    // check direction (left or right)
    if (current.value > value) {
      if (current.left === null) {
        current.left = node;
        break;
      } else {
        current = current.left;
      }
    } else {
      if (current.right === null) {
        current.right = node;
        break;
      } else {
        current = current.right;
      }
    }
  }
};

// If we have time, revisit this (only going one layer deep?)
methods.contains = function(value) {
  // if this.value matches value return true
  var current = this;
  if (current.value === value) {
    return true;

  // else if this.value greater than value, direction = left (else right)
  } else if (current.value > value) {

    // check if this.(direction).value matches value
    if (current.left.value === value) {
      return true;
    } else {
      current = current.left;
    }
  } else {
    if (current.right.value === value) {
      return true;
    } else {
      current = current.right;
    }
  }
  return false;

};

methods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * Logarithmic: O(log n)
 */


