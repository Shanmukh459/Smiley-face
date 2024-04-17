import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

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
        <circle 
          r={centerY - strokeWidth/2}
          fill="yellow"
          stroke="black"
          strokeWidth={strokeWidth}
        />
        <circle 
          r={eyeRadius}
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
        />
        <circle 
          r={eyeRadius}
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
        />
        <path d={mouthArc()} />
      </g>
    </svg>
  )
}

export default App