import { useState, useEffect } from "react";
import "./Main.css";
import Filter from "./Filter";
import Card from "./Card"; 

function Main() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("harry potter");

  const API_KEY = "29819e62";

  useEffect(() => {
    if (!searchQuery.trim()) return;

    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((err) => console.log("Xəta baş verdi:", err));
  }, [searchQuery]);

  return (
    <main>
      <Filter onSearch={setSearchQuery} />

      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((item) => (
          
            <Card key={item.imdbID} movie={item} />
          ))
        ) : (
          <p className="no-movies">Loading...</p>
        )}
      </div>
    </main>
  );
}

export default Main;