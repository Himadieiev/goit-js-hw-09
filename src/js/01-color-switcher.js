function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const INTERVAL = 1000;
let isActive = false;
let timerID = null;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
  body.style.backgroundColor = getRandomHexColor();
  if (isActive) {
    return;
  }
  isActive = true;
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL);
}

function onStop() {
  clearInterval(timerID);
  isActive = false;
}
