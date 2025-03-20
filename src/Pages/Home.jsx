import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";

const Wrapper = styled.div`

.home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        background-color: pink;}
.movie-grid{
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 10px;
}
.search-form{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;

function Home() {
  const [SearchMovie, SetSearchMovie] = useState("");
  const movies = [
    { id: 1, title: "Premalu", year: "2003" },
    { id: 2, title: "Ek Villain", year: "2003" },
    { id: 3, title: "krrish", year: "2003" },
    { id: 4, title: "pari", year: "2003" },
  ];
  const handleSubmit = () => {
    alert(SearchMovie);
    SetSearchMovie("");
  };

  return (
    <Wrapper>

    <div className="home">
      <div className="search-form">
        <input
          type="text"
          className="search-movie"
          placeholder="search movie"
          value={SearchMovie}
          onChange={(e) => SetSearchMovie(e.target.value)}
          />
        <button className="search-btn" onClick={handleSubmit}>
          search
        </button>
      </div>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(SearchMovie) ? (
              <MovieCard movie={movie} key={movie.id} />
            ) : (
              <h2 key={movie.id} style={{ display: "none" }}>
                No movie Found
              </h2>
            )
        )}
      </div>
    </div>
        </Wrapper>
  );
}

export default Home;
