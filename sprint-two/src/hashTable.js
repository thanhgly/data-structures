

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._size = 0;
};

// Partial solution for hash table resize
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  // if (bucket.length === 0) {
  //   this._size++;
  // }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  // this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;

  bucket.forEach(function(item) {
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

// HashTable.prototype.resize = function () {
//   var capacity = (this._size / this._limit) * 100;
//   if (capacity >= 75) {
//     this._limit *= 2;
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 * O(1) Constant Time
 */


