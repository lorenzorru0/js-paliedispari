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
        str = str[0].toLowerCase() + str.slice(1);
        var result = document.getElementById("result");
        if (str == "") {
            result = "Errore! Inserisci la parola";
        } else {
            if (isPalindrome(str)) {
                result.innerHTML = "La parola è palindroma";
            } else {
                result.innerHTML = "La parola non è palindroma";
            }
        }
    }
);