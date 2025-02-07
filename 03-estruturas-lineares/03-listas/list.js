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

// Fazer em casa com for
function remove(element) {
    return removeAt(indexOf(element));
}

// Fazer em casa com for
function removeAt(position) {
  return items.splice(position, 1);
}

function indexOf(element) {
  return items.indexOf(element);
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
