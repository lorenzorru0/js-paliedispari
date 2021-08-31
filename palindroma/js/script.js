// Functions
function isPalindrome(string) {
    var reverseString = string.split("").reverse().join("");
    if (reverseString == string) {
        return true;
    }
    return false;
}

// Main code 
var buttonVerify = document.getElementById("verify");

buttonVerify.addEventListener("click", 
    function() {
        var str = document.getElementById("string").value;
        console.log(str);
        var result = document.getElementById("result");
        if (str.length < 3) {
            if (str == "") {
                result.innerHTML = "Errore! Inserisci una parola";
                result.classList.add("view");
            } else {
                result.innerHTML = "Errore! Inserisci una parola più lunga";
                result.classList.add("view");
            }
        } else {
            str = str[0].toLowerCase() + str.slice(1);
            if (isPalindrome(str)) {
                result.innerHTML = "La parola è palindroma";
                result.classList.add("view");
            } else {
                result.innerHTML = "La parola non è palindroma";
                result.classList.add("view");
            }
        }
    }
);