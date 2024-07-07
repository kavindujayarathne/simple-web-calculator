const calculatorScreenElement = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('button');

let expression = localStorage.getItem('value');

calculatorScreenElement.innerHTML = `${expression}`;

if (!expression) {
  console.log('running');
  expression = '';
  calculatorScreenElement.innerHTML = 0;
}

buttons.forEach((element) => {
  element.addEventListener('click', () => {
    let value = element.dataset.button;
    if (value === 'delete') {
      clear();
    } else if (value === '=') {
      calculate();
    } else {
      displayValue(value);
    }
  });
});

function displayValue(value) {
  expression += value;
  calculatorScreenElement.innerHTML = `${expression}`;
  localStorage.setItem('value', expression);
}

function clear() {
  expression = '';
  localStorage.removeItem('value');
  calculatorScreenElement.innerHTML = 0;
}

function calculate() {
  expression = eval(expression);
  calculatorScreenElement.innerHTML = `${expression}`;
  localStorage.setItem('value', expression);
}
