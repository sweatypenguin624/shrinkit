
/**
 * URL Shortener API service
 */

// API base URL - adjust based on deployment environment
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5002";

interface ShortenResponse {
  shortUrl: string;
}

interface ErrorResponse {
  error: string;
}

/**
 * Shortens a URL using the backend API
 * @param url - The original URL to shorten
 * @returns A promise containing the shortened URL
 */
export async function shortenUrl(url: string): Promise<string> {
  try {
    const response = await fetch(`${API_BASE_URL}/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json() as ErrorResponse;
      throw new Error(errorData.error || "Failed to shorten URL");
    }

    const data = await response.json() as ShortenResponse;
    return data.shortUrl;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
}

/**
 * Checks if the API server is available
 * @returns A promise that resolves to true if the server is available
 */
export async function checkApiStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/test`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("API server unavailable:", error);
    return false;
  }
}
