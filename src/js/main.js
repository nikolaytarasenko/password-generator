// initialize arrays with data
const uppercaseArray = new Array(26).fill(1).map((_, index) => String.fromCharCode(65 + index));
const lowercaseArray = new Array(26).fill(1).map((_, index) => String.fromCharCode(97 + index));
const numbersArray = '0123456789'.split('');
const symbolsArray = '!@#$%^&*'.split('');

// initialize basic nodes
const rangeInput = document.getElementById('p-range');
const rangeLengthOutput = document.getElementById('p-length');
const generateButton = document.querySelector('.password__generate');
const passwordOutput = document.querySelector('.password__final');

// an event handler for a button click
generateButton.addEventListener('click', generateButtonHandler);

// clear styles after animation
generateButton.addEventListener('animationend', function (e) {
    e.target.style.animation = '';
});

// click event handler implementation
function generateButtonHandler(e) {
    let totalDataArray = [];
    let flag = 0;
    let characterInputs = document.querySelectorAll('.form__characters');

    if (e !== undefined) {
        e.target.style.animation = '0.2s spin linear';
    }

    Array.from(characterInputs).forEach(item => {
        if (item.checked) {
            switch (item.name) {
                case 'uppercase':
                    totalDataArray = totalDataArray.concat(uppercaseArray);
                    break;
                case 'lowercase':
                    totalDataArray = totalDataArray.concat(lowercaseArray);
                    break;
                case 'numbers':
                    totalDataArray = totalDataArray.concat(numbersArray);
                    break;
                case 'symbols':
                    totalDataArray = totalDataArray.concat(symbolsArray);
            }

            flag++;
        }
    });

    if (flag === 0) {
        passwordOutput.textContent = 'Select at least one checkbox';
        return;
    }

    let result = '';

    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumber = getRandomNumber(totalDataArray.length);
        result += totalDataArray[randomNumber];
    }

    passwordOutput.textContent = result;

}

rangeInput.addEventListener('input', rangeLengthHandler);

function rangeLengthHandler() {
    rangeLengthOutput.textContent = rangeInput.value;
}

// auxiliary function
function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

generateButtonHandler();