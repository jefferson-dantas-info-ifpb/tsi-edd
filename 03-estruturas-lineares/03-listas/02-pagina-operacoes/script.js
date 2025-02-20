import { LinkedList } from "./linked-list.js";

const $list = document.querySelector("#list");
const $value = document.querySelector("#value");
const $position = document.querySelector("#position");
const $result = document.querySelector("#result");

const $appendAction = document.querySelector("#append-action");
const $insertAction = document.querySelector("#insert-action");
const $removeAction = document.querySelector("#remove-action");
const $removeAtAction = document.querySelector("#removeAt-action");
const $indexOfAction = document.querySelector("#indexOf-action");
const $nodeAtAction = document.querySelector("#nodeAt-action");
const $isEmptyAction = document.querySelector("#isEmpty-action");
const $sizeAction = document.querySelector("#size-action");
const $clearAction = document.querySelector("#clear-action");

$appendAction.addEventListener("click", () => executeAppend());
$insertAction.addEventListener("click", () => executeInsert());
$removeAction.addEventListener("click", () => executeRemove());
$removeAtAction.addEventListener("click", () => executeRemoveAt());
$indexOfAction.addEventListener("click", () => executeIndexOf());
$nodeAtAction.addEventListener("click", () => executeNodeAt());
$isEmptyAction.addEventListener("click", () => executeIsEmpty());
$sizeAction.addEventListener("click", () => executeSize());
$clearAction.addEventListener("click", () => executeClear());

const list = new LinkedList();
list.append("João");
list.append("Fernando");
list.append("Ana");
list.append("José");

function renderizeList() {
  $list.innerHTML = "";

  let head = list.head;
  while (head !== null) {
    const $item = document.createElement("div");
    $item.classList.add(
      "bg-slate-50",
      "p-2",
      "rounded-md",
      "shadow-sm",
      "min-w-10",
      "text-center"
    );
    $item.innerText = head.element;
    $list.appendChild($item);
    head = head.next;
  }

  list.print();
}

renderizeList();

function executeAppend() {
  const element = $value.value;
  list.append(element);
  $result.innerText = "append: " + element;
  renderizeList();
}

function executeInsert() {
  const element = $value.value;
  const position = Number($position.value);
  list.insert(position, element);
  $result.innerText = "insert: " + element;
  renderizeList();
}

function executeRemove() {
  const element = $value.value;
  const item = list.remove(element);
  $result.innerText = "remove: " + item?.element;
  renderizeList();
}

function executeRemoveAt() {
  const element = $value.value;
  const position = Number($position.value);
  const item = list.removeAt(position, element);
  $result.innerText = "removeAt: " + item?.element;
  renderizeList();
}

function executeIndexOf() {
  $result.innerText = "indexOf: " + list.indexOf($value.value);
}

function executeNodeAt() {
  const position = Number($position.value);
  $result.innerText = "nodeAt: " + list.nodeAt(position)?.element;
}

function executeIsEmpty() {
  $result.innerText = "isEmpty: " + list.isEmpty();
}

function executeSize() {
  $result.innerText = "size: " + list.size();
}

function executeClear() {
  list.clear();
  $result.innerText = "clear";
  renderizeList();
}
