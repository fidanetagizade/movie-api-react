import "./Card.css"; 
function Card({ movie }) {
  // Şəkli yükləyə bilmədikdə işə düşəcək funksiya
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x450?text=No+Poster"; // Bura öz ağ və ya "no poster" şəklinin linkini qoy
  };

  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
        alt={movie.Title} 
        className="movie-img"
        onError={handleImageError} // Əsas hissə bura: şəkil tapılmayanda funksiyanı çağır
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year"><strong>Year:</strong> {movie.Year}</p>
        <button className="fav-btn">+ Favorite</button>
      </div>
    </div>
  );
}
export default Card;