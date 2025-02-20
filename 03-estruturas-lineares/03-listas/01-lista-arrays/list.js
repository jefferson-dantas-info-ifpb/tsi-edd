let items = [1, 2, 3, 4, 5];

function append(element) {
  items.push(element);
}

function insert(position, element) {
  // items.splice(position, 0, element);

  for (let i = size(); i > position; i--) {
    items[i] = items[i - 1];
  }

  items[position] = element;
}

function remove(element) {
  // return removeAt(indexOf(element));

  let excluiu = false;
  for (let i = 0; i < size(); i++) {
    if (items[i] === element) {
      delete items[i];
      excluiu = true;
    }

    if (excluiu) {
      items[i] = items[i + 1];
    }
  }

  items.length--;
}

function removeAt(position) {
  // return items.splice(position, 1)

  for (let i = position; i < size(); i++) {
    items[i] = items[i + 1];
  }

  items.length--;
}

function indexOf(element) {
  // return items.indexOf(element)

  for (let i = 0; i < size(); i++) {
    if (items[i] === element) return i;
  }

  return -1;
}

function isEmpty() {
  return size() === 0;
}

function size() {
  return items.length;
}

function toString() {
  return items.join(", ");
}

function print() {
  for (const item of items) {
    console.log(item);
  }
}

function clear() {
  items = [];
}

function search(element) {}
