function appendValue(value) {
  const resultValue = document.getElementById('result');
  resultValue.value += value;
  
}

function clearResult() {
  const resultValue = document.getElementById('result');
  resultValue.value = '';
}

function calculate() {
  const resultValue = document.getElementById('result');
  try {
    resultValue.value = eval(resultValue.value);
  } catch (error) {
    resultValue.value = 'Error';
  }
}

function power(value){
  const resultValue = document.getElementById('result');
  const base = parseFloat(resultValue.value);
  if (!isNaN(base)) {
    resultValue.value = Math.pow(base, value);
  } else {
    alert("Please enter a valid number.");
  }
}
