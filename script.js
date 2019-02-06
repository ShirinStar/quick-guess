console.log('script conected!');

const roulette = ['adult', 'animal', 'apple', 'art', 'artist', 'attorney', 'arm', 'American', 'article', 'bank', 'baby', 'bag', 'ball', 'bank', 'bar', 'black', 'blood', 'body', 'book', 'box', 'banana', 'boy', 'building', 'cancer', 'car', 'card', 'cell', 'center', 'chair', 'child', 'church', 'cold', 'computer', 'country', 'couple', 'crime', 'cup', 'cut', 'dark', 'dead', 'degree', 'dog', 'cat', 'door', 'down', 'draw', 'dream', 'drug', 'eat', 'eight', 'everybody', 'eye', 'face', 'family', 'father', 'film', 'finger', 'fire', 'first', 'fish', 'five', 'floor', 'follow', 'food', 'friend', 'game', 'garden', 'girl', 'gun', 'guy', 'hair', 'half', 'hand', 'happy', 'hear', 'heart', 'heavy', 'here', 'hit', 'hospital', 'image', 'key', 'kid', 'language', 'laugh', 'letter', 'light', 'list', 'long', 'live', 'love', 'low', 'machine', 'man', 'marriage', 'memory', 'money', 'morning', 'mouth', 'ear', 'movie', 'network', 'newspaper', 'night', 'nothing', 'number', 'ok', 'open', 'painting', 'paper', 'party', 'phone', 'piece', 'picture', 'plane', 'police', 'radio', 'room', 'sea', 'skull', 'somebody', 'size', 'song', 'star', 'moon', 'sun', 'black-hole', 'step','time', 'top', 'tree', 'flower', 'bee', 'cow', 'horse', 'monkey', 'zebra', 'TV', 'up', 'wait', 'wall', 'water', 'white', 'window', 'wish', 'woman', 'world', 'yes', 'no', 'elephant', 'giraffe', 'lion', 'kiss', 'holding-hands', 'coffee', 'breakfast', 'phone', 'tea', 'pen', 'train', 'robot', 'email', 'dance', 'teacher', 'floor-lamp', 'power-socket', 'strawberry', 'blueberry', 'pizza', 'french-fries', 'sky', 'harmony', 'street', 'sunday', 'rocket', 'superhero', 'hamburger', 'clock', 'naked', 'attention', 'nobody', 'shelter', 'trump', 'war', 'island', 'beach', 'football', 'mosquito', 'rat', 'trash', 'grapes', 'maybe', 'starting-point', 'button', 'box', 'empty', 'elevator', 'out-of-space', 'burrito', 'ramen-soup', 'headphones', 'park', 'homeless', 'cheese', 'tent', 'bed', 'birthday', 'font', 'text', 'work', 'internet']

//allowing me to pull the randomWord easily
let currentWord;

const button1 = document.querySelector('#btn');

const button2 = document.querySelector('#btnReady');

const button3 = document.querySelector('#btnTwo');

const screenOne = document.querySelector('#screen-one');

const screenTwo = document.querySelector('#screen-two');

const threeA = document.querySelector('#threeA');

const canvasOnly = document.querySelector('#threeA1');

const threeB = document.querySelector('#threeB');

const threeC = document.querySelector('#threeC');

const win = document.querySelector('#youWon');

const lose = document.querySelector('#youLose');

const buttonGuess = document.querySelector('#guessInput');

const buttonRoundWin = document.querySelector('#roundOne');

const buttonRoundLose = document.querySelector('#roundTwo');

const alert = document.querySelector('#alert');

let view = 'ready player two';

let timerId;

let counter1 = document.querySelector('#counter1');

let counter2 = document.querySelector('#counter2');

//general hidding
screenTwo.style.display = "none";
threeA.style.display = "none";
canvasOnly.style.display = "none";
threeB.style.display = "none";
threeC.style.display = "none";
win.style.display = "none";
lose.style.display = "none";
alert.style.display = "none";

  //button1 starting
button1.addEventListener('click', function(){
  screenOne.style.display = "none";
  screenTwo.style.display = "block";
})

//the logic of button1-> player 1 -> activate random word
const randomWord = function(){
  currentWord = roulette[Math.floor(Math.random() * roulette.length +1)];
  const wordSpace = document.querySelector('#wordSpace');
  let word = wordSpace.innerHTML + " → " + currentWord;
  wordSpace.innerHTML = word.toUpperCase();
}

