import express from "express";
import databaseConnect from "./config/DbConnect.js";

const connection = await databaseConnect();

connection.on("error", (error) => console.error("Connection error", error));

connection.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());

function getBookById(id) {
  return books.findIndex((book) => book.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Hello World, friend\n");
});

app.get("/authors", (req, res) => {});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = getBookById(req.params.id);
  if (index === -1) {
    res.status(404).send("Book not found");
  } else {
    res.status(200).json(books[index]);
  }
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book added successfully");
});

app.put("/books/:id", (req, res) => {
  const index = getBookById(req.params.id);
  if (index === -1) {
    res.status(404).send("Book not found");
  } else {
    books[index].title = req.body.title;
    res.status(200).json(books);
  }
});

app.delete("/books/:id", (req, res) => {
  const index = getBookById(req.params.id);
  if (index === -1) {
    res.status(404).send("Book not found");
  } else {
    books.splice(index, 1);
    res.status(200).send("Book deleted successfully");
  }
});

export default app;
