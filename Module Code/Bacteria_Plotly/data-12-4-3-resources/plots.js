function init() {
    //used to select the drop down menu
    var selector = d3.select("#selDataset");
    
    // json data is read in 
    d3.json("samples.json").then((data) => {
        console.log(data);
        //names array from sample.json being assigned to sampleNames
        var sampleNames = data.names;
        //for each item in the names arrow a drop down menu option is created 
        sampleNames.forEach((sample) => {
            selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });
    })}
    
    init();

//newSample is the value of the selected menu option --- from HTML this.value = newSample
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

//sample is the id as an argument
function buildMetadata(sample) {
    //pulls in the entire dataset and assigns to data
    d3.json("samples.json").then((data) => {
        //array of metadata from samples.json is assigned to variable metadata
        var metadata = data.metadata;
        //filters for object in the array whose id property matches the ID number passed into buildMetadata() as sample. 
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        
        //Because the results of the filter() method are returned as an array, the first item in the array (resultArray[0]) 
        var result = resultArray[0];

        console.log(result)
        //The id of the Demographic Info panel is sample-metadata. The d3.select() method is used to select this <div>, and the variable PANEL is assigned to it.
        var PANEL = d3.select("#sample-metadata");

        // ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu.
        PANEL.html("");
       //append a H6 heading to the panel and print the location of the volunteer to the panel 
       Object.entries(result).forEach(([key, value]) => {
           PANEL.append("h6").text(`${key.toUpperCAse()}: ${value}`);
       });

    });
    
}
