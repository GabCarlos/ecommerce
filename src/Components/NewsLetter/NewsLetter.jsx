import React from 'react';
import './NewsLetter.css';

function NewsLetter() {
  return (
    <div className='NewsLetter'>
      <h1> Get exclusive new for you </h1>
      <p> Subscribe to our newletter and stay update </p>
      <div>
        <input type='email' placeholder='add your email'/>
        <button> Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;