/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
class Stack {
  constructor() {
    this.count = 0
    this.data = []
  }

  push(x) {
    this.data[this.count++] = x
  }

  pop() {
    return (this.count > 0) ?
      this.data.splice(--this.count, 1)[0]
      : undefined
  }

  size() {
    return this.count
  }
}
/**
  * Queue Class
  */
class Queue {
  // Use two `stack` instances to implement your `queue` Class
  constructor() {
    this.inbox = new Stack()
    this.outbox = new Stack()
  }
  enqueue(x) {
    this.inbox.push(x)
  }
  // called to remove an item from the `queue`
  dequeue() {
    if (this.outbox.size() === 0) {
      while (this.inbox.size() > 0) this.outbox.push(this.inbox.pop())
    } else return this.outbox.pop()
  }

  size() {
    return this.inbox.size() + this.outbox.size()
  }
}

// let a = new Stack()
// console.log(a)
// a.push(1)
// a.push(3)
// a.push(5)
// a.pop()
// console.log(a)

let b = new Queue()
console.log('==================')
console.log(b)
b.enqueue(1)
b.enqueue(3)
b.enqueue(5)
console.log(b)
b.dequeue()
console.log(b)
b.dequeue()
console.log(b)
b.enqueue(7)
b.enqueue(9)
console.log(b)
b.dequeue()
console.log(b)