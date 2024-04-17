import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face'

const width = 960
const height = 500


const App = () => {
  return <Face 
  width={width}
  height={height}
  centerX = {width / 2}
  centerY = {height /2}
  eyeOffsetX = {100}
  eyeOffsetY = {80}
  strokeWidth = {10}
  eyeRadius = {30}
  mouthWidth = {20}
  mouthRadius = {140}
  />
}

export default App