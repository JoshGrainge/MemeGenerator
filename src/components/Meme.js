import React, { useState } from 'react';
import memeData from '../memeData';

export default function Meme(props) {
  const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);

  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const getRandomMemeUrl = () => {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomIndex].url;
    setMeme((prev) => {
      return { ...prev, randomImage: url };
    });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme-form">
      <div className="inputs">
        <input
          placeholder="Shut up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          placeholder="and take my money"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="new-meme-btn" onClick={getRandomMemeUrl}>
        Get a new meme image 🖼️
      </button>

      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="top-text">{meme.topText}</h2>
        <h2 className="bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
