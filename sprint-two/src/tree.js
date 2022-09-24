var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function(treeValue) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === treeValue) {
      this.children.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(1) Constant insertion time, O(n) linear access time
 *
 */


