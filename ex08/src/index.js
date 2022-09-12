function myObject() {
    'use strict';
    const MATH_CONSTANTS = {
    E: 2.71828
    };
    // Only change code below this line


    let obj = {
        name:"Arena",
        review:"Awesome"
        };
        Object.freeze(obj);
        obj.review = "bad"; // will be ignored. Mutation not allowed
        obj.newProp = "Test"; // will be ignored. Mutation not allowed
        console.log(obj); // { name: "Arena", review:"Awesome"}

        Freeze the MATH_CONSTANTS object so that no one is able to alter the value of E, add, or delete properties

    // Only change code above this line
    try {
    MATH_CONSTANTS.E = 23;
    } catch(error) {
    console.log(error.message);
    }
    return MATH_CONSTANTS.E;
    }
    const E = myObject();
    module.exports = myObject;
    