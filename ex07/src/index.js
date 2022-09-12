function myFunction(x) { // Change this line
    // Only change code below this line
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1,
        "roar": "roar-roar"
        };
        // End of lion object
        function myFunction(x) {
        delete lion[x];
        return lion;
        }
        console.log(myFunction("roar"));
    // Only change code above this line
    }
    myFunction("roar-roar"); // Change this line
    module.exports = myFunction;