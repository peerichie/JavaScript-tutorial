/*function myFn(a, b) {
    let c;
    a = a + 1;
    c = a + b;
    return c;
}

myFn(10, 3);
console.log(myFn(10, 3));

console.log(myFn(41, 12));

function myFunction(a, b) {
    console.log(a);
    console.log(b);
}

myFunction();
console.log(myFunction());*/

//adding a return keyword
/*function sum(a, b){
    return a + b;
}

sum(10, 13);

console.log(sum(10, 15)); //25
console.log(sum("abc", 2)); //string abc2
console.log(sum()); //NaN*/

/* //Challenge 1
function mult(a, b, c) {
    let result;
    result = a * b * c;
    console.log(result);
}
mult(2, 2, 4); */

/*//Challenge 2
function concatenateStrings(a, b) {
    return a + b;
}

console.log(concatenateStrings("Hello", " World")); */

//Challenge 3
function outerFunction(a, b) {
    function innerFunction(c) {
        return c * c;
    }
    const sum = a + b;
   const result = innerFunction(sum);
   console.log(result);
} 

