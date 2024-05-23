import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const booksLists = await book.find({});
      res.status(200).json(booksLists);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get books` });
    }
  }

  static async getBooksById(req, res) {
    try {
      const id = req.params.id;
      const foundedBook = await book.findById(id);
      res.status(200).json(foundedBook);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get the book` });
    }
  }

  static async registerBook(req, res) {
    const newBook = req.body;

    try {
      const foundedAuthor = await author.findById(newBook.author);
      const completeBook = { ...newBook, author: { ...foundedAuthor._doc } };
      const createdBook = await book.create(completeBook);
      res.status(201).json({
        message: "Book registered successfully",
        book: createdBook,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for register a book` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for get the book` });
    }
  }
  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for delete the book` });
    }
  }

  static async getBooksByPublishCompany(req, res) {
    const publishCompany = req.query.publishCompany;
    try {
      const booksByPublishCompany = await book.find({
        publishCompany: publishCompany,
      });
      res.status(200).json(booksByPublishCompany);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - failed for get books by publish company`,
      });
    }
  }
}

export default BookController;
