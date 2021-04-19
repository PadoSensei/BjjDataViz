(function (React$1, ReactDOM, d3) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  var csvUrl =
    'https://gist.githubusercontent.com/PadoSensei/9144b94c3a336cf66f1a7d41e3849cc6/raw/ec8e5a396d87c4c5fc750927f340eeda88d1d8c8/BjjHeros.csv';

  var useData = function () {
    var ref = React$1.useState(null);
    var data = ref[0];
    var setData = ref[1];

    React$1.useEffect(function () {
      d3.csv(csvUrl).then(setData);
    }, []);
    return data
  };

  var XAxis = function (ref) {
      var xScale = ref.xScale;
      var innerHeight = ref.innerHeight;

      return xScale.ticks().map(function (tickValue) { return (
              React.createElement( 'g', { className: "tick", key: tickValue, transform: ("translate(" + (xScale(
                  tickValue
                )) + ",0)") },
                React.createElement( 'line', { y2: innerHeight }),
                React.createElement( 'text', {
                  style: { textAnchor: 'middle' }, dy: ".71em", y: innerHeight + 4 },
                  ' ',
                  tickValue
                )
              )
            ); });
  };

  var YAxis = function (ref) {
      var yScale = ref.yScale;

      return yScale.domain().map(function (tickValue) { return (
      React.createElement( 'g', { className: "tick" },
      React.createElement( 'text', {
        key: tickValue, style: { textAnchor: 'end' }, dy: ".32em", x: -4, y: yScale(tickValue) + yScale.bandwidth() / 2 },
        tickValue
      )
      )
    ); });
  };

  var Marks = function (ref) {
    					  var xScale = ref.xScale;
    					  var yScale = ref.yScale;
    					  var data = ref.data;
    					  var xValue = ref.xValue;
    					  var yValue = ref.yValue;

    					  return data.map(function (d) { return (
              React.createElement( 'rect', { className: "mark", key: yValue(d), x: 0, y: yScale(yValue(d)), width: xScale(xValue(d)), height: yScale.bandwidth() },
                  React.createElement( 'title', null, xValue(d) )
                )
    					); });
  };

  var width = 1060;
  var height = 650;
  var margin = {
    top: 10,
    right: 20,
    bottom: 60,
    left: 220,
  };

  var xAxisLabelOffset = 50;

  var App = function () {
  var data = useData();
  console.log(data);

  if (!data) {
    return React__default['default'].createElement( 'pre', null, " 'Looking for the data...'" );
  }

  var innerHeight = height - margin.top - margin.bottom;
  var innerWidth = width - margin.left - margin.right;
  var textLabel = 'BJJ Heroes';

  var yValue = function (d) { return d.Name; };
  var xValue = function (d) { return d['Total Wins']; };

  //const siFormat = format('.2s')
  //const xAxisTickFormat = n => siFormat(n).replace('G', 'B')

    // Names on the Y axis
    var yScale = d3.scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
    	.padding(0.5);
    

    // // Wins on the X axis
    var xScale = d3.scaleLinear()
      .domain([0, d3.max(data, xValue)])
      .range([0, 200]);

    
    return (
        React__default['default'].createElement( 'svg', { width: width, height: height },  
          React__default['default'].createElement( 'g', { transform: ("translate(" + (margin.left) + "," + (margin.top) + ")") },
            React__default['default'].createElement( XAxis, { 
              xScale: xScale, innerHeight: innerHeight }),
            React__default['default'].createElement( YAxis, { yScale: yScale }),
            React__default['default'].createElement( Marks, { 
              xScale: xScale, yScale: yScale, data: data, xValue: xValue, yValue: yValue }),
            React__default['default'].createElement( 'text', { className: "axis-text", x: innerWidth / 2, y: innerHeight + xAxisLabelOffset, textAnchor: "middle" }, textLabel)
          )
        )
    	);
  };



  ReactDOM__default['default'].render(React__default['default'].createElement( App, null ), document.getElementById('root'));

}(React, ReactDOM, d3));
//# sourceMappingURL=bundle.js.map
