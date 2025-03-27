
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UrlData } from "./types";

interface ShortUrlCardProps {
  urlData: UrlData;
  className?: string;
}

export function ShortUrlCard({ urlData, className }: ShortUrlCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(urlData.shortUrl);
    setCopied(true);
    toast.success("URL copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden border border-border/50 shadow-sm",
        "backdrop-blur-sm bg-white/70",
        "animate-scale-up",
        className
      )}
    >
      <div className="p-5 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Created just now
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="w-full overflow-hidden">
            <p className="text-xs text-muted-foreground truncate">Original URL</p>
            <p className="text-sm truncate" title={urlData.originalUrl}>
              {urlData.originalUrl}
            </p>
          </div>
          
          <div className="w-full">
            <p className="text-xs text-muted-foreground">Shortened URL</p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span 
                className="text-sm font-medium text-primary truncate"
                title={urlData.shortUrl}
              >
                {urlData.shortUrl}
              </span>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={copyToClipboard}
                className={cn(
                  "h-7 text-xs transition-all duration-300 ease-in-out",
                  copied 
                    ? "bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900" 
                    : "hover:bg-primary/10 hover:text-primary"
                )}
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
