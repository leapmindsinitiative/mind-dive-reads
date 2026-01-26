import { cn } from "@/lib/utils";

interface ReadingProgressProps {
  progress: number;
  className?: string;
}

const ReadingProgress = ({ progress, className }: ReadingProgressProps) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-50", className)}>
      {/* Progress Bar Track */}
      <div className="h-1 w-full bg-progress-track">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-3 right-4 flex items-center gap-2 rounded-full bg-card/95 px-3 py-1.5 shadow-elevated backdrop-blur-sm">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-medium text-body">
          {Math.round(clampedProgress)}% read
        </span>
      </div>
    </div>
  );
};

export default ReadingProgress;
