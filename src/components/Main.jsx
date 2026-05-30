import { useState, useEffect } from "react";
import "./Main.css";
import Filter from "./Filter";
import Card from "./Card"; 
import Favorite from "./Favorite";

function Main({ favoriteMovies, onAddToFavorite, onRemoveFromFavorite, onCreateList, lists }) {
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

      
      <div className="main-layout">
        
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map((item) => {
              const isAdded = favoriteMovies.some((fav) => fav.imdbID === item.imdbID);
              return (
                <Card 
                  key={item.imdbID} 
                  movie={item} 
                  onAddToFavorite={onAddToFavorite}
                  isAdded={isAdded}
                />
              );
            })
          ) : (
            <p className="no-movies">Loading...</p>
          )}
        </div>

        <Favorite 
          favoriteMovies={favoriteMovies}
          onRemoveFromFavorite={onRemoveFromFavorite}
          onCreateList={onCreateList}
          lists={lists}
        />

      </div>
    </main>
  );
}

export default Main;