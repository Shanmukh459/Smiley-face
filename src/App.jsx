import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';

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


const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius+mouthWidth)
  .startAngle(Math.PI/2)
  .endAngle(Math.PI * 3/2)

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
        <path d={mouthArc()} />
      </g>
    </svg>
  )
}

export default App