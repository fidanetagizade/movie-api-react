import { useNavigate } from "react-router-dom";
import "./ListPage.css";

function ListPage({ lists, onDeleteList }) {
    const navigate = useNavigate();

    return (
        <div className="lists-page-container">
            <div className="lists-wrapper">
                {!lists || lists.length === 0 ? (
                    <div className="empty-list-notice">
                        <p className="notice-text">No favorite lists found yet.</p>
                        <p className="notice-text">
                            To create a list, click the <strong>"Movies"</strong> button below to go back.
                        </p>
                    </div>
                ) : (
                    lists.map((box, index) => (
                        <div key={index} className="list-card-box">
                            <div className="list-card-box-text" >

                                
                                <div className="list-card-header">
                                    <h2 className="list-card-title">{box.title}</h2>

                                </div>

                                <div className="list-card-movies">
                                    {box.movies && box.movies.map((film, fIndex) => (
                                        <div key={fIndex} className="list-movie-row">
                                            <span className="list-movie-name">{film.Title}</span>
                                            <a
                                                href={`https://www.imdb.com/title/${film.imdbID}/`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <button className="imdb-btn">IMDB</button>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="delete-list-btn" onClick={() => onDeleteList(index)}>✕</button>
                        </div>
                    ))
                )}
            </div>

            <button className="movies-back-btn" onClick={() => navigate("/")}>
                Movies
            </button>
        </div>
    );
}

export default ListPage;