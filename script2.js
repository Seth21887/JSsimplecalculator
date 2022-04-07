function sum(num1,num2){
    console.log(num1+num2);
}
sum(10,10);
sum(3,3);
sum(6,2);

// let sum2 = function(){
//     console.log(3+3);
// }
// sum2();

//or using return
function sum(num1,num2){
    return num1+num2;
}

let result=sum(10,10);
console.log(result);

//this variable subtotal has a global scope because it is defined before it is involved in a function; this means that it can be worked with after the function it is involved in.
let subtotal =0;

function addCart(price){
    return subtotal += price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}
    subtotal = addCart(200); //instead of putting in a number here we can use a prompt instead
    subtotal =addCart(400);
    subtotal = addCart(600);

    console.log(`The subtotal is: ${subtotal}`);

    const total = taxesCalculation(subtotal);
    console.log(`The total is: ${total}`);
