import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
height: 400px;
width: 300px;
margin: 10px;
background-color: #f5f5f5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
function MovieCard({movie}) {
  return (
    <Wrapper>
      <div className="MovieCard">
        <div className="poster">
          <img src={movie.img} alt={movie.title} />
          <div className="overlay">
            <button className="fav-btn">💗</button>
          </div>
        </div>
        <div className="info">
            <h4 className="title">{movie.title}</h4>
            <p className="release-year">{movie.year}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default MovieCard;
