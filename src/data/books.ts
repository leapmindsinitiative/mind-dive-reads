export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  pdfUrl: string;
  totalPages: number;
  category: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "A Balanced Christian Life",
    author: "Watchman Nee",
    description: "A profound exploration of living a balanced spiritual life, covering essential principles for Christian growth and maturity.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1mFnZrtJMh7zxntl9tkP--jEu88g1w9Mu/view",
    totalPages: 100,
    category: "Spirituality",
  },
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const categories = [...new Set(books.map(book => book.category))];
