import cors from "cors";
import express from "express";
import { LinkedQueue } from "./queue.js";

const app = express();
const queue = new LinkedQueue();
queue.enqueue("Ana Silva Oliveira");
queue.enqueue("Bruno Souza Santos");
queue.enqueue("Carla Lima Pereira");
queue.enqueue("Daniel Costa Almeida");
queue.enqueue("Ester Santos Lima");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/queue", (req, res) => {
  res.send({ items: queue.items });
});

app.post("/enqueue", (req, res) => {
  const element = req.body.element;
  const node = queue.enqueue(element);
  res.send({ name: node.name, ticket: node.ticket, pos: queue.size() });
});

app.post("/find", (req, res) => {
  const element = req.body.element;
  const { node, pos } = queue.find(element);
  res.send({
    name: node?.name || null,
    ticket: node?.ticket || null,
    pos: pos,
  });
});

app.get("/dequeue", function (req, res) {
  const node = queue.dequeue();
  res.send({
    name: node?.name || null,
    ticket: node?.ticket || null,
  });
});

app.get("/size", function (req, res) {
  const size = queue.size();
  res.send({ size: size });
});

app.get("/front", function (req, res) {
  const node = queue.front();
  res.send({
    name: node?.name || null,
    ticket: node?.ticket || null,
  });
});

app.get("/rear", function (req, res) {
  const node = queue.rear();
  res.send({
    name: node?.name || null,
    ticket: node?.ticket || null,
  });
});

app.get("/isEmpty", function (req, res) {
  const isEmpty = queue.isEmpty();
  res.send({ isEmpty: isEmpty });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta " + (process.env.PORT || 3000));
});
