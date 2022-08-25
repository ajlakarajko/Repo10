// Create school object here
var school = {
    "name": "Arena",
    "location": "Sarajevo",
    "established": 2020
    };
    // End of school object
    function myFunction(name) {
    school.name = name;
    return school;
    }
    console.log(myFunction("Paragon"));
// Create a function below this line
// End of function
module.exports = { school, myFunction };