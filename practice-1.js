const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordLength = 11;
let showingPass = false;


let pass1El = document.getElementById("pass-1");
let pass2El = document.getElementById("pass-2");


function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function getRandomPass() {
    showingPass = true;
    renderPass();
}

function renderPass() {
    let randomPassword = "";
    let randomPassword2 = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomChar();
        randomPassword2 += getRandomChar();
    }

    if (showingPass === false) {
        password1 = "";
        password2 = "";
    } else {
        password1 = randomPassword;
        password2 = randomPassword2;
    }
    pass1El.textContent = password1;
    pass2El.textContent = password2;
}