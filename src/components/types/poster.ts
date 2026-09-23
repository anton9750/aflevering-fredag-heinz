// Type for relationen mellem en plakat og en genre
export type PosterGenre = {
  genreId: number;
  posterId: number;
};

// Type for en plakat
export type Poster = {
  // Plakatens unikke ID
  id: number;

  // Plakatens navn
  name: string;

  // URL-venligt navn til brug i links
  slug: string;

  // Beskrivelse af plakaten
  description: string;

  // URL til plakatens billede
  image: string;

  // Plakatens bredde
  width: number;

  // Plakatens højde
  height: number;

  // Plakatens pris
  price: string;

  // Antal på lager
  stock: number;

  // Tidspunkt hvor plakaten blev oprettet
  createdAt: string;

  // Tidspunkt hvor plakaten sidst blev opdateret
  updatedAt: string;

  // Liste over plakatens genrer
  genres: PosterGenre[];
};