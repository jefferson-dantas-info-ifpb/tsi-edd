export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "A fila está vazia";
    }

    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? "A fila está vazia" : this.items[0];
  }

  rear() {
    return this.isEmpty() ? "A fila está vazia" : this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
