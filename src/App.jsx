import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face'
import { range } from 'd3';

const width = 190
const height = 190
const array = range(10*5)

const App = () => array.map(() => (
  <Face 
    width={width}
    height={height}
    centerX = {width / 2}
    centerY = {height /2}
    eyeOffsetX = {38 + Math.random()*10}
    eyeOffsetY = {30 + Math.random()*10}
    strokeWidth = {5 + Math.random()*5}
    eyeRadius = {10 + Math.random()*10}
    mouthWidth = {10 + Math.random()*10}
    mouthRadius = {45 + Math.random()*10}
    />
  
))


export default App