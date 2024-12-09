document.addEventListener('DOMContentLoaded', () => {
  const numberBank = [];
  const numberInput = document.getElementById('number');
  const numberBankOutput = document.querySelector('#numberBank output');
  const oddsOutput = document.querySelector('#odds output');
  const evensOutput = document.querySelector('#evens output');
  const sortOneButton = document.getElementById('sortOne');
  const sortAllButton = document.getElementById('sortAll');
  const form = document.querySelector('form');

  function updateNumberBank() {
    numberBankOutput.textContent = numberBank.join(', ');
  }

  function updateSortedNumbers() {
    const odds = numberBank.filter(num => num % 2 !== 0);
    const evens = numberBank.filter(num => num % 2 === 0);
    oddsOutput.textContent = odds.join(', ');
    evensOutput.textContent = evens.join(', ');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = numberInput.value.trim();
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      numberBank.push(number);
      updateNumberBank();
      numberInput.value = '';
    }
  });

  sortOneButton.addEventListener('click', () => {
    if (numberBank.length === 0) return;
    const number = numberBank.shift(); 
    numberBank.push(number); 
    updateNumberBank();
    updateSortedNumbers();
  });

  sortAllButton.addEventListener('click', () => {
    if (numberBank.length === 0) return;
    updateSortedNumbers(); 
  });
});
