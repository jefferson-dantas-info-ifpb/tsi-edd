import { Queue } from "./queue.js";

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

const queue = new Queue();
queue.enqueue("João");
queue.enqueue("Fernando");
queue.enqueue("Ana");
queue.enqueue("José");

function renderizeQueue() {
  $queue.innerHTML = "";

  for (const item of queue.items) {
    const $item = document.createElement("div");
    $item.classList.add(
      "bg-slate-50",
      "p-2",
      "rounded-md",
      "shadow-sm",
      "min-w-10",
      "text-center"
    );
    $item.innerText = item;
    $queue.appendChild($item);
  }
}

renderizeQueue();

function executeEnqueue() {
  queue.enqueue($value.value);
  renderizeQueue();
  $result.innerText = "enqueue: " + $value.value;
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
