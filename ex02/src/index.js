// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
    };
    function myFunction(myClothes) {
    var hatValue = myClothes.hat; // value1
    var shirtValue = myClothes.shirt; // value2
    var shoesValue = myClothes.shoes // value 3
    return { hatValue, shirtValue, shoesValue };
    }
    console.log(myFunction(myClothes));
    
// Only change code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);