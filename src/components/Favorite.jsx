import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favorite.css";



function Favorite({ favoriteMovies, onRemoveFromFavorite, onCreateList, lists }) {
    const [listName, setListName] = useState("");
    const navigate = useNavigate();
    const isLookDisabled = !lists || lists.length === 0;
    const isAddDisabled = !listName.trim() || favoriteMovies.length === 0;

    return (

        <div className="favorite-container">
            <div className="favorite-list">
                {favoriteMovies && favoriteMovies.map((item, index) => (
                    <div key={index} className="favorite-item">
                        <span className="movie-title">{item.Title}</span>
                        <button className="remove-btn" onClick={() => onRemoveFromFavorite(item.imdbID)}>✕</button>
                    </div>

                ))}

            </div>



            <div className="favorite-controls">
                <input
                    className="favorite-input"
                    type="text"
                    placeholder="Enter list name..."
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}

                />

                <button
                    className={`add-btn ${!isAddDisabled ? "active" : "disabled"}`}
                    disabled={isAddDisabled}
                    onClick={() => {
                        onCreateList(listName);
                        setListName("");

                    }}

                >
                    Add To Favorite List

                </button>



                <button
                    className={`look-btn ${!isLookDisabled ? "active" : "disabled"}`}
                    onClick={() => navigate("/list")}
                    disabled={isLookDisabled}

                >
                    Look At Favorite List

                </button>

            </div>

        </div>

    );

}



export default Favorite;