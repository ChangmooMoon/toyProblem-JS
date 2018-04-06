/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key,value){
    
    var index = getIndexBelowMaxForKey(key,storageLimit);
    storage[index] = value;
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key,storageLimit);
    console.log(storage[index]);
    return storage[index];
  };

  result.remove = function(/*...*/ ){
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


var hashtable = new makeHashTable();
hashtable.insert(1,'hi');
hashtable.insert(1,'hey');
hashtable.retrieve(1);
