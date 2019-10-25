import Blackjack from "_blackjack-dealer-logic";


export default () =>{

    alert("Welcome to the Table!")
    alert("Press Play to Begin")

    const game = Blackjack.singleDeckGame;
    const gameIsRunning = true;
    const standButton = document.getElementById("btn-stand")
    const app = document.getElementById("app")
    const playButton = document.getElementById("btn-play")
    const hitButton = document.getElementById("btn-hit")
}

playButton.onClick = function(){
    document.getElementById("text")
    text.innerText = "The Ammount of Money in your Wallet: $(game.getUserChips())"
    const wager = window.prompt("Enter your Wager:");
    game.receiveAnte(wager)
    document.write(`Your Wager is: ${wager}`)
    game.deal()
    document.write(`Dealer is Showing: ${game.getDealerCardUp()}`)
    document.write(`Your Current hand: ${game.getUserHandValue()}`)
}

