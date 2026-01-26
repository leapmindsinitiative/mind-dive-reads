import { useState, useMemo } from "react";
import { books, categories } from "@/data/books";
import Header from "@/components/Header";
import BookGrid from "@/components/BookGrid";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { BookOpen } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="mb-10 text-center md:mb-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <BookOpen className="h-7 w-7 text-accent" />
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-heading md:text-4xl lg:text-5xl">
              Your Digital Knowledge Library
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-body md:text-xl">
              Discover and read insightful books directly in your browser. 
              No downloads, no distractions—just pure learning.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter 
            categories={categories} 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
        </section>

        {/* Books Grid */}
        <section>
          {filteredBooks.length > 0 ? (
            <>
              <p className="mb-6 text-sm text-muted-foreground">
                Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
              </p>
              <BookGrid books={filteredBooks} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-heading">
                No books found
              </h3>
              <p className="text-body">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeapMinds Library. Built for curious minds.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
