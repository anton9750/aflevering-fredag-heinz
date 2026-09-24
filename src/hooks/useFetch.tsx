
import { useEffect, useState } from "react";

// Custom hook til at hente data fra en URL
export function useFetch<DataType>(url: string) {
  // Gemmer de hentede data
  const [data, setData] = useState<DataType | null>(null);

  // Holder styr på om data stadig hentes
  const [loading, setLoading] = useState(true);

  // Gemmer eventuelle fejl
  const [error, setError] = useState("");

  // Kører når URL'en ændres
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // Tjekker om forespørgslen lykkedes
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        // Konverterer svaret til JSON
        return response.json();
      })
      .then((result) => {
        // Gemmer de hentede data
        setData(result);

        // Stopper loading
        setLoading(false);
      })
      .catch((error) => {
        // Gemmer fejlbeskeden
        setError(error.message);

        // Stopper loading ved fejl
        setLoading(false);
      });
  }, [url]);

  // Returnerer data og status
  return {
    data,
    loading,
    error,
  };
}


