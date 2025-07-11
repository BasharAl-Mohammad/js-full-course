            const score = JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};
            updateScoreElement();

            function pickComputerMove() {
                let computerMove = '';

                const randomNumber = Math.random();
                if(randomNumber >= 0  && randomNumber < 1/3 ) {
                    computerMove = 'rock';
                } else if (randomNumber >= 1/3  && randomNumber < 2/3) {
                    computerMove = 'paper';

                } else if (randomNumber >= 2/3  && randomNumber < 1) {
                    computerMove = 'scissors';

                }

                return computerMove;
            }

            function playGame (playerMove) {
                const computerMove = pickComputerMove();

                let result = '';

                if (playerMove == 'scissors') {
                  if (computerMove === 'rock') {
                        result = 'You lose.';
                    } else if (computerMove === 'paper') {
                        result = 'You win.';
                    } else if (computerMove === 'scissors') {
                        result = 'Tie.';
                    }
                } else if (playerMove == 'paper') {
                    if (computerMove === 'rock') {
                        result = 'You win.';
                    } else if (computerMove === 'paper') {
                        result = 'Tie.';
                    } else if (computerMove === 'scissors') {
                        result = 'You lose.';
                    }
                } else if (playerMove == 'rock') {
                    if (computerMove === 'rock') {
                        result = 'Tie.';
                    } else if (computerMove === 'paper') {
                        result = 'You lose.';
                    } else if (computerMove === 'scissors') {
                        result = 'You win.';
                    }
                }

                if(result.includes('win')) {
                    score.wins++;
                } else if (result.includes('lose')) {
                    score.losses++;
                } else if (result.includes('Tie')) {
                    score.ties++;
                }

                localStorage.setItem('score', JSON.stringify(score));
                updateScoreElement();

                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You <img src="img/${playerMove}-emoji.png" alt="" class="move-icon"><img src="img/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
            }

            function resetScore() {
                score.wins=0;
                score.losses=0;
                score.ties=0;
                localStorage.removeItem('score');
                updateScoreElement();
            }

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }