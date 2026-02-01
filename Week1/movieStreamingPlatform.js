// Movie Streaming Platform
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Sci-Fi movies
const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");

// 2. Title with rating
const movieTitles = movies.map(m => `${m.title} (${m.rating})`);

// 3. Average rating
const averageRating =
  movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;

// 4. Find Joker
const jokerMovie = movies.find(m => m.title === "Joker");

// 5. Index of Avengers
const avengersIndex = movies.findIndex(m => m.title === "Avengers");

console.log(sciFiMovies, movieTitles, averageRating, jokerMovie, avengersIndex);
