
import { useEffect, useState } from "react";

// Type for en plakat
type Poster = {
  id: number;
  name: string;
  description: string | null;
  image: string;
  genres: {
    genreId: number;
    posterId: number;
  }[];
};

// Custom hook til at hente tilfældige plakater
export function useRandomPosters(url: string, count: number) {

  // Gemmer de valgte plakater
  const [data, setData] = useState<Poster[]>([]);

  // Holder styr på loading
  const [loading, setLoading] = useState(true);
  
  // Gemmer eventuelle fejl
  const [error, setError] = useState("");

  // Kører når URL eller antal ændres
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

      .then((posters: Poster[]) => {

        // Kopierer og blander plakaterne
        const randomPosters = [...posters] //shallow

          .sort(() => Math.random() - 0.5)

          // Vælger det ønskede antal plakater
          .slice(0, count);
          

        // Gemmer de tilfældige plakater
        setData(randomPosters);

        // Stopper loading
        setLoading(false);
      })
      .catch((error) => {

        // Gemmer fejlbeskeden
        setError(error.message);

        // Stopper loading ved fejl
        setLoading(false);
      });
  }, [url, count]);

  // Returnerer data og status
  return {

    data,

    loading,
    
    error,
  };
}

