export const YAxis = ({yScale}) => 
  yScale.domain().map(tickValue => (
    <g className="tick">
    <text
      key={tickValue}
      style={{ textAnchor: 'end' }}
      dy=".32em"
      x={-4}
      y={yScale(tickValue) + yScale.bandwidth() / 2}
    >
      {tickValue}
    </text>
    </g>
  ));


