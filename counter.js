// counter.js
let count = 0;
let interval = null;

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter');
  const targetInput = document.getElementById('target');
  const startBtn = document.getElementById('start');
  const message = document.getElementById('message');

  startBtn.addEventListener('click', () => {
    if (interval) {
      clearInterval(interval);
    }

    const target = parseInt(targetInput.value);

    if (isNaN(target) || target <= 0) {
      message.textContent = '⛔ Please enter a valid positive number.';
      return;
    }

    count = 0;
    counterElement.textContent = count;
    message.textContent = '';

    interval = setInterval(() => {
      count++;
      counterElement.textContent = count;

      if (count >= target) {
        clearInterval(interval);
        message.textContent = '✅ Yay! Target reached.';
      }
    }, 1000);
  });
});
