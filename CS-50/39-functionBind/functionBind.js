const bind = (func, arg1, ...args) => {
  return (...moreArgs) => {
    let allArgs = args.concat(moreArgs)
    return func.apply(arg1, allArgs)
  }
}

// // example 1
// let alice = {
//   name: 'alice',
//   shout() { return this.name }
// }
// let boundShout = bind(alice.shout, alice)
// console.log(boundShout()) // 'alice'

// boundShout = bind(alice.shout, { name: 'bob' });
// console.log(boundShout())// 'bob'

// // // example 2
// let func = (a, b) => { return a + b }
// var boundFunc = bind(func, null, 'foo')
// var result = boundFunc('bar')
// console.log(result) // foobar

Function.prototype.bind = function (arg1, ...args) {
  return (...moreArgs) => {
    let allArgs = args.concat(moreArgs)
    return this.apply(arg1, allArgs)
  }
}

// example 1:

let alice = {
  name: 'alice',
  shout() { return this.name }
}

let boundShout = alice.shout.bind(alice);
console.log(boundShout()) //  'alice'
boundShout = alice.shout.bind({ name: 'bob' });
console.log(boundShout()) //  'bob'

// example 2:

let func = function (a, b) { return a + b };
let boundFunc = func.bind(null, 'foo');
let result = boundFunc('bar');
console.log(result) //'foobar'
