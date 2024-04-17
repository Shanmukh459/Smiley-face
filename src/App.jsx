import React from 'react';
import ReactDOM from 'react-dom';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

const width = 960
const height = 500
const centerX = width / 2
const centerY = height /2
const eyeOffsetX = 100
const eyeOffsetY = 80
const strokeWidth = 10
const eyeRadius = 30
const mouthWidth = 20
const mouthRadius = 140

const App = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle radius={centerY - strokeWidth/2} strokeWidth={strokeWidth}/>
        <Eyes 
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={ eyeOffsetY}
          eyeRadius={eyeRadius}
        />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
      </g>
    </svg>
  )
}

export default App