class Node {
  constructor(value, priority, next = null) {
    this.value = value;
    this.priority = priority;
    this.next = next;
  }
}

class PriorityQueue {
  constructor() {
    this._front = null;
    this._tail = null;
    this._size = 0;
  }

  enqueue(value, priority) {
    const node = new Node(value, priority, null);

    if (this.isEmpty()) {
      this._front = node;
      this._tail = node;
    } else if (this._front.priority < node.priority) {
      node.next = this._front;
      this._front = node;
    } else {
      let current = this._front;
      while (current !== null) {
        if (current.next) {
          if (current.next.priority < node.priority) {
            node.next = current.next;
            current.next = node;
            break;
          }
        } else {
          current.next = node;
          this._tail = node;
          break;
        }
        current = current.next;
      }
    }

    // 1: Chegou 2º (prioridade: 1)
    // 2: Chegou 5º (prioridade: 1)
    // 3: Chegou 6º (prioridade: 1)
    // 4: Chegou 1º (prioridade: 2)
    // 5: Chegou 3º (prioridade: 2)
    // 6: Chegou 8º (prioridade: 2)
    // 7: Chegou 4º (prioridade: 3)
    // 8: Chegou 9º (prioridade: 3)
    // 9: Chegou 7º (prioridade: 4)

    // INVERTIDO:
    // 1: Chegou 7º (prioridade: 4)
    // 2: Chegou 4º (prioridade: 3)
    // 3: Chegou 9º (prioridade: 3)
    // 4: Chegou 1º (prioridade: 2)
    // 5: Chegou 3º (prioridade: 2)
    // 6: Chegou 8º (prioridade: 2)
    // 7: Chegou 2º (prioridade: 1)
    // 8: Chegou 5º (prioridade: 1)
    // 9: Chegou 6º (prioridade: 1)

    // // NÃO FUNCIONA
    // if (this.isEmpty()) {
    //   this._front = node;
    //   this._tail = node;
    // } else if (this._front.next === null) {
    //   this._front.next = node;
    // } else {
    //   let temp = this._front;
    //   while (temp.next.priority <= node.priority) {
    //     temp = temp.next;
    //   }
    //   node.next = temp.next;
    //   temp.next = node;
    // }

    // if (this.isEmpty()) {
    //   this._front = node;
    //   this._tail = node;
    // } else if (node.priority < this._front.priority) {
    //   node.next = this._front;
    //   this._front = node;
    // } else {
    //   let temp = this._front;
    //   while (temp.next !== null && temp.priority <= node.priority) {
    //     temp = temp.next;
    //   }
    //   node.next = temp.next;
    //   temp.next = node;
    //   if (node.next === null) {
    //     this._tail = node;
    //   }
    // }

    this._size++;
    this.print();
    console.log("---------");
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
      console.log(
        pos + ": " + front.value + " (prioridade: " + front.priority + ")"
      );
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

const queue = new PriorityQueue();
queue.enqueue("Chegou 1º", 2);
queue.enqueue("Chegou 2º", 1);
queue.enqueue("Chegou 3º", 2);
queue.enqueue("Chegou 4º", 3);
queue.enqueue("Chegou 5º", 1);
queue.enqueue("Chegou 6º", 1);
queue.enqueue("Chegou 7º", 4);
queue.enqueue("Chegou 8º", 2);
queue.enqueue("Chegou 9º", 3);

// queue.enqueue("João", 1);
// queue.enqueue("Maria", 0);
// queue.enqueue("Pedro", 2);
// queue.enqueue("Ryan", 1);
