import book from "../models/Book.js";

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
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({
        message: "Book registered successfully",
        book: newBook,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed for register a book` });
    }
  }
}

export default BookController;