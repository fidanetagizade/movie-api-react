import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ListPage from "./components/ListPage";

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [lists, setLists] = useState([]);

 
  const handleAddToFavorite = (movie) => {
    if (!favoriteMovies.some((item) => item.imdbID === movie.imdbID)) {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

 
  const handleRemoveFromFavorite = (imdbID) => {
    setFavoriteMovies(favoriteMovies.filter((item) => item.imdbID !== imdbID));
  };


  const handleCreateList = (title) => {
    if (favoriteMovies.length === 0) return;
    const newList = {
      title: title,
      movies: [...favoriteMovies],
    };
    setLists([...lists, newList]);
    setFavoriteMovies([]); 
  };

  const handleDeleteList = (indexToDelete) => {
    setLists(lists.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                favoriteMovies={favoriteMovies}
                onAddToFavorite={handleAddToFavorite}
                onRemoveFromFavorite={handleRemoveFromFavorite}
                onCreateList={handleCreateList}
                lists={lists}
              />
            }
          />
          <Route
            path="/list"
            element={<ListPage lists={lists} onDeleteList={handleDeleteList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;