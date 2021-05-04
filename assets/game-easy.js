// -timer, -shuffle

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
    }
    startGame() {        // check card
        this.gridItemCheck = null;
        // reset time
        this.timeRemaining = this.startTime;
        // check grid item
        this.gridItemCheck = null;
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
        }, 500);
        // backs of cards showing, reset game
        this.showBacks();
        this.timer.innerText = this.timeLeft;
    }
    showBacks() {
        this.itemsArray.forEach(gridItem => {
            gridItem.classList.remove('visible');
            gridItem.classList.remove('matched');
        })
    }

    gridItemAvailable(gridItem) {
        if (this.canTurnGridItem(gridItem)) {

            gridItem.classList.add("visible");
            if (this.gridItemCheck)
                this.gridItemMatchCheck(gridItem);
            else
                this.gridItemCheck = gridItem;
        }
    }
    gridItemMatchCheck(gridItem) {
        if (this.gridItemType(gridItem) === this.gridItemType(this.gridItemCheck))
            this.gridItemMatch(gridItem, this.gridItemCheck);
        else
            this.gridItemNoMatch(gridItem, this.gridItemCheck);
        this.gridItemCheck = null;
    }


    gridItemMatch(gridItem1, gridItem2) {
        this.pairedGridItem.push(gridItem1);
        this.pairedGridItem.push(gridItem2);
        if (this.gridItemMatch.length === this.itemsArray)
            this.gameWon();
    }

    gridItemNoMatch(gridItem1, gridItem2) {
        this.busy = true;
        setTimeout(() => {
            gridItem1.classList.remove('visible');
            gridItem2.classList.remove('visible');
            this.busy = false;
        }, 1000)
    }

    startClock() {
        return setInterval(() => {
            this.timeLeft--;
            this.timer.innerText = this.timeLeft;
            if (this.timeLeft === 0)
                this.gameOver();
        }, 1000);
    }

    gridItemType(gridItem) {
        return gridItem.getElementsByClassName("item-face")[0].src;
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

    canTurnGridItem(gridItem) {
        return !this.busy && !this.pairedGridItem.includes(gridItem) && gridItem !== this.gridItemCheck;
    }

}

var screen = $(".screen-cover").toArray();
var gridItems = $(".grid-item").toArray();
var newGame = new MemoryGame(180, gridItems);

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

