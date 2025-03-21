import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #141414;

  .logo img {
    height: 30px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  a:hover {
    color: #e50914;
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
      </div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/fav"><li>Favorite</li></Link>
      </ul>
    </Nav>
  );
}

export default Navbar;
