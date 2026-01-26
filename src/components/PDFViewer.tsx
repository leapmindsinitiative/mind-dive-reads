import { useEffect, useRef, useState, useCallback } from "react";
import ReadingProgress from "./ReadingProgress";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer = ({ pdfUrl, title }: PDFViewerProps) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    if (scrollHeight > 0) {
      const newProgress = (scrollTop / scrollHeight) * 100;
      setProgress(newProgress);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Google Drive PDF preview URL transformation
  const getEmbedUrl = (url: string) => {
    // If it's a Google Drive link, transform it for embedding
    if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }
    // For other PDFs, use Google Docs viewer
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
  };

  return (
    <div className="relative flex h-[calc(100vh-8rem)] flex-col">
      {/* PDF Container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto rounded-lg bg-muted"
      >
        <iframe
          src={getEmbedUrl(pdfUrl)}
          title={`Reading: ${title}`}
          className="h-full min-h-[calc(100vh-8rem)] w-full border-0"
          allow="autoplay"
          loading="lazy"
        />
      </div>
      
      {/* Reading Progress */}
      <ReadingProgress progress={progress} />
    </div>
  );
};

export default PDFViewer;
