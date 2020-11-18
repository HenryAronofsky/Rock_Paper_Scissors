class PlayRockPaperScissor {
	constructor(player, ai) {
		this.playerChoice = player;
		this.aiChoice = ai;
	}

	playerTurn(choice) {
		if (chosen === false) {
			chosen = true;
			this.playerChoice = choice;
		} else {
			return;
		}
	}

	aiTurn() {
		let thisChoice = this;
		var i = 0;
			var displayInterval = setInterval(function() {
				i++;
				var choices = ['rock', 'paper', 'scissor'];
					choices.forEach(function(reset) {
						var identifier = document.querySelector("#" + reset);
						identifier.style.visibility = "hidden"
					});
				var random = Math.floor(Math.random() * choices.length)
				var flashChoice = choices[random];
				var flashPic = document.querySelector('#' + flashChoice);
				flashPic.style.visibility = "visible";
				setTimeout(function() {
					if (i >= 20) {
						clearInterval(displayInterval);
							document.querySelectorAll('.enemyChoices').forEach(function(enemyChoice) {
								var aiChoiceStyle = window.getComputedStyle(enemyChoice).getPropertyValue("visibility");
								if (aiChoiceStyle === "visible") {
									var finalChosen = enemyChoice.id;
	
									thisChoice.aiChoice = finalChosen;
									thisChoice.winnerCalculator();
								}
							});
					} else {
						flashPic.style.visibility = "hidden";
					}
				}, 100);
			}, 120);
	}

	winnerCalculator() {
		var status;
		if (this.aiChoice === this.playerChoice) {
			status = "Tie"; 
		} else {
			if (this.playerChoice === "scissor" && this.aiChoice === "paper") {
				status = "You Win";
			} else if (this.playerChoice === "rock" && this.aiChoice === "scissor") {
				status = "You Win";
			} else if (this.playerChoice === "paper" && this.aiChoice === "rock") {
				status = "You Win";
			} else {
				status = "Ai Wins";
			}
		}
		alert(status)
		chosen = false;
		rock.classList.remove('selected');
		paper.classList.remove('selected');
		scissor.classList.remove('selected');
			rock.classList.add('hoverFunction');
			paper.classList.add('hoverFunction');
			scissor.classList.add('hoverFunction');
	}
}

const rock = document.querySelector('#playerRock');
const paper = document.querySelector('#playerPaper');
const scissor = document.querySelector('#playerScissor');

var Play = new PlayRockPaperScissor(" ", " ");

var chosen = false;

rock.addEventListener('click', function() {
	if (chosen === false) {
		rock.classList.add('selected');
			rock.classList.remove('hoverFunction');
			paper.classList.remove('hoverFunction');
			scissor.classList.remove('hoverFunction');
				Play.playerTurn("rock");
				Play.aiTurn();
	}
});

scissor.addEventListener('click', function() {
	if (chosen === false) {
		scissor.classList.add('selected');
			rock.classList.remove('hoverFunction');
			paper.classList.remove('hoverFunction');
			scissor.classList.remove('hoverFunction');
				Play.playerTurn("scissor");
				Play.aiTurn();
	}
});

paper.addEventListener('click', function() {
	if (chosen === false) {
		paper.classList.add('selected');
			rock.classList.remove('hoverFunction');
			paper.classList.remove('hoverFunction');
			scissor.classList.remove('hoverFunction');
				Play.playerTurn("paper");
				Play.aiTurn();
	}
});






