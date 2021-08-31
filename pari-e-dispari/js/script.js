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

        var sum = addTwoNumbers(userNumber, computerNumber);
        var evenOrOddResult = evenOrOdd(sum);

        var result = document.getElementById("result");

        result.classList.remove("win");
        result.classList.remove("lose");

        if (evenOrOddValue == "" || isNaN(userNumber)) {
            result.innerHTML = "Errore! Inserisci i dati";
            result.classList.add("view");
        } else {
            if (evenOrOddValue == evenOrOddResult) {
                result.innerHTML = "Hai vinto";
                result.classList.add("view");
                result.classList.add("win");
            } else {
                result.innerHTML = "Hai perso";
                result.classList.add("view");
                result.classList.add("lose");
            }
        }
    }
);