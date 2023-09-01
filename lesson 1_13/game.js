const game = (function() {
  let userScore = 0;
  let computerScore = 0;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getPlayerChoice() {
    return prompt("Выберите: камень, ножницы или бумагу").toLowerCase();
  }

  function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = getRandomIntInclusive(0, 2);
    return choices[randomIndex];
  }

  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return alert("Ничья!");
    } else if (
      (playerChoice === "камень" && computerChoice === "ножницы") ||
      (playerChoice === "ножницы" && computerChoice === "бумага") ||
      (playerChoice === "бумага" && computerChoice === "камень")
    ) {
      userScore++;
      return alert(`Вы выиграли! Вы выбрали ${playerChoice}, а компьютер выбрал ${computerChoice}.`);
    } else {
      computerScore++;
      return alert(`Вы проиграли! Вы выбрали ${playerChoice}, а компьютер выбрал ${computerChoice}.`);
    }
  }

  function startGame() {
    const userChoice = getPlayerChoice();
    if (userChoice === null) {
      const confirmExit = confirm("Вы уверены, что хотите выйти из игры?");
      if (confirmExit) {
        console.log(`Итоговый счет: Игрок - ${userScore}, Компьютер - ${computerScore}`);
        return;
      } else {
        startGame();
      }
    } else {
      const computerChoice = getComputerChoice();
      const result = playRound(userChoice, computerChoice);
      console.log(result);
      startGame();
    }
  }

  return {
    start: function() {
      console.log("Игра началась!");
      startGame();
    },
  };
})();