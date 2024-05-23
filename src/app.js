import express from "express";
import databaseConnect from "./config/DbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnect();

connection.on("error", (error) => console.error("Connection error", error));

connection.once("open", () => {
  console.log("Database connected");
});

const app = express();
routes(app);

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
