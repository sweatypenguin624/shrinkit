
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full py-6 px-4 mt-auto", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-7 w-7 rounded-md bg-primary/90 flex items-center justify-center">
                <span className="text-white font-medium text-xs">SI</span>
              </div>
              <span className="ml-2 text-sm font-medium">ShrinkIt</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ShrinkIt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
