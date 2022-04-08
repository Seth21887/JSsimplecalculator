function calculator(){
    console.log("Calculating...")
    let num1 = Number(prompt("Enter the first number")); //number is a keyword, parse into a number.
    let num2 = Number(prompt("Enter the second number"));
    document.getElementById("calculationZone").innerHTML=`
    <p>${num1} * ${num2} = ${num1*num2}</p>
    <p>${num1} - ${num2} = ${num1-num2}</p>
    <p>${num1} + ${num2} = ${num1+num2}</p>
    <p>${num1} / ${num2} = ${num1/num2}</p>`
}