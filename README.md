# draw-guess
## Project Description
draw-guess is a game for two, where one player gets a random word to draw in 30 sec, and the second user needs to guess what the word was based on the drawing. 

test the project here: https://shirinstar.github.io/quick-guess/

## wireframes
Here is the initial thinking of how I started, the idea was to focus on simple and intutive user experience that support such a game:

wireframes of desktop, mobile and during the process: 
![alt during the process](https://i.imgur.com/5GOZSE8.png)

## MVP
- a game for two players, pushing for mobile first
- player one receives random word
- two separate counters for each of the players
- player one draw with her/his finger/mouse on the canvas
- player two needs to guess the word player one received
- the game check for a match between player two guess's to the random word player one received

## post MVP
- fix responsiveness on mobile + adjust to different versions (Android, etc)
- add more colors and brushes to the canvas
- switch player feature
- times-up alert
- connect via different devices on the same network
- random words via online data

## Additional Libraries
Javascript, ,HTML, canvas HTML, CSS

## Code Snippet
This project uses a lot of DOM, through "none" - "block" <div> elements from one HTML page. I loved working using this logic, creating a more flexible and dynamic project. For example:
```
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
```
 Also, learned about HTML Canvas, used counters, Math.random to generate Random words from ore-exsited Array and worked with CSS animation and flex-box.   

## Issues and Resolutions
One of the biggest problems I encountered in this project was to connect the canvas to the touch screen of the mobile device. Before starting I was sure that the connection between the mouse and the movement of the finger would be similar and simple, but I was wrong it took me a while to find the solution for this problem, part of it was taken from this tutorial: http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
```
canvas.addEventListener('touchstart', function(e){
  e.preventDefault();
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
```

## acknowledgements
This project was made thanks to Brian Flynn (!), Jason Karlin and Drake Talley from General Assembley. 

thank you, 
~shirin
