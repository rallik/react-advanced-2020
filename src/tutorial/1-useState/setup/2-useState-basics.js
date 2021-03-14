import React, { useState } from 'react';
import {titles} from './../../99-extras/titles.js';

const getTitle = () => {
  return Math.floor(Math.random()*21);
}

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title')
  const handleClick = () => {
    const newtitle = titles[getTitle()];
    console.log(getTitle())
    setText(newtitle)
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
