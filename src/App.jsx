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
    eyeOffsetX = {38}
    eyeOffsetY = {35}
    strokeWidth = {10}
    eyeRadius = {13}
    mouthWidth = {10}
    mouthRadius = {45}
    />
  
))


export default App