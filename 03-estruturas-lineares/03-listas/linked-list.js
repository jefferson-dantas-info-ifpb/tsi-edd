export class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }

  toString() {
    return this.next === null
      ? this.element
      : this.element + " -> " + this.next.toString();
  }
}

export class LinkedList {
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
    }

    this._size++;
  }

  insert(position, element) {
    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else if (position === this.size()) {
      const last = this.nodeAt(position - 1);
      last.next = node;
    } else {
      const current = this.nodeAt(position - 1);
      node.next = current.next;
      current.next = node;
    }

    this._size++;
  }

  remove(element) {
    const pos = this.indexOf(element);
    if (pos >= 0) {
      this.removeAt(pos);
    }
  }

  removeAt(position) {
    let currentPosition = 0;
    let currentNode = this.head;

    if (position === 0) {
      this.head = this.head.next;
      this._size--;
      return;
    }

    while (currentNode !== null) {
      let nextPosition = currentPosition + 1;
      if (nextPosition === position) {
        currentNode.next = currentNode.next.next;
        this._size--;
        return;
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
  }
}

/**
 * 1. Fazer tela padrão para manipular lista
 * 2. Fazer lista duplamente ligada (prev e next)
 * 3. Projeto sobre lista
 */

const linkedList = new LinkedList();
// linkedList.insert(0, "A");
// linkedList.insert(1, "B");
// linkedList.insert(2, "C");
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
linkedList.print();
linkedList.remove("C");
linkedList.print();
linkedList.insert(1, "D")
linkedList.print();
console.log(linkedList.indexOf('AAA'))