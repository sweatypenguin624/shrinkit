
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { AIInput } from "@/components/ui/ai-input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShortUrlCard } from "@/components/ShortUrlCard";
import { shortenUrl, checkApiStatus } from "@/services/api";
import { UrlData } from "@/components/types";

const Index = () => {
  const [urls, setUrls] = useState<UrlData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(true);

  useEffect(() => {
    const checkApi = async () => {
      const available = await checkApiStatus();
      setApiAvailable(available);
      
      if (!available) {
        toast.error("API server is unavailable. Please try again later.");
      }
    };
    
    checkApi();
  }, []);

  const handleShortenUrl = async (url: string) => {
    // Simple URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    try {
      setIsLoading(true);
      const shortenedUrl = await shortenUrl(url);
      
      // Add the new URL to the list
      const newUrlData: UrlData = {
        id: Date.now().toString(),
        originalUrl: url,
        shortUrl: shortenedUrl,
        createdAt: new Date(),
      };
      
      setUrls(prev => [newUrlData, ...prev]);
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to shorten URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 w-full px-4 pt-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-10 animate-slide-down">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 sm:text-5xl">
              Shrink your links<span className="text-primary">.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Create shortened URLs with our fast and secure URL shortener service.
              Copy, share, and track your links effortlessly.
            </p>
          </section>
          
          <section className="max-w-xl mx-auto mb-16 animate-fade-in animation-delay-200">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-medium mb-4 text-center">Paste your long URL</h2>
              
              <AIInput 
                placeholder={isLoading ? "Processing..." : "Enter your URL here..."}
                onSubmit={handleShortenUrl}
                className="mb-2"
              />
              
              <p className="text-xs text-center text-muted-foreground">
                By using our service you accept our Terms of Service and Privacy Policy
              </p>
            </div>
          </section>
          
          {urls.length > 0 && (
            <section className="max-w-2xl mx-auto">
              <h2 className="text-xl font-medium mb-6 text-center">Your shortened URLs</h2>
              
              <div className="space-y-4">
                {urls.map((urlData) => (
                  <ShortUrlCard key={urlData.id} urlData={urlData} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
