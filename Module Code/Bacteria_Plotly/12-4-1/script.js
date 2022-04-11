//creating an event listener -- when change occurs function updatePage() is called
d3.selectAll("body").on("change", updatePage);

//
function updatePage() {
    //d3.selectAll() to select the dropdown menu, which has an id of selectOption.
    var dropdownMenu = d3.selectAll("#selectOption").node();
    //id of the dropdown menu, selectOption, is assigned the variable dropdownMenuID.
    var dropdownMenuID = dropdownMenu.id;
    // value is assigned the variable selectedOption. 
    //Note that selectOption is the id value of the dropdown menu, while selectedOption is the option that is chosen by the user.
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
}