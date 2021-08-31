const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-text");

let load = 0;
let blur = 100;

function blurring() {
  load++;
  blur--;
  if (load === 100) {
    clearInterval(timeVal);
  }
  bg.style.filter = `blur(${blur}px)`;
  text.innerText = `${load}%`;
  text.style.opacity = `${blur / 100}`;
}
const timeVal = setInterval(blurring, 30);
