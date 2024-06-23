document.addEventListener('DOMContentLoaded', (event) => {
    const calculatorScreen = document.getElementById('calculator-screen');
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', event => {
        if (!event.target.matches('button')) return;
        const value = event.target.value;

        if (value === 'clear') {
            calculatorScreen.value = '';
        } else if (value === '=') {
            try {
                calculatorScreen.value = eval(calculatorScreen.value);
            } catch {
                calculatorScreen.value = 'Error';
            }
        } else {
            calculatorScreen.value += value;
        }
    });
});
