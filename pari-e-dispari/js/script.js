// Functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
function evenOrOdd(num) {
    if (num%2 == 0) {
        return "even"
    }
    return "odd";
}

//Main code
var buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", 
    function() {
        var evenOrOddValue = document.getElementById("even-or-odd").value;
        var userNumber = parseInt(document.getElementById("number").value);
        var computerNumber = randomNumber(1, 5);
        console.log(computerNumber)

        var sum = addTwoNumbers(userNumber, computerNumber);
        console.log(sum);
        var evenOrOddResult = evenOrOdd(sum);

        if (evenOrOddValue == evenOrOddResult) {
            alert("Win");
        } else {
            alert("Lose");
        }
    }
);