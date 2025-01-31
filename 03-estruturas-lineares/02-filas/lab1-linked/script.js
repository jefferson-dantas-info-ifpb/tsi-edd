import { LinkedQueue } from "./queue.js";

const $queue = document.querySelector("#queue");
const $value = document.querySelector("#value");
const $result = document.querySelector("#result");
const $pushAction = document.querySelector("#push-action");
const $shiftAction = document.querySelector("#shift-action");
const $frontAction = document.querySelector("#front-action");
const $rearAction = document.querySelector("#rear-action");
const $sizeAction = document.querySelector("#size-action");

$pushAction.addEventListener("click", () => executeEnqueue());
$shiftAction.addEventListener("click", () => executeDequeue());
$frontAction.addEventListener("click", () => executeFront());
$rearAction.addEventListener("click", () => executeRear());
$sizeAction.addEventListener("click", () => executeSize());

const queue = new LinkedQueue();
queue.enqueue("João");
queue.enqueue("Fernando");
queue.enqueue("Ana");
queue.enqueue("José");

function renderizeQueue() {
  $queue.innerHTML = "";

  let front = queue._front;
  while (front !== null) {
    const $item = document.createElement("div");
    $item.classList.add(
      "bg-slate-50",
      "p-2",
      "rounded-md",
      "shadow-sm",
      "min-w-10",
      "text-center"
    );
    $item.innerText = front.value;
    $queue.appendChild($item);
    front = front.next;
  }

  queue.print();
  console.log(queue.toArray());
}

renderizeQueue();

function executeEnqueue() {
  const item = queue.enqueue($value.value);
  $result.innerText = "enqueue: " + item;
  renderizeQueue();
}

function executeDequeue() {
  const item = queue.dequeue();
  $result.innerText = "dequeue: " + item;
  renderizeQueue();
}

function executeFront() {
  $result.innerText = "front: " + queue.front();
}

function executeRear() {
  $result.innerText = "rear: " + queue.rear();
}

function executeSize() {
  $result.innerText = "size: " + queue.size();
}
