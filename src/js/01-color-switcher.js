function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const INTERVAL = 1000;
let timerID = null;
btnStart.disabled = false;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {  
  btnStart.disabled = true;
  timerID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL);
}

function onStop() {
  clearInterval(timerID);
  btnStart.disabled = false;
}
