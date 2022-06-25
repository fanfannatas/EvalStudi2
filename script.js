
// nom des joueurs
var player1 = "Player 1";
var player2 = "Player 2";

// changer le nom des joueurs
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    //document.querySelector("p.player-name un").innerHTML = player1;
    //document.querySelector("p.player-name deux").innerHTML = player2;
    document.getElementById('name-0').textContent = player1;
    document.getElementById('name-1').textContent = player2;
}


// declaration des variables et initialisation de  la partie
var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying;
init();

// j ecoute la fonction annonyme avec addlistener 
document.querySelector('.btn-roll').addEventListener('click', function () {

  // logique partie
  if (gamePlaying) {

    //tirages des dés
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

        // affichage du resultat
    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    
        // si le joueur tire deux 6 il perd ses points
    if(dice1 === 6 && prevDiceRoll === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
      } else if (dice1 !== 1 && dice2 !== 1) {
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
        // tour de l autre joueur
        nextPlayer();
    }

    // Saving the previous dice roll on a variable 
    prevDiceRoll = dice1;

  }

});

// stocker les scores avec hold onclick 
document.querySelector('.btn-hold').addEventListener('click', function () {

  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
// je choisi abitrairement qu'il faut  40 points pour gagner 
    var input = document.getElementById('winningScore').value;
    var winningScore;

    if(input) {
      winningScore = input;
    } else {
      winningScore = 40;
    }

    // Check si ya un gagnant
    if (scores[activePlayer] >= winningScore) {

      // je change le nom du gagnant par bravo victoire
      document.querySelector('#name-' + activePlayer).textContent = 'bravo victoire!';
      document.getElementById('dice1').style.display = 'none';
      document.getElementById('dice2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

      // remise a zero pour une nouvelle partie
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
      } else {
      nextPlayer();
    }
  }
});

// nouvelle partie boutton => 'New Game' 
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
  gamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
//reset de tout les parametres pour une nouvelle parie
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';

}