//changing screening when moving "screens" in player2 to avoid counter problems
function counterView() {
  if (view === "ready player two"){
    threeA.style.display = "none";
    canvasOnly.style.display = "none";
    threeB.style.display = "block";
    threeC.style.display = "none";
  } else {
    lose.style.display = "block";
    threeC.style.display = "none";
    canvasOnly.style.display = "none";
    let wordLose = finalLose.innerHTML + " " + currentWord;
    finalLose.innerHTML = wordLose.toUpperCase();
  }
}
//globel time
let timeLeft = 10;
//////counter----- tutorial from https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
function countdown(counter) {
  //console.log("counting")
  if (timeLeft === 0) {
    counter.innerHTML = timeLeft;
    clearTimeout(timerId);
    counterView();
    timeLeft = 5;
  } else {
    counter.innerHTML = timeLeft;
    timeLeft--;
  }
}
//starting player one FUN part
button2.addEventListener('click', function(){
  screenTwo.style.display= "none";
  threeA.style.display = "block";
  canvasOnly.style.display = "block";
  threeC.style.display = "none";
  threeB.style.display = "none";
  randomWord();
  //this allow me to run counter within the function without interfering with what is 'block' or 'none'
  view = 'ready player two'
  countdown(counter1);
  timerId = setInterval(function(){countdown(counter1)}, 1000);
})

////////canvas/////
/// tutorial from here: http://www.mattmorgante.com/technology/javascript-draw-html5-canvas
  let canvas = document.querySelector('#canvas');
  // could be 3d, if i want to make a video game
  let context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 8;
  context.strokeStyle = '#000';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
    // stop the function if they are not mouse down
    if(!isDrawing) return;
    //listen for mouse move event
    console.log(e);
    context.beginPath();
    context.moveTo(lastX, lastY);
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
//////end of Canvas //////

//moving to second player!
button3.addEventListener('click', function(){
  view = 'win screen';
  timerId = setInterval(function(){countdown(counter2)}, 1000);
  threeB.style.display = "none";
  threeC.style.display = "block";
  threeA.style.display = "none";
  canvasOnly.style.display = "block";

  //canvas.removeEventListener('mousedown', draw, true);
  })

//player2 guess- press input//
let final = document.querySelector('#wordSpaceTwo');
let finalLose = document.querySelector('#wordSpaceThree');
let input = document.querySelector('#guess');

buttonGuess.addEventListener('click', function(){
  //clearTime
  clearTimeout(timerId);
  //equal word by uppercase - to make sure that they will always be equal
  if (input.value.toUpperCase() === currentWord.toUpperCase()){
    //console.log('you were correct');
    let finalWord = final.innerHTML + " " + currentWord;
    final.innerHTML = finalWord.toUpperCase();
    win.style.display = "block";
    threeC.style.display = "none";
    canvasOnly.style.display = "none";
  } else {
    lose.style.display = "block";
    threeC.style.display = "none";
    canvasOnly.style.display = "none";
    let wordLose = finalLose.innerHTML + " " + currentWord;
    finalLose.innerHTML = wordLose.toUpperCase();
  }
})
//refreshing
buttonRoundWin.addEventListener('click', function() {
  screenOne.style.display = "block";
  win.style.display = "none";
  location.reload();
})
buttonRoundLose.addEventListener('click', function() {
  screenOne.style.display = "block";
  lose.style.display = "none";
  location.reload();
})







///////
////drafts///

//////////////
///timer 1///
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

///////////
///timer 2///////
///////////////
//countdown from stackoverflow tutorial: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
// function startTimer(duration, display) {
//     let timer = duration, seconds;
//     setInterval(function () {
//       seconds = parseInt(timer % 60, 10);
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//       display.textContent = seconds;
//       // if (--timer < 0) {
//       //  timer = duration;
//        //starting to work on connecting to page four- user 2-->>
//         if(timer === 0) {
//           screenThree.style.display = "none";
//           screenFour.style.display = "block";
//       }
//     }, 1000);
// }
// window.onload = function () {
//   let thirtySec = 10 * 3,
//   display = document.querySelector('#counter');
//   startTimer(thirtySec, display);
// };


