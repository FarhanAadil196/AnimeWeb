import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: pink;
  }
  .movie-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .search-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      width: 150px;
      outline: none;
      background-color: beige;
      height: 30px;
      border: none;
      padding: 5px;
    }
    button {
      width: 60px;
      background-color: beige;
      outline: none;
      border: none;
      height: 30px;
      cursor: pointer;
    }
  }
  .load-more {
    margin-top: 20px;
    padding: 10px;
    background-color: beige;
    border: none;
    cursor: pointer;
  }
`;

function Home() {
  const [searchMovie, setSearchMovie] = useState(" "); // Default search term
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Pagination

  useEffect(() => {
    fetchMovies();
  }, [page]); // Fetch new movies when page changes

  const fetchMovies = async () => {
    const apiKey = "142116bc"; // Replace with your valid API key
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchMovie)}&page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]); // Append new results
      } else {
        setMovies([]); // No movies found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([]); // Clear previous results
    setPage(1); // Reset page number
    fetchMovies(); // Fetch new movies
  };

  return (
    <Wrapper>
      <Navbar />
      <div className="home">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-movie"
            placeholder="Search movie"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
          ) : (
            <h2>No movie found</h2>
          )}
        </div>
        <button className="load-more" onClick={() => setPage(page + 1)}>
          Load More
        </button>
      </div>
    </Wrapper>
  );
}

export default Home;
