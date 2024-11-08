const resultTxt = document.querySelector('.resultTxt');
const btns = document.querySelectorAll('.btn-num');

function handleClick() {
  resultTxt.innerText += this.innerText;
}

for (const btn of btns) {
  btn.addEventListener('click', handleClick);
}

function handleReset() {
  resultTxt.innerText = '';
}
document.querySelector('.btn-reset').addEventListener('click', handleReset);


function handleDelete() {
  resultTxt.innerText = resultTxt.innerText.substring(0, resultTxt.innerText.length -1);
}
document.querySelector('.btn-del').addEventListener('click', handleDelete);


function handleCalculate() {
  try {
    resultTxt.innerText = eval(resultTxt.innerText);
  } catch {
    alert('Eksik işlem var');
  }
}

document.querySelector('.btn-calculate').addEventListener('click', handleCalculate);


const body = document.querySelector('body');
const input = document.querySelector('input');

input.addEventListener('input', function() {
    const value = input.value;

    if (value == 1) {
        body.classList.add('color1');
    } else if (value == 2) {
        body.classList.add('color2'); 
    } else if (value == 3) {
        body.classList.add('color3');
    }
});