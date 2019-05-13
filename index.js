// Your code here

var dodger = document.querySelector('#dodger');

const moveDodgerLeft = () => {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

const moveDodgerRight = () => {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left <= 360) {
    dodger.style.left = `${left + 5}px`
  }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === 'ArrowRight') {
    moveDodgerRight()
  }
});
