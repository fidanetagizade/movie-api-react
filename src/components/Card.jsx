
import "./Card.css"; 

function Card({ movie, onAddToFavorite, isAdded }) {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x450?text=No+Poster"; 
  };

  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
        alt={movie.Title} 
        className="movie-img"
        onError={handleImageError} 
      />
      <div className="movie-info">
        <h3 className="movie-title-text">{movie.Title}</h3>
        <p className="movie-year"><strong>Year:</strong> {movie.Year}</p>
        
        <button 
          className={`fav-btn ${isAdded ? "added" : ""}`}
          onClick={() => !isAdded && onAddToFavorite(movie)}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "+ Favorite"}
        </button>
      </div>
    </div>
  );
}

export default Card;