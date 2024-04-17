import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

console.log(arc);
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 110;
const eyeOffsetY = 90;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 130;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const App = () => {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="yellow"
          stroke="black"
          stroke-width={strokeWidth}
        />
        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <circle
          cx={eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
        />
        <path d={mouthArc()} />
      </g>
    </svg>
  );
};

export default App