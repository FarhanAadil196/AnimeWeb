import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

.MovieCard{
height: auto;
width: 200px;
margin: 10px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position:relative;
}
button{
    width: 50px;
    border-radius: 50%;
    padding: 15px;
    outline: none;
    border: none;
    background-color: black;
    
}
.poster{
img{
height:300px;
width:100%;
// object-fit:cover;
}
.overlay {
position:absolute;
right:0;
top:0;
}
}
.info{
width:100%;
display:block;
text-align:left;
font-size:15px; 
padding:5px;
}
`;
function MovieCard({movie}) {
  return (
    <Wrapper>
      <div className="MovieCard">
      <div className="poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"} // Fallback for missing images
          alt={movie.Title}
        />
        <div className="overlay">
          <button className="fav-btn">💗</button>
        </div>
      </div>
      <div className="info">
        <h4 className="title">{movie.Title}</h4>
        <p className="release-year">{movie.Year}</p>
      </div>
    </div>
    </Wrapper>
  );
}

export default MovieCard;
