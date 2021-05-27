// # Review 5 - Functions

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function getSum(num1, num2) {
    const sum = num1 + num2;
    return sum;
};

console.log(getSum(2,3));

// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function capitalize(string) {
    const stringAsArray = string.split(" ");
    let resultString = "";

    for ( let i = 0; i < stringAsArray.length; i++ ) {
        const word = stringAsArray[i];
        const wordCapitalized = word[0].toUpperCase() + word.slice(1, word.length) + " ";

        resultString += wordCapitalized;
    };

    return resultString;
};

console.log(capitalize("the lazy fox jumps over the sleeping dog or something like that"));

// 3. Write a normal function that takes in an array and *returns* the last item in that array.

function getLastItem(array) {
    const lastItem = array[array.length - 1];
    return lastItem;
};

const array1 = [1, 54, 828, 9181737, "blah", false];
console.log(getLastItem(array1));

// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const getFirstItem = array => array[0];

const array2 = ["banana", 1, 43, 9393, 6242, true];
console.log(getFirstItem(array2));

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const getLastThreeChar = string => string.slice(string.length - 3, string.length);

console.log(getLastThreeChar("Pandemonium"));

// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.

const getTypeOfFirstItem = array => typeof array[0];

const array3 = [42, 1, "pear", NaN, undefined, [1,2]];
console.log(getTypeOfFirstItem(array3));

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const checkForSameType = array => {
    for ( let i = array.length - 1; i > 0; i-- ) {

        if ( typeof array[i] !== typeof array[i - 1]) {
            return false;
        };
    };

    return true;
};

const array4 = [1, 2, 6445, 2, null, 8.4, 3, 9];
console.log(checkForSameType(array4));

// 8. Print the `type` of a variable that has a normal function value.

// console.log(resultString); // doesn't work, only accessible in block scope
console.log(capitalize); // output: [Function: capitalize]

// 9. Print the `type` of a variable that has an arrow function value.

console.log(getFirstItem); // output: [Function: getFirstItem]

// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

const getRandomNum = (min, max) => {
    return function() {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    };
};

const result = getRandomNum(4, 10);
console.log(result());

// 11. In your own words, explain what are side effects and what is a pure function.

// Side effects occur, when functions effect something outside their scope or also take something in outside their scope.
// A pure function only has variables in its own scope, doesn't do a console.log but only returns something

// 12. In your own words, explain what is the difference between functions and methods.

// a function is independent, a method is a function that is associated with a class

// [🐹](https://hamster.dance/hamsterdance/)
