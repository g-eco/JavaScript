class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }

  printList() {
    let node = this.head;
    while(node != null) {
      console.log(node.value);
      node = node.next;
    }
  }

  appendElement(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  insertElement(value, index) {
    if(index > this.length)
      return this.head;
    let newNode = new Node(value);
    let prevNode = this.getNodeAtIndex(index);
    let lastNode = prevNode.next;
    newNode.next = lastNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    lastNode.prev = newNode;
  }

  getNodeAtIndex(index) {
    let node = this.head;
    let cIndex = 0;
    while(node != null && cIndex < index) {
      node = node.next;
      cIndex ++;
    }
    return node;
  }
}

let list = new DoubleLinkedList(10);
list.appendElement(11);
list.appendElement(12);
list.appendElement(13);
list.appendElement(14);
list.insertElement(122, 2);
list.printList();
