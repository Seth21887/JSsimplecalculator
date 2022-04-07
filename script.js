//elements in a function are a parameter (name), keyword (function), name of function (greet)
//the parameter name is a variable
//the function will return the string that is input


// function greet(name){
//     return "Hello " + name + "!";
// }

// console.log(greet("Eric"));

//function declaration / anonymous
let greet = function(name)
{
    return "Hello " + name + "!";
}
console.log(greet("Eric"));

function displayName(studentName){
    document.write(`
    <h2>Student List</h2>
    <p>Student Name: ${studentName} </p>
    <hr>
    `);
}

function multiplyByThree(number){
    document.write(`${number*3}`);
    return (number * 3);
}
//return should be last thing, anything after that won't work.
