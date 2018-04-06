/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array) {
  var case = new Object;
  for (var i = 1; i <= this.array.length; i += 1) {
    case = array[i];
  }
  console.log(case);
  // return case;
};

var a = [1, 2];
a.isSubsetOF([1, 3, 2, 4]) // true

var b = [1, 2, 2]
b.isSUbsetOF([2, 1, 100, 1000]) // true
