class Node {
  constructor(name, ticket, priority = 0) {
    this.name = name;
    this.ticket = ticket;
    this.priority = priority;
    this.next = null;
  }
}

export class PriorityQueue {
  constructor() {
    this._front = null;
    this._tail = null;
    this._size = 0;
    this._ticket = 0;
  }

  enqueue(name, priority = 0) {
    const node = new Node(name, ++this._ticket, priority);

    let position = 1;

    // Fila vazia
    if (this.isEmpty()) {
      this._front = node;
      this._tail = node;
    }

    // Se a prioridade do primeiro node for menor que a prioridade do novo node, insere na frente
    else if (this._front.priority < node.priority) {
      node.next = this._front;
      this._front = node;
    }

    // Procura a posição correta para inserir o node
    else {
      let current = this._front;

      while (current !== null) {
        position++;

        // Se não houver next significa que está no último node, então o node é inserido no final
        if (!current.next) {
          current.next = node;
          this._tail = node;
          break;
        } else {
          // Se a prioridade do próximo node for menor que a prioridade do novo node,
          // insere o novo node entre o node atual e o próximo
          if (current.next.priority < node.priority) {
            node.next = current.next;
            current.next = node;
            break;
          }
        }

        // Avança para o próximo node
        current = current.next;
      }
    }

    this._size++;
    this.print();

    return { node, pos: position };
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
    console.log();
    let current = this._front;
    let position = 1;
    while (current !== null) {
      const ticket = "BD" + current.ticket.toString().padStart(4, "0");
      console.log(
        position +
          ": " +
          current.name +
          " (" +
          ticket +
          " - Prioridade: " +
          current.priority +
          ")"
      );
      current = current.next;
      position++;
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
