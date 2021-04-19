import React, {
  useState,
  
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { message } from './message';
import { useData } from './useData';
import { XAxis } from './XAxis';
import { YAxis } from './YAxis';
import { Marks } from './Marks';


const width = 1060;
const height = 650;
const margin = {
  top: 10,
  right: 20,
  bottom: 60,
  left: 220,
};

const xAxisLabelOffset = 50;

const App = () => {
const data = useData();
console.log(data)

if (!data) {
  return <pre> 'Looking for the data...'</pre>;
}

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const textLabel = 'BJJ Heroes'

const yValue = d => d.Name
const xValue = d => d['Total Wins']

//const siFormat = format('.2s')
//const xAxisTickFormat = n => siFormat(n).replace('G', 'B')

  // Names on the Y axis
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
  	.padding(0.5);
  

  // // Wins on the X axis
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, 200]);

  
  return (
      <svg width={width} height={height}> 
        <g transform={`translate(${margin.left},${margin.top})`}>
          <XAxis 
            xScale={xScale} 
            innerHeight={innerHeight} 
          />
          <YAxis yScale={yScale} />
          <Marks 
            xScale={xScale} 
            yScale={yScale} 
            data={data}
            xValue={xValue}
            yValue={yValue}
          />
          <text className="axis-text" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor="middle">{textLabel}</text>
        </g>
      </svg>
  	);
};



ReactDOM.render(<App />, document.getElementById('root'));
