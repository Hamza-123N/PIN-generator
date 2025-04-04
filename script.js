document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll("input[type='range']");
    sliders.forEach(slider => {
        slider.addEventListener("input", updateSliderValue);
    });
});

function updateSliderValue(event) {
    const slider = event.target;
    const valueSpan = document.getElementById(slider.id + "Value");
    valueSpan.textContent = slider.value;
}

function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let lowerCount = parseInt(document.getElementById("lower").value);
    let upperCount = parseInt(document.getElementById("upper").value);
    let numberCount = parseInt(document.getElementById("numbers").value);
    let symbolCount = parseInt(document.getElementById("symbols").value);

    let passwordArray = [];

    function getRandomChars(chars, count) {
        for (let i = 0; i < count; i++) {
            passwordArray.push(chars[Math.floor(Math.random() * chars.length)]);
        }
    }

    getRandomChars(lower, lowerCount);
    getRandomChars(upper, upperCount);
    getRandomChars(numbers, numberCount);
    getRandomChars(symbols, symbolCount);

    passwordArray = passwordArray.sort(() => Math.random() - 0.5);

    document.getElementById("password").innerText = passwordArray.join("");
}

function copyPassword() {
    const passwordText = document.getElementById("password").innerText;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}
