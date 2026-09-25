# Movie App

A React-based movie search application that lets you search for movies, view details, and build custom favorite lists — powered by the OMDb API.

## Features

- 🔍 **Search** — search for movies by title and instantly see results with poster, title, and release year
- ➕ **Add to Favorites** — mark any movie as a favorite with one click
- 📋 **Custom Favorite Lists** — create named lists (e.g. "abc"), add movies to them, and view them separately
- ❌ **Remove from List** — remove a movie from a favorite list at any time
- 🔗 **IMDB Link** — jump directly to a movie's IMDB page from the favorites view
- 🎨 Custom UI with a purple/orange gradient theme

## Tech Stack

- React (Create React App)
- OMDb API
- CSS

## How to Run

```bash
git clone https://github.com/fidanetagizade/movie-api-react.git
cd movie-api-react
npm install
```

Create a `.env` file in the root directory and add your own OMDb API key:

REACT_APP_API_KEY=your_api_key_here


Then start the dev server:

```bash
npm run dev
```
