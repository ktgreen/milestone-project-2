// -timer, -score, -shuffle

var gridItemOne, gridItemTwo;

// constructor for game
class MemoryGame {
    constructor(startTime, gridItems) {
        // card array
        this.itemsArray = gridItems;
        // seconds on clock
        this.startTime = startTime;
        // time left on clock countdown
        this.timeLeft = startTime;
        // pull time from id
        this.timer = $("#time-left")[0];
        // pull score from id
        this.score = $("#correct-answers")[0];
    }
    startGame() {        // check card
        this.gridItemCheck = null;
        // set score to 0
        this.totalScore = 0;
        // reset time
        this.timeRemaining = this.startTime;
        // array for matched cards
        this.pairedGridItem = [];
        // busy true before game start
        this.busy = true;
        // timeout for game to start
        setTimeout(() => {
            this.shuffleCards(this.itemsArray);
            this.clock = this.startClock();
            // busy false when game started
            this.busy = false;
        }, 1000);
        // backs of cards showing, reset game
        this.showBacks();
        this.timer.innerText = this.timeLeft;
        this.score.innerText = this.totalScore;
    }
    showBacks() {
        this.itemsArray.forEach(card => {
            card.classList.remove('visible');
        })
    }

    startClock() {
        return setInterval(() => {
            this.timeLeft--;
            this.timer.innerText = this.timeLeft;
            if(this.timeLeft === 0)
                this.gameOver();
        }, 1000);
    }


    gameOver() {
        $("#time-up").addClass("visible");
    }

    gameWon() {
        $("#game-won").addClass("visible");
    }
    //shuffle cards
    shuffleCards(itemsArray) { // fisher-yates shuffle from medium.com
        for (let i = itemsArray.length - 1; i > 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1));
            itemsArray[rand].style.order = i;
            itemsArray[i].style.order = rand;
        }
    }


    gridItemAvailable(gridItem) {
        if (this.canTurnGridItem(gridItem)) {
            this.totalScore++;
            this.score.innerText = this.totalScore;
            gridItem.classList.add("visible");
        }
    }
    canTurnGridItem(gridItem) {
        return true;
        // return !this.busy && !this.pairedGridItem.includes(gridItem) && gridItem !== this.gridItemCheck;
    }

}

var screen = $(".screen-cover").toArray();
var gridItems = $(".grid-item").toArray();
var newGame = new MemoryGame(60, gridItems);

$(screen).click(function () {
    //start game
    $(this).fadeOut("slow");
    newGame.startGame();
    //count matches
    //keep matched items visible
});

//turn card
gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        newGame.gridItemAvailable(gridItem);
    }
    )
})