// ////////////////////////////////
// /////canvas 1//////////////
// //////////////////
// //tutorial from here: http://www.mattmorgante.com/technology/javascript-draw-html5-canvas
//
// // let canvas = document.querySelector('#canvas');
// // let context = canvas.getContext('2d');
// // prevX =0;
// // prevY = 0;
// // currX = 0;
// // currY = 0;
// // canvas.height = window.innerHeight / 1.3; //double assign?
// // canvas.width = window.innerWidth;
// // context.lineJoin = 'round';
// // context.lineCap = 'round';
// // context.lineWidth = 10;
// // context.strokeStyle = "#fff";
// //
// // let isDrawing = false;
// // let lastX = 0;
// // let lastY = 0;
// //
// // function draw(e){
// //   //stop function if they're not mousedown
// // if(!isDrawing)return;
// //   console.log(e);
// //   context.beginPath();
// //   context.moveTo(prevX, prevY);
// //   context.lineTo(currX, currY);
// //   context.stroke();
// //   context.closePath();
// //   // [lastX, lastY] = [e.offsetX, e.offsetY];
// // }
// //
// // canvas.addEventListener('mousedown', (e) => {
// //   isDrawing = true;
// //   [lastX, lastY] = [e.offsetX, e.offsetY];
// // });
// //
// // canvas.addEventListener('mousemove', draw);
// // canvas.addEventListener('mouseup', () => isDrawing = false);
// // canvas.addEventListener('mouseout', () => isDrawing = false);
//
// // this is from medium: https://medium.com/@jagadeshanh/html5-canvas-click-and-draw-f665e02f5744
//
// // let canvas = document.querySelector('#canvas');
// // let context = canvas.getContext('2d');
// // let height = canvas.height = window.innerHeight / 1.3; //double assign?
// // let width = canvas.width = window.innerWidth / 2;
// // let mouseClicked = false, mouseReleased = true;
// // document.addEventListener('click', onMouseClick, false);
// // document.addEventListener('mousemove', onMouseMove, false);
// //
// // function onMouseClick(e) {
// //     mouseClicked = !mouseClicked;
// // }
// //
// // function onMouseMove(e) {
// //     if (mouseClicked) {
// //         context.beginPath();
// //         context.moveTo(x,y);
// //         context.arc(e.clientX, e.clientY, 3.5, 0, Math.PI * 2, false);
// //         context.lineWidth = 4;
// //         context.fillStyle = "#fff";
// //         context.fill();
// //     }
// // }

// // /////// canvas 3 //////
// //tutorial from https://codepen.io/medo001/pen/FIbza?editors=1010
//
//
// // let canvas = document.querySelector('#canvas');
// // let context = canvas.getContext('2d');
// // prevX =0;
// // prevY = 0;
// // currX = 0;
// // currY = 0;
// // canvas.height = window.innerHeight / 1.3; //double assign?
// // canvas.width = window.innerWidth;
// // context.lineJoin = 'round';
// // context.lineCap = 'round';
// // context.lineWidth = 8;
// // context.strokeStyle = "#fff";
// // let flag =false;
// //
// // let isDrawing = false;
// // let lastX = 0;
// // let lastY = 0;
// //
// // function draw(e){
// //   //stop function if they're not mousedown
// // // if(!isDrawing)return;
// //   console.log(e);
// //   context.beginPath();
// //   context.moveTo(prevX, prevY);
// //   context.lineTo(currX, currY);
// //   context.stroke();
// //   context.closePath();
// // }
// //
// // canvas.addEventListener('mousemove', function(e) {
// //       findxy('move', e)
// //   }, false);
// //
// //   canvas.addEventListener('mousedown', function(e) {
// //       findxy('down', e)
// //   }, false);
// //   canvas.addEventListener('mouseup', function(e) {
// //       findxy('up', e)
// //   }, false);
// //   canvas.addEventListener('mouseout', function(e) {
// //       findxy('out', e)
// //   }, false);
// //
// // function findxy(res, e) {
// //     if (res == 'down') {
// //         prevX = currX;
// //         prevY = currY;
// //         currX = e.clientX - canvas.offsetLeft;
// //         currY = e.clientY - canvas.offsetTop;
// //
// //
// //         flag = true;
// //         dot_flag = true;
// //         if (dot_flag) {
// //         context.beginPath();
// //         //context.fillStyle = x;
// //         context.fillRect(currX, currY, 2, 2);
// //         context.closePath();
// //         dot_flag = false;
// //       }
// //     }
// //     if (res == 'up' || res == "out") {
// //       flag = false;
// //     }
// //     if (res == 'move') {
// //       if (flag) {
// //         prevX = currX;
// //           prevY = currY;
// //           currX = e.clientX - canvas.offsetLeft;
// //           currY = e.clientY - canvas.offsetTop;
// //           draw();
// //         }
// //       }
// //     }
