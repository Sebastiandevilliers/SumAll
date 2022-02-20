function sumAll(){
    var firstNum = parseInt(window.prompt("Enter first number"));
    var secondNum =parseInt(window.prompt("Enter second number"));
    console.log(firstNum);

    let sum = 0;

    for(let i = firstNum; i<=secondNum; i++){
        sum = sum + i;

    }
    alert("Sum of number is " + sum);
}

sumAll();

