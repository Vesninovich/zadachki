class SingleLinkedList {
  constructor(head = null) {
    this.head = new ListNode(head);
    this.length = 0;
  }
  insert(value, i) {
    let node = new ListNode(value);
    let currentNode = this.head;
    if (!isDefined(i)) {
      if (this.length === 0) {
        this.head = node;
      } else {
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
    } else if (i < 0 || i > this.length) {
      return "AAAAAAA";
    } else if (i === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previousNode = null;
      for (let x = 0; x < i; x++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = node;
      node.next = currentNode;
    }
    this.length++;
  }
  length() {
    return this.length;
  }
  at(i) {
    let currentNode = this.head;
    if (i < 0 || i > this.length || !isDefined(i)) {
      return "AAAAAAA";
    }
    for (let x = 0; x < i; x++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(i) {
    let currentNode = this.head;
    if (!isDefined(i)) {
      if (this.length === 0) {
        this.head = null;
      } else {
        while (currentNode.next !== null) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = null;
      }
    } else if (i < 0 || i > this.length) {
      return "AAAAAAA";
    } else if (i === 0) {
      this.head = currentNode.next;
    } else {
      let previousNode = null;
      for (let x = 0; x < i; x++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }
  map() {}
  filter() {}
  reduce() {}
  sort() {}
}
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = { SingleLinkedList };
const isDefined = (val) =>
  val !== undefined &&
  val !== null &&
  !(typeof value === "number" && isNaN(val));
