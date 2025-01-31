class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedQueue {
  constructor() {
    this._front = null;
    this._tail = null;
    this._size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this._front = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
    return value;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "A fila está vazia";
    }

    const front = this.front();
    this._front = this._front.next;
    this._size--;
    return front;
  }

  front() {
    if (this.isEmpty()) {
      return "A fila está vazia";
    }

    return this._front.value;
  }

  rear() {
    if (this.isEmpty()) {
      return "A fila está vazia";
    }

    return this._tail.value;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  print() {
    let front = this._front;
    let pos = 1;
    while (front !== null) {
      console.log(pos + ": " + front.value);
      front = front.next;
      pos++;
    }
  }

  toArray() {
    const array = [];
    let front = this._front;
    while (front !== null) {
      array.push(front.value);
      front = front.next;
    }
    return array;
  }
}
