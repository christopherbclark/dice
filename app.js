/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var totalScore, scores, roundScores, activePlayer;
var scoreInput, winningScore;
var diceTotal;
var gamePlaying = true;


init();

//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em><b>' + dice + '</em></b>';

//var X = document.querySelector('#score-0').textContent;
//console.log(X);


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {


            //1. Random Number
    //***********************************************************/
      dice = Math.floor(Math.random() * 6) + 1;
      dice2 = Math.floor(Math.random() * 6) + 1;
      scores = scores + 1
      oldRoll[scores - 1] = dice;

      if (scores >= 2) {
        previousRoll = oldRoll[scores - 2];
      }
      

      
      //***********************************************************/
  
      //2. Display the result.
      var diceDOM = document.getElementById('dice-1');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      var diceDOM2 = document.getElementById('dice-2');
      diceDOM2.style.display = 'block';
      diceDOM2.src = 'dice-' + dice2 + '.png';
  
      diceTotal = dice + dice2;

      //3. Update the round score IF the number rolled was NOT a 1.
  
      if (dice !== 1 && dice2 !== 1) {
          //Do something if the Dice is NOT 1
          roundScores += diceTotal;
          document.querySelector('#current-' + activePlayer).textContent = roundScores;
      }
      else {
            //Next player
            alert('OH NO! You rolled a 1.');
            console.log(dice, dice2);
            nextPlayer();
      }
      }
    });

// Clicking on the "hold score" button:

document.querySelector('.btn-hold').addEventListener('click', function() {
if (gamePlaying) {


//Setting the Winning Score



    totalScore[activePlayer] += roundScores;
    document.querySelector('#score-' + activePlayer).textContent = totalScore[activePlayer];

// if else statement to check if player won the game


scoreInput = document.querySelector('.final-score').value;
console.log(scoreInput);
if (scoreInput) {
    winningScore = scoreInput;
} else {
    winningScore = 100;
}

if (totalScore[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
} else {
nextPlayer();
}
}
});
  
//nextPlayer function
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0; 
    scores = 0;
    previousRoll = 0;
    oldRoll = [];
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

//new game button aynon function

document.querySelector('.btn-new').addEventListener('click', init);

//init function

function init() {
    totalScore = [0,0]
    gamePlaying = true;
    scores = 0;
    previousRoll = 0;
    oldRoll = [];
    roundScores = 0;
    activePlayer = 0;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('#score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}