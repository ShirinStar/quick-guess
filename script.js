// console.log('script conected!');

const roulette = ['adult', 'animal', 'apple', 'art', 'artist', 'attorney', 'arm', 'American', 'article', 'bank', 'baby', 'bag', 'ball', 'bank', 'bar', 'black', 'blood', 'body', 'book', 'box', 'banana', 'boy', 'building', 'cancer', 'car', 'card', 'cell', 'center', 'chair', 'child', 'church', 'cold', 'computer', 'country', 'couple', 'crime', 'cup', 'cut', 'dark', 'dead', 'degree', 'dog', 'cat', 'door', 'down', 'draw', 'dream', 'drug', 'eat', 'eight', 'everybody', 'eye', 'face', 'family', 'father', 'film', 'finger', 'fire', 'first', 'fish', 'five', 'floor', 'follow', 'food', 'friend', 'game', 'garden', 'girl', 'gun', 'guy', 'hair', 'half', 'hand', 'happy', 'hear', 'heart', 'heavy', 'here', 'hit', 'hospital', 'image', 'key', 'kid', 'language', 'laugh', 'letter', 'light', 'list', 'long', 'live', 'love', 'low', 'machine', 'man', 'marriage', 'memory', 'money', 'morning', 'mouth', 'ear', 'movie', 'network', 'newspaper', 'night', 'nothing', 'number', 'ok', 'open', 'painting', 'paper', 'party', 'phone', 'piece', 'picture', 'plane', 'police', 'radio', 'room', 'sea', 'skull', 'somebody', 'size', 'song', 'star', 'moon', 'sun', 'black-hole', 'step','time', 'top', 'tree', 'flower', 'bee', 'cow', 'horse', 'monkey', 'zebra', 'TV', 'up', 'wait', 'wall', 'water', 'white', 'window', 'wish', 'woman', 'world', 'yes', 'no', 'elephant', 'giraffe', 'lion', 'kiss', 'holding-hands', 'coffee', 'breakfast', 'phone', 'tea', 'pen', 'train', 'robot', 'email', 'dance', 'teacher', 'floor-lamp', 'power-socket', 'strawberry', 'blueberry', 'pizza', 'french-fries', 'sky', 'harmony', 'street', 'sunday', 'rocket', 'superhero', 'hamburger', 'clock', 'naked', 'attention', 'nobody', 'shelter', 'trump', 'war', 'island', 'beach', 'football', 'mosquito', 'rat', 'trash', 'grapes', 'maybe', 'starting-point', 'button', 'box', 'empty', 'elevator', 'out-of-space', 'burrito', 'ramen-soup', 'headphones', 'park', 'homeless', 'cheese', 'tent', 'bed', 'birthday', 'font', 'text', 'work', 'internet']

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
let view = 'ready player two';
let timerId;
let counter1 = document.querySelector('#counter1');
let counter2 = document.querySelector('#counter2');
let player1 = 1;

//general hidding
screenTwo.style.display = "none";
threeA.style.display = "none";
canvasOnly.style.display = "none";
threeB.style.display = "none";
threeC.style.display = "none";
win.style.display = "none";
lose.style.display = "none";

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
let timeLeft = 30;
//////counter----- tutorial from https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
function countdown(counter) {
  //console.log("counting")
  if (timeLeft === 0) {
    counter.innerHTML = timeLeft;
    clearTimeout(timerId);
    counterView();
    timeLeft = 15;
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
// console.log(window.innerWidth);
if (window.innerWidth < 721 ){
  canvas.width = 450
  canvas.height = 650
} else {
  canvas.width = 950
  canvas.height = 650
}
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 6;
context.strokeStyle = '#000';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let touchX;
let touchY;

function draw(e) {
  if (player1 === 1){
    // stop the function if they are not mouse down
    if(!isDrawing) return;
    //listen for mouse move event
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  }
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

///touchscreen tutorial from here: http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
canvas.addEventListener('touchstart', function(e){
  e.preventDefault();
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener('touchmove', function(e) {
  e.preventDefault();
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent('mousemove', {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener('touchend', function(e){
  e.preventDefault();
  let mouseEvent = new MouseEvent('mouseup',{});
  canvas.dispatchEvent(mouseEvent);
}, false)
// function getTouchPos(canvasDom, touchEvent) {
//   // let rect = canvasDom.getBoundingClientRect();
//   return{
//     x: touchEvent.touches[0].clientX-rect.left,
// //     y: touchEvent.touches[0].clientY-rect.top
// }
//////end of Canvas //////

//moving to second player!
button3.addEventListener('click', function(){
  view = 'win screen';
  timerId = setInterval(function(){countdown(counter2)}, 1000);
  threeB.style.display = "none";
  threeC.style.display = "block";
  threeA.style.display = "none";
  canvasOnly.style.display = "block";
  player1++;
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

input.addEventListener('keyup', function(e){
  if (e.keyCode === 13) {
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
