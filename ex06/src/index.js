// Create lion object here
var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1
    };
    // End of lion object
    function myFunction(name, value) {
    lion[name] = value;
    return lion;
    }
    console.log(myFunction("roar", "roar-roar"));
// Create a function below this line
// End of function
module.exports = { lion, myFunction };
