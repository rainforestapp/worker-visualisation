var width = 960,
    height = 1160;

var svg = d3.select('#container').append('svg')
    .attr("width", width)
    .attr("height", height);

var socket = new Pusher('bee3975a41d4219bae85', {
  encrypted: true,
});

var countries = [
  'SuriName',
  'Turkmenistan',
  'Austria',
  'Poland',
];

var channel = socket.subscribe('anonymized-runs');
channel.bind('workers', function() {
  console.log('workers', arguments);
});

channel.bind('log', function() {
  console.log('log', arguments);
});

var data = {
};

var color = d3.scaleLinear()
    .domain([0, 30])
    .range(["blue", "green"]);

function drawMap(world) {
  return svg
    .selectAll('.country')
    .data(topojson.feature(world, world.objects.countries).features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .style('fill', '#0099DC')
    //    .transition(function() {
    //    })
    .style('stroke-width', '2px')
    .style('stroke', '#fff')
    .attr("d", d3.geoPath().projection(d3.geoEquirectangular()));
};

d3.json("world.json", function(error, world) {
  if (error) return console.error(error);
  window.map = world;

  drawMap(world);

  //var points = svg.selectAll('.bubble');

  //  svg.selectAll('[data=]')

  //points.data()

  //  svg.append("g")
  //    .attr("class", "bubble")
  //    .selectAll("circle")
  //    .data([{
  //
  //    }])
  //  .enter().append("circle")
  //    .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
  //    .attr("r", function(d) { return radius(d.properties.population); });

  world.objects.countries.forEach(function(country) {

  });

  console.log(world.objects.countries);
});

//setInterval(function() {
//  world.objects.
//  Math.floor(Math.random(3));
//}, 1000):
