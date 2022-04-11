d3.json("samples.json").then(function(data){
    console.log(data);
});

//pulling out only wfreq data 
// sort results in decending order (b-a) allows for this
// then filtering out null values 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});


//extracting the metadata of the first person in the dataset -- metadata[0]
//Object.entries() method to return each key-value pair in an array, and the forEach()method to access each element of these pairs
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});
});

