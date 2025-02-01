class Node {
  constructor(name, ticket) {
    this.name = name;
    this.ticket = ticket;
    this.next = null;
  }
}

export class LinkedQueue {
  constructor() {
    this._front = null;
    this._tail = null;
    this._size = 0;
    this._ticket = 0;
  }

  enqueue(name) {
    const node = new Node(name, ++this._ticket);
    if (this.isEmpty()) {
      this._front = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
    return node;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const front = this.front();
    this._front = this._front.next;
    this._size--;
    return front;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this._front;
  }

  rear() {
    if (this.isEmpty()) {
      return null;
    }

    return this._tail;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  find(name) {
    let front = this._front;
    let pos = 1;
    while (front !== null) {
      if (front.name === name) {
        return { node: front, pos };
      }
      front = front.next;
      pos++;
    }
    return { node: null, pos: -1 };
  }

  print() {
    let front = this._front;
    let pos = 1;
    while (front !== null) {
      const ticket = "BD" + front.ticket.toString().padStart(4, "0");
      console.log(pos + ": " + front.name + " (" + ticket + ")");
      front = front.next;
      pos++;
    }
  }

  toArray() {
    const array = [];
    let front = this._front;
    while (front !== null) {
      array.push(front.name);
      front = front.next;
    }
    return array;
  }
}
