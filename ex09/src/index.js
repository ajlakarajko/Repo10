function myFunction(myObj, checkProp) {
    // Only change code below this line
    var myObj = {
        "title": "Titanic",
        "song": "My Heart Will Go On",
        "genre": "drama"
    };
    myObj.hasOwnProperty("title"); // true
    myObj.hasOwnProperty("actor"); // not found     
    return "Titanic";
    console.log(myFunction(myObj, checkProp));
    // Only change code above this line
}
module.exports = myFunction;