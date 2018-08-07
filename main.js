// window initialize
window.addEventListener('load',init);

// Available levels
const levels = {
    easy : 5,
    medium : 3,
    hard : 2
}

// globals
const currentLevel = levels.medium;
let time = currentLevel;
let score =0;
let isPlaying; 

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Word array 
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];
  
  // initialize game
  function init(){
      console.log("loaded ...");
      seconds.innerHTML = currentLevel;
      // load words array
      showWord(words);
      // start matching word input
      wordInput.addEventListener('input',startMatch);
      // call countdown every second
      setInterval(countDown, 1000);
      // check status
      setInterval(checkStatus,50);
  }

  // show words
  function showWord(words){
      // Generate random index
      var randIndex = Math.floor(Math.random() * words.length);
     // output random word
      currentWord.innerHTML = words[randIndex];
      console.log("current word is "+words[randIndex]);
  }

  // count down
  function countDown(){
      if(time > 0){
          // Decrement the time
          time--;
      }else{
          // Game over
          isPlaying = false;
      }
      // Show time
      timeDisplay.innerHTML = time;
  }

  // Check status
  function checkStatus(){
      if(!isPlaying && time === 0){
          message.innerHTML = "Game Over!";
          score = -1;
      }
  }

// start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

// match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct";
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}
