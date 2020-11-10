const game = () =>{
let  pScore = 0
let cScore = 0

//Oyunu başlat
const startGame = () =>{
const playBtn = document.querySelector('.intro button')
const introScreen = document.querySelector('.intro')
const match = document.querySelector('.match')

playBtn.addEventListener('click',()=>{
    introScreen.classList.add('fadeOut')
    match.classList.add('fadeIn')
    
});
};
//Oyuna başla
const playMatch = () =>{
  const options = document.querySelectorAll('.options button')
  const playerHand = document.querySelector('.player-hand')
  const computerHand = document.querySelector('.computer-hand')
  const hands = document.querySelectorAll('.hands img')

    //Bilgisayarın seçenekleri
   const computerOptions = ['rock','paper','scissors']
    const playerOptions = ['rock','paper','scissors']
options.forEach(option =>{

    option.addEventListener('click',()=>{
        const computerNumber = Math.floor(Math.random()*computerOptions.length)
         const computerChoise = computerOptions[computerNumber]
         
         const playerNumber = Math.floor(Math.random()*playerOptions.length)
         const playerChoise = playerOptions[playerNumber]

          compareHands(playerChoise,computerChoise)

       playerHand.src =`./assets/${playerChoise}.png`;
       computerHand.src = `./assets/${computerChoise}.png`;

    });
 });     
};

const updateScore = () =>{
    const playerScore = document.querySelector('.player-game p')
    const computerScore = document.querySelector('.computer-game p')

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}



const compareHands = (playerChoise,computerChoise) =>{
  const winner = document.querySelector('.winner')
  if(playerChoise === computerChoise){
      winner.textContent = 'berabere'
      return;
  };
 // taş seçerse
  if(playerChoise === 'rock'){
      if(computerChoise === 'scissors'){
          winner.textContent = 'Sen Kazandın'
          pScore++
          updateScore()
          return;
      }else{
          winner.textContent = 'Rakip Kazandı '
          cScore++
          updateScore()
          return;
      };
  };
  // kağıt seçerse
  if(playerChoise === 'paper'){
    if(computerChoise === 'scissors'){
        winner.textContent = 'Rakip Kazandı'
        cScore++
        updateScore()
        return;
    }else{
        winner.textContent = 'Sen Kazandın '
        pScore++
        updateScore()
        return;
    }
 }
   // Makas seçerse
   if(playerChoise === 'scissors'){
    if(computerChoise === 'rock'){
        winner.textContent = 'Rakip Kazandı'
        cScore++
        updateScore()
        return;
    }else{
        winner.textContent = 'Sen Kazandın'
        pScore++
        updateScore()
        return;
    }
}

}
//Fonksiyonları çağır
startGame();
playMatch();

};
game()