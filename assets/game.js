// -timer, -score, -shuffle

class MemoryGame {
    constructor(startTime, gridItems) {
        this.itemsArray = gridItems;
        this.startTime = startTime;
        this.timeRemaining = startTime;
        this.countdown = document.getElementById('time-left');
        this.score = document.getElementById('correct-answers');
    }
    startGame() {
        this.gridItemCheck = null;
        this.totalScore = 0;
        this.timeRemaining = this.startTime;
        this.pairedGridItem = [];
        this.busy = true;
        this.shuffleCards(this.itemsArray);
    }

    shuffleCards(itemsArray) { // Fisher-Yates Shuffle Algorithm
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

//shuffle cards