// Only change code below this line
var myFood = {
    vegetable: "carrot",
    food: "orange" ,
    drink: "water"
    };
    function myFunction(myFood) {
    var vegetableValue = myFood["vegetable"]; // value1
    var foodValue = myFood["food"]; // value2
    var drinkValue = myFood["drink"]; // value2
    return { vegetableValue, foodValue, drinkValue };
    }
    console.log(myFunction(myFood));
// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);
