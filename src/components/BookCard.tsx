import { Link } from "react-router-dom";
import { Book } from "@/data/books";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard = ({ book, index }: BookCardProps) => {
  // Generate a gradient based on the book index for visual variety
  const gradients = [
    "from-indigo-500 to-purple-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
    "from-cyan-500 to-blue-600",
    "from-violet-500 to-indigo-600",
  ];
  
  const gradient = gradients[index % gradients.length];

  return (
    <article 
      className="group relative flex flex-col overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Book Cover */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {book.coverUrl ? (
          <img 
            src={book.coverUrl} 
            alt={`Cover of ${book.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 h-px w-12 bg-white/30" />
              <h3 className="font-heading text-lg font-semibold leading-tight text-white md:text-xl">
                {book.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">
                {book.author}
              </p>
              <div className="mt-4 h-px w-12 bg-white/30" />
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {book.category}
        </span>
      </div>
      
      {/* Book Info */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-heading line-clamp-2">
          {book.title}
        </h3>
        <p className="mt-1 font-heading text-sm font-medium text-heading/80">
          {book.author}
        </p>
        <p className="mt-3 mb-4 flex-1 text-sm leading-relaxed text-body line-clamp-2">
          {book.description}
        </p>
        
        <Link to={`/read/${book.id}`}>
          <Button 
            className="w-full gap-2 bg-primary font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
          >
            Read Book
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
