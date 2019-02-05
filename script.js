console.log('script conected!');


const roulette = ['adult', 'animal', 'apple', 'art', 'artist', 'attorney', 'arm', 'American', 'article', 'bank', 'baby', 'bag', 'ball', 'bank', 'bar', 'black', 'blood', 'body', 'book', 'box', 'banana', 'boy', 'building', 'cancer', 'car', 'card', 'cell', 'center', 'chair', 'child', 'church', 'cold', 'computer', 'country', 'couple', 'crime', 'cup', 'cut', 'dark', 'dead', 'degree', 'dog', 'cat', 'door', 'down', 'draw', 'dream', 'drug', 'eat', 'eight', 'everybody', 'eye', 'face', 'family', 'father', 'film', 'finger', 'fire', 'first', 'fish', 'five', 'floor', 'follow', 'food', 'friend', 'game', 'garden', 'girl', 'gun', 'guy', 'hair', 'half', 'hand', 'happy', 'hear', 'heart', 'heavy', 'here', 'hit', 'hospital', 'image', 'key', 'kid', 'language', 'laugh', 'letter', 'light', 'list', 'long', 'live', 'love', 'low', 'machine', 'man', 'marriage', 'memory', 'money', 'morning', 'mouth', 'ear', 'movie', 'network', 'newspaper', 'night', 'nothing', 'number', 'ok', 'open', 'painting', 'paper', 'party', 'phone', 'piece', 'picture', 'plane', 'police', 'radio', 'room', 'sea', 'skull', 'somebody', 'size', 'song', 'star', 'moon', 'sun', 'black-hole', 'step','time', 'top', 'tree', 'flower', 'bee', 'cow', 'horse', 'monkey', 'zebra', 'TV', 'up', 'wait', 'wall', 'water', 'white', 'window', 'wish', 'woman', 'world', 'yes', 'no', 'elephant', 'giraffe' ]

const start = document.querySelector('#btnReady');
const wordSpace = document.querySelector('#wordSpace');

start.addEventListener('click', function(){
  console.log('click');
  let randomWord = math.floor(math.random() * roulette.length + 1);
  let word = roulette[randomWord];
  wordSpace.innerHTML = word;

});
