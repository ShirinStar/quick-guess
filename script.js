console.log('script conected!');

//countdown from stackoverflow tutorial: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, display) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
         timer = duration;
     }
 }, 1000);
}
window.onload = function () {
    let twentySec = 10 * 2,
        display = document.querySelector('#counter');
    startTimer(twentySec, display);
};
/////

let roulette = ['adult', 'animal', 'apple', 'art', 'artist', 'attorney', 'arm', 'American', 'article', 'bank', 'baby', 'bag', 'ball', 'bank', 'bar', 'black', 'blood', 'body', 'book', 'box', 'banana', 'boy', 'building', 'cancer', 'car', 'card', 'cell', 'center', 'chair', 'child', 'church', 'cold', 'computer', 'country', 'couple', 'crime', 'cup', 'cut', 'dark', 'dead', 'degree', 'dog', 'cat', 'door', 'down', 'draw', 'dream', 'drug', 'eat', 'eight', 'everybody', 'eye', 'face', 'family', 'father', 'film', 'finger', 'fire', 'first', 'fish', 'five', 'floor', 'follow', 'food', 'friend', 'game', 'garden', 'girl', 'gun', 'guy', 'hair', 'half', 'hand', 'happy', 'hear', 'heart', 'heavy', 'here', 'hit', 'hospital', 'image', 'key', 'kid', 'language', 'laugh', 'letter', 'light', 'list', 'long', 'live', 'love', 'low', 'machine', 'man', 'marriage', 'memory', 'money', 'morning', 'mouth', 'ear', 'movie', 'network', 'newspaper', 'night', 'nothing', 'number', 'ok', 'open', 'painting', 'paper', 'party', 'phone', 'piece', 'picture', 'plane', 'police', 'radio', 'room', 'sea', 'skull', 'somebody', 'size', 'song', 'star', 'moon', 'sun', 'black-hole', 'step','time', 'top', 'tree', 'flower', 'bee', 'cow', 'horse', 'monkey', 'zebra', 'TV', 'up', 'wait', 'wall', 'water', 'white', 'window', 'wish', 'woman', 'world', 'yes', 'no', 'elephant', 'giraffe' ]

let start = document.querySelector('#btnReady');
let wordSpace = document.querySelector('#wordSpace');

//my button is a null...trying to load the DOM before moving on..
document.addEventListener('DOMContentLoaded', function() {
start.addEventListener('click', (ev) => {
  return start;
  //debugger;
  //console.log('click');
  let randomWord = Math.floor(Math.random() * roulette.length + 1);
  word = roulette[randomWord];
  wordSpace.innerHTML = word;
})
})

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
