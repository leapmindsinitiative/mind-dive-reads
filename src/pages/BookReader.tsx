import { useParams, Link, Navigate } from "react-router-dom";
import { getBookById } from "@/data/books";
import PDFViewer from "@/components/PDFViewer";
import { ArrowLeft, BookOpen } from "lucide-react";

const BookReader = () => {
  const { id } = useParams<{ id: string }>();
  const book = id ? getBookById(id) : undefined;

  if (!book) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-14 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-heading"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Library
          </Link>
          
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="hidden font-heading text-sm font-medium text-heading sm:inline">
              {book.title}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">by</span>
            <span className="font-medium text-body">{book.author}</span>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="container py-4">
        <PDFViewer pdfUrl={book.pdfUrl} title={book.title} />
      </main>
    </div>
  );
};

export default BookReader;
