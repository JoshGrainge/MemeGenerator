import React from 'react';

export default function Meme(props) {
  return (
    <form className="meme-form">
      <div className="inputs">
        <input placeholder="Shut up" />
        <input placeholder="and take my money" />
      </div>
      <button type="submit" className="new-meme-btn">
        Get a new meme image 🖼️
      </button>
    </form>
  );
}
