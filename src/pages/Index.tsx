import { useState, useMemo } from "react";
import { books, categories } from "@/data/books";
import Header from "@/components/Header";
import BookGrid from "@/components/BookGrid";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { BookOpen, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import leapmindsLogo from "@/assets/leapminds-logo.png";

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
      
      <main>
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Students studying together in a library" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
          </div>
          
          <div className="container relative py-20 md:py-28">
            <div className="max-w-2xl">
              {/* Colorful accent dots */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="h-2 w-2 rounded-full bg-teal" />
                <span className="h-2 w-2 rounded-full bg-amber" />
              </div>
              
              <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
                Your Digital Knowledge Library
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
                Discover and read insightful books directly in your browser. 
                No downloads, no distractions—just pure learning.
              </p>
              
              {/* Accent line */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-accent" />
                <div className="h-1 w-6 rounded-full bg-teal" />
                <div className="h-1 w-3 rounded-full bg-amber" />
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 md:py-12">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={leapmindsLogo} alt="LeapMinds Logo" className="h-12 w-12 object-contain" />
                <span className="font-heading text-xl font-semibold text-heading">LeapMinds Library</span>
              </div>
              <p className="text-body leading-relaxed max-w-lg">
                LeapMinds Library is a digital initiative dedicated to making quality educational resources accessible to everyone. 
                We believe that knowledge should be free and available to all who seek to grow, learn, and transform their lives through reading.
              </p>
              <p className="mt-4 text-body leading-relaxed max-w-lg">
                Our curated collection focuses on spiritual growth, personal development, and life-transforming literature—empowering minds to leap beyond limitations.
              </p>
              
              {/* Accent decoration */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-accent" />
                <div className="h-1 w-4 rounded-full bg-teal" />
                <div className="h-1 w-2 rounded-full bg-amber" />
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-heading mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+2348106391361" 
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <span>+234 810 639 1361</span>
                </a>
                <a 
                  href="mailto:leapmindsinitiative@gmail.com" 
                  className="flex items-center gap-3 text-body hover:text-accent transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
                    <Mail className="h-4 w-4 text-teal" />
                  </div>
                  <span>leapmindsinitiative@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LeapMinds Initiative. Built for curious minds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
