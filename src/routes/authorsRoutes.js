import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.getAuthors);
routes.get("/authors/:id", AuthorController.getAuthorById);
routes.post("/authors", AuthorController.registerAuthor);
routes.put("/authors/:id", AuthorController.updateAuthor);
routes.delete("/authors/:id", AuthorController.deleteAuthor);

export default routes;
