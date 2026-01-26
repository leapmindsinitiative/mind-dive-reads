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
    title: "The Art of Clear Thinking",
    author: "Rolf Dobelli",
    description: "A practical guide to recognizing and avoiding the cognitive biases that lead to poor decisions.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 52,
    category: "Psychology",
  },
  {
    id: "2",
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world. Learn to cultivate deep concentration.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 48,
    category: "Productivity",
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    description: "Tiny changes, remarkable results. An easy & proven way to build good habits.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 64,
    category: "Self-Help",
  },
  {
    id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness through compelling stories.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 56,
    category: "Finance",
  },
  {
    id: "5",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "Explore the two systems that drive how we think and make choices.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 72,
    category: "Psychology",
  },
  {
    id: "6",
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How today's entrepreneurs use continuous innovation to create successful businesses.",
    coverUrl: "",
    pdfUrl: "https://www.w3.org/WAI/WCAG21/Techniques/pdf/img/table-word.pdf",
    totalPages: 44,
    category: "Business",
  },
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const categories = [...new Set(books.map(book => book.category))];
