import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import leapmindsLogo from "@/assets/leapminds-logo.png";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    } else if (savedTheme === "light") {
      setIsDark(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <img 
            src={leapmindsLogo} 
            alt="LeapMinds Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-xl font-semibold tracking-tight text-heading">
            LeapMinds Library
          </span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <Link 
            to="/" 
            className="text-sm font-medium text-body transition-colors hover:text-heading"
          >
            Library
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="h-9 w-9"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-body transition-colors hover:text-heading" />
            ) : (
              <Moon className="h-5 w-5 text-body transition-colors hover:text-heading" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
