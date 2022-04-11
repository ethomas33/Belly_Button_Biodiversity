// console.log(cityGrowths);

//sort the cities by population grown in descending order 
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//select out only the top 5 cities 
var topFiveCities = sortedCities.slice(0,5);

// pulling out city names and growth using map 
//--- city = city and .City is coming from js data file 
//--- parseInt is needed because those values are stored as strings in the data file
var topFiveCityNames = cityGrowth.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  //// something here isn't rendering right