/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
//=================답안 1======================================
var deepEquals = function(apple, orange) {
  return JSON.stringify(apple) === JSON.stringify(orange)
    ? true
    : false;
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));  true
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));  false
//=========================답안2===============================

var deepEquals2 = function(apple, orange) {
  var result = true;
  var findEqual = function(x, y) {
    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (y[prop].constructor === Object)
          return findEqual(x.prop, y.prop)
      };
    }
    return result;
  }
}
// ===============================================recursion 모범

var deepEquals3 = function(apple, orange) {
  for (let i in apple) {
    if (typeof apple[i] === 'object') {
      return deepEquals3(apple[i], orange[i])
    } else {
      if (apple[i] !== orange[i])
        return false;
      }
    }
  return true;
};

console.log(deepEquals3({
  a: 1,
  b: {
    c: 3
  }
}, {
  a: 1,
  b: {
    c: 3
  }
})); // true
console.log(deepEquals3({
  a: 1,
  b: {
    c: 5
  }
}, {
  a: 1,
  b: {
    c: 6
  }
})); // false
