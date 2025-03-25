
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.calc span');

let currentInput = '';
let resultDisplay = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            screen.textContent = '';
            resultDisplay = false;
        } else if (value === '=') {
            try {
                const result = eval(currentInput);
                screen.textContent = result;
                currentInput = result.toString();
                resultDisplay = true;
            } catch (error) {
                screen.textContent = 'Error';
                currentInput = '';
                resultDisplayd = false;
            }
        } else {
            if (resultDisplay) {
                if (!isNaN(value)) {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            screen.textContent = currentInput;
        }
    });
});

