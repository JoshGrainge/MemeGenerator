import React, { useState } from 'react';
import memeData from '../memeData';

export default function Meme(props) {
  const [url, setUrl] = useState();

  const getRandomMemeUrl = () => {
    const memes = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    setUrl(memes[randomIndex].url);
  };

  return (
    <div className="meme-form">
      <div className="inputs">
        <input placeholder="Shut up" />
        <input placeholder="and take my money" />
      </div>
      <button className="new-meme-btn" onClick={getRandomMemeUrl}>
        Get a new meme image 🖼️
      </button>

      <img src={url} alt="meme" className="meme-image" />
    </div>
  );
}
