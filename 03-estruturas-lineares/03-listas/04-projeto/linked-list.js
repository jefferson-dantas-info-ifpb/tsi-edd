class Node {
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

  // Adiciona o contato na posição correta, segundo a ordem alfabética do nome
  add(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      // Adiciona no início quando a lista está vazia
      this.head = node;
      this._size++;
    } else if (node.element.nome.localeCompare(this.head.element.nome) < 0) {
      // Adiciona no inicio
      node.next = this.head;
      this.head = node;
      this._size++;
    } else {
      let current = this.head;

      while (current !== null) {
        if (current.next) {
          // Adiciona no meio
          if (node.element.nome.localeCompare(current.next.element.nome) < 0) {
            node.next = current.next;
            current.next = node;
            this._size++;
            return;
          }
        } else {
          // Adiciona no final
          current.next = node;
          this._size++;
          return;
        }

        current = current.next;
      }
    }
  }

  // Remove e adiciona o elemento quando for editado, para manter a ordem alfabética
  edit(element) {
    this.remove(element)
    this.add(element)
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
      this._size--;
      return node;
    }

    while (currentNode !== null) {
      let nextPosition = currentPosition + 1;
      if (nextPosition === position) {
        const node = currentNode.next;
        currentNode.next = currentNode.next.next;
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
