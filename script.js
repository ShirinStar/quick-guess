console.log('script conected!');
//////////////
///timer///
///////////
//countdown from w3 tutorial https://www.w3schools.com/howto/howto_js_countdown.asp
// let countDown = new Date("Jan 5, 2021 15:37:25").getTime();
// let updateCount = setInterval(function() {
// let now = new Date().getTime();
// let distance = countDown - now;
// let seconds = Math.floor((distance % (1000 * 21)) / 1000);
// // Output the result in an element with id="counter"
// document.querySelector("#counter").innerHTML = seconds + " seconds ";
// if (distance < 0) {
// clearInterval(updateCount);
// document.querySelector("#counter").innerHTML = "time's up";
//   }
// }, 1000);

//countdown from stackoverflow tutorial: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = seconds;
      if (--timer < 0) {
       timer = duration;
        //if(timer === 0) {
      }
    }, 1000);
}
window.onload = function () {
  let thirtySec = 10 * 3,
  display = document.querySelector('#counter');
  startTimer(thirtySec, display);
};


/////
///////////////////
////randomWords////
//////////////
let roulette = ['adult', 'animal', 'apple', 'art', 'artist', 'attorney', 'arm', 'American', 'article', 'bank', 'baby', 'bag', 'ball', 'bank', 'bar', 'black', 'blood', 'body', 'book', 'box', 'banana', 'boy', 'building', 'cancer', 'car', 'card', 'cell', 'center', 'chair', 'child', 'church', 'cold', 'computer', 'country', 'couple', 'crime', 'cup', 'cut', 'dark', 'dead', 'degree', 'dog', 'cat', 'door', 'down', 'draw', 'dream', 'drug', 'eat', 'eight', 'everybody', 'eye', 'face', 'family', 'father', 'film', 'finger', 'fire', 'first', 'fish', 'five', 'floor', 'follow', 'food', 'friend', 'game', 'garden', 'girl', 'gun', 'guy', 'hair', 'half', 'hand', 'happy', 'hear', 'heart', 'heavy', 'here', 'hit', 'hospital', 'image', 'key', 'kid', 'language', 'laugh', 'letter', 'light', 'list', 'long', 'live', 'love', 'low', 'machine', 'man', 'marriage', 'memory', 'money', 'morning', 'mouth', 'ear', 'movie', 'network', 'newspaper', 'night', 'nothing', 'number', 'ok', 'open', 'painting', 'paper', 'party', 'phone', 'piece', 'picture', 'plane', 'police', 'radio', 'room', 'sea', 'skull', 'somebody', 'size', 'song', 'star', 'moon', 'sun', 'black-hole', 'step','time', 'top', 'tree', 'flower', 'bee', 'cow', 'horse', 'monkey', 'zebra', 'TV', 'up', 'wait', 'wall', 'water', 'white', 'window', 'wish', 'woman', 'world', 'yes', 'no', 'elephant', 'giraffe' ]

// let start = document.querySelector('#btnReady');
// let wordSpace = document.querySelector('#wordSpace');
//
// //my button is a null...trying to load the DOM before moving on..
// document.addEventListener('DOMContentLoaded', function() {
//   start.addEventListener('click', (ev) => {
//   //return start;
//   //debugger;
//   //console.log('click');
//     let randomWord = Math.floor(Math.random() * roulette.length + 1);
//     word = roulette[randomWord];
//     wordSpace.innerHTML = word;
//   })
// })

////////////////////////////////
/////canvas//////////////
//////////////////
//tutorial from here: http://www.mattmorgante.com/technology/javascript-draw-html5-canvas

let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');
canvas.height = window.innerHeight / 1.3; //double assign?
canvas.width = window.innerWidth;
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;
context.strokeStyle = "#fff";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
if(!isDrawing)return;
  console.log(e);
  context.beginPath();
  context.moveTo(e.offsetX, e.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// this is from medium: https://medium.com/@jagadeshanh/html5-canvas-click-and-draw-f665e02f5744

// let canvas = document.querySelector('#canvas');
// let context = canvas.getContext('2d');
// let height = canvas.height = window.innerHeight / 1.3; //double assign?
// let width = canvas.width = window.innerWidth / 2;
// let mouseClicked = false, mouseReleased = true;
// document.addEventListener('click', onMouseClick, false);
// document.addEventListener('mousemove', onMouseMove, false);
//
// function onMouseClick(e) {
//     mouseClicked = !mouseClicked;
// }
//
// function onMouseMove(e) {
//     if (mouseClicked) {
//         context.beginPath();
//         context.moveTo(x,y);
//         context.arc(e.clientX, e.clientY, 3.5, 0, Math.PI * 2, false);
//         context.lineWidth = 4;
//         context.fillStyle = "#fff";
//         context.fill();
//     }
// }
