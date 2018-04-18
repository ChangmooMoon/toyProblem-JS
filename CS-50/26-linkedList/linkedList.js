/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(val) {
    let newNode = this.makeNode(val)

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  removeHead() {
    if (!this.head) return null
    else {
      let removed = this.head.value
      this.head = this.head.next
      return removed
    }
  }
  contains(val) {
    if (!this.head) return false

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === val || this.tail.value === val) return true;
      else currentNode = currentNode.next
    }
    return false
  }

  makeNode(val) {
    let node = {}
    node.value = val
    node.next = null
    return node
  }
}


var list = new LinkedList()
console.log(list.tail)   //yields 'null'
list.addToTail(4)
list.addToTail(5)
console.log(list.head.value)   //yields '4';
console.log(list.contains(5))  //yields 'true';
console.log(list.contains(6))  //yields 'false';
console.log(list.removeHead()) //yields '4'
console.log(list.tail.value)   //yields '5';