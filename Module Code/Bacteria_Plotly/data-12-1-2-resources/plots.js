//line chart
Plotly.newPlot("plotLineChart", [{ x: [1, 2, 3], y: [10, 50, 30] }]);

// barchart food
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: { title: "Food Option" },
    yaxis: { title: "Number of Respondents" }
}

Plotly.newPlot("plotBarChartFood", [trace], layout);


// barchart beverages 

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [trace];

var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks" },
    yaxis: { title: "Percent of Drinks Ordered" }
}

Plotly.newPlot("plotBarChartBeverages", data, layout);

// Piechart beverages 

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var data = [trace];

var layout = {
    title: "Pie Chart",
}

Plotly.newPlot("plotPieChartBeverages", data, layout);


//Scatter plot

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('myDiv', data);


// practicing map function -- function is an anonymous one -- num is arbitrary could be call anything 
var numbers = [1, 2, 3, 4, 5];
var doubledv1 = numbers.map(function (num) {
    return num * 2;
});
console.log(doubledv1);

// practicing map function -- same as above using arrow function
var numbers = [1, 2, 3, 4, 5];
var doubledv2 = numbers.map(num => num * 2);
console.log(doubledv2);


// map on city and population data
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(function(pop){
    return pop.population;
});
console.log(cityPopulation);

// sort 
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// sort -- Appending reverse() puts in descending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//filter
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// slice - starts in index position 0 and stops right before index position 2 
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

