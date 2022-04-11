//URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console
//d3.json() returns a JavaScript promise: it places an API call to the URL and executes subsequent lines of code only when the API call is complete
//receivedData is an arbitrary parameter that is then printed to the console
//d3.json().then() method ensures that the data is received before executing the arrow function. 
d3.json(url).then(receivedData => console.log(receivedData));


d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));