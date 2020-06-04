const hands = [...document.querySelectorAll('.select img')];

const game = {
  playerChoice: "",
  computerChoice: "",
}

const gameSummary = {
  rounds: 0,
  wins: 0,
  losses: 0,
  draws: 0,
 }
  
 // Function for player choice
 function playerHandSelection() {
   game.playerChoice = this.dataset.option
   //console.log(game.playerChoice);
   hands.forEach(hand => hand.style.boxShadow = '');
   this.style.boxShadow = '0 0 0 4px red';
 }
 
 // const playerHandSelection = (e) => {
 //  // this - nie tworzy
 //  console.log(e.target);
 //  console.log(e.currentTarget);
 // }
 
 // Function for computer choice
 function computerHandSelection() {
   return hands[Math.floor(Math.random() * 3)].dataset.option;
 }
 
 // Function for the game result
 function checkResult(player, computer) {
  if (player === computer) {
    return 'draw';
    } else if ((player === "paper" && computer === "rock") || 
               (player === "rock" && computer === "scissors") || 
               (player === "scissors" && computer === "paper")) {
      return 'win';
   } else { return 'loss'; }
 }
 
 // Showing results
 function publishResult(player, computer, result) {
   document.querySelector('[data-summary="your-choice"]').textContent = player;
 
   document.querySelector('[data-summary="computer-choice"]').textContent = computer;
 
   document.querySelector('p.rounds span').textContent = ++gameSummary.rounds;
 
   if (result === "win") {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "You won!!!!"
    document.querySelector('[data-summary="who-win"]').style.color = "green";
   } else if (result === "loss") {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = "Computer won :("
    document.querySelector('[data-summary="who-win"]').style.color = "red";
   } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Draw :\\"
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
   }
 }
 
 function endGame() {
   document.querySelector(`[data-option="${game.playerChoice}"]`).style.boxShadow = "";
   game.playerChoice = "";
   game.computerChoice = "";
 }

 //Main function
 function startGame() {
   if (!game.playerChoice) {
    return alert("Choose your move!!!!");
   }
   game.computerChoice = computerHandSelection();
   const gameResult = checkResult(game.playerChoice, game.computerChoice);
   //console.log(gameResult);
   publishResult(game.playerChoice, game.computerChoice, gameResult);
   endGame()
 }
 
 hands.forEach(hand => hand.addEventListener('click', playerHandSelection))
 
 document.querySelector('.start').addEventListener('click', startGame)
 
 