import { Book } from "@/data/books";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
}

const BookGrid = ({ books }: BookGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={book.id} book={book} index={index} />
      ))}
    </div>
  );
};

export default BookGrid;
