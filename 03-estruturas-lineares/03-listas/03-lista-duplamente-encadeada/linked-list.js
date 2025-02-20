class Node {
  constructor(element, next = null, prev = null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return this.next === null
      ? this.element
      : this.element + " -> " + this.next.toString();
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  append(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      const last = this.nodeAt(this.size() - 1);
      last.next = node;
      node.prev = last;
    }

    this._size++;
  }

  insert(position, element) {
    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else if (position === this.size()) {
      const last = this.nodeAt(position - 1);
      last.next = node;
      node.prev = last;
    } else {
      const current = this.nodeAt(position - 1);
      node.next = current.next;
      current.next.prev = node;
      current.next = node;
      node.prev = current;
    }

    this._size++;
  }

  remove(element) {
    const pos = this.indexOf(element);
    if (pos >= 0) {
      return this.removeAt(pos);
    }
    return null;
  }

  removeAt(position) {
    let currentPosition = 0;
    let currentNode = this.head;

    if (position === 0) {
      const node = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this._size--;
      return node;
    }

    while (currentNode !== null) {
      let nextPosition = currentPosition + 1;
      if (nextPosition === position) {
        const node = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (currentNode.next !== null) {
          currentNode.next.prev = currentNode;
        }
        this._size--;
        return node;
      }
      currentNode = currentNode.next;
      currentPosition++;
    }
  }

  indexOf(element) {
    let currentPosition = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.element === element) {
        return currentPosition;
      }
      currentNode = currentNode.next;
      currentPosition++;
    }

    return -1;
  }

  nodeAt(position) {
    let currentPosition = 0;
    let currentNode = this.head;

    while (currentNode !== null && currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (currentPosition === position) {
      return currentNode;
    }

    return null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._size;
  }

  toString() {
    return this.head ? this.head.toString() : "[Lista vazia]";
  }

  print() {
    console.log(this.toString());
  }

  clear() {
    this.head = null;
    this._size = 0;
  }
}
