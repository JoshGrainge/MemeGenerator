import React from 'react';
import trollFace from '../troll-face.png';

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={trollFace} alt="le-troll-face" className="logo" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}
