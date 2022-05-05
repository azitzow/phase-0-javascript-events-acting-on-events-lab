// Your code here
const dodger = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  if(event.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  if(event.key === 'ArrowRight') {
    moveDodgerRight();
  }
})

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}