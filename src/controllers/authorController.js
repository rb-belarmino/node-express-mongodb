import { author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authorsLists = await author.find({});
      res.status(200).json(authorsLists);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get authors` });
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const foundedAuthor = await author.findById(id);
      res.status(200).json(foundedAuthor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get the author` });
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "Author registered successfully",
        author: newAuthor,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for register a author` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get the author` });
    }
  }
  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for delete the author` });
    }
  }
}

export default AuthorController;
