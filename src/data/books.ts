import balancedChristianLifeCover from "@/assets/balanced-christian-life-cover.jpg";

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
    coverUrl: balancedChristianLifeCover,
    pdfUrl: "https://drive.google.com/file/d/1mFnZrtJMh7zxntl9tkP--jEu88g1w9Mu/view",
    totalPages: 100,
    category: "Spirituality",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    description: "A proven framework for building good habits and breaking bad ones through small, incremental changes.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1rgTTflWOMbSweJxNYzL4uEMTmzUuSGbu/view",
    totalPages: 320,
    category: "Self-Help",
  },
  {
    id: "3",
    title: "Change Your Thinking, Change Your Life",
    author: "Brian Tracy",
    description: "Practical strategies for transforming your mindset and achieving your goals through the power of positive thinking.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1T-ZOEYErBprfIaZs3x9P0iKtGFw8ZbrX/view",
    totalPages: 300,
    category: "Self-Help",
  },
  {
    id: "4",
    title: "The Critical Thinking Toolkit",
    author: "Galen A. Foresman, Peter S. Fosl & Jamie C. Watson",
    description: "A comprehensive guide to developing critical thinking skills with practical tools and techniques for better reasoning.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1YtS7Z1bPC8tNqNbPzoMfzGv4ZUQnPTJ0/view",
    totalPages: 400,
    category: "Education",
  },
  {
    id: "5",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A groundbreaking exploration of the two systems that drive the way we think—fast, intuitive thinking and slow, deliberate thinking.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/15KbVwE5cVgdSfPPLFtL-ztfSMcc0i_Dq/view",
    totalPages: 500,
    category: "Psychology",
  },
  {
    id: "6",
    title: "Eat That Frog!",
    author: "Brian Tracy",
    description: "21 great ways to stop procrastinating and get more done in less time by tackling your biggest tasks first.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1tdHCYzE-o51UJ9Rd5DXcxT6hm1eIgetx/view",
    totalPages: 144,
    category: "Productivity",
  },
  {
    id: "7",
    title: "Critical Thinking",
    author: "Anita Harnadek",
    description: "A practical guide to developing critical thinking skills through exercises and real-world applications.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1RCJuTl-n_uCSLElWGixuRUHDxCzc323u/view",
    totalPages: 200,
    category: "Education",
  },
  {
    id: "8",
    title: "In Pursuit of Purpose",
    author: "Myles Munroe",
    description: "Discover why you were born and find your unique purpose in life through this inspiring guide to purposeful living.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1zEHlb3DBb7P1qGTy_pMF2ppTnrwYh-si/view",
    totalPages: 200,
    category: "Spirituality",
  },
  {
    id: "9",
    title: "Moral Principles in Education",
    author: "John Dewey",
    description: "A philosophical examination of the role of moral education in schools and the development of ethical character.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1eEynoznSYMSuIJA80SWDTckBAikvoZxE/view",
    totalPages: 80,
    category: "Education",
  },
  {
    id: "10",
    title: "Maximizing Your Potential",
    author: "Myles Munroe",
    description: "Unlock your hidden abilities and reach your full potential with practical wisdom for personal growth and success.",
    coverUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1Osu6v8-ECbhaTAx6AlWavER7nCN0k9on/view",
    totalPages: 220,
    category: "Self-Help",
  },
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const categories = [...new Set(books.map(book => book.category))];
