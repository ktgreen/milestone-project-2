// code -timer, -score, -shuffle

class Game {
    constructor(startTime, gridItems) {
        this.itemsArray = gridItems;
        this.startTime = startTime;
        this.timeRemaining = startTime;
        this.countdown = $("#time-left");
        this.score = $("#correct-answers");
    }
    startGame() {
        this.gridItemCheck = null;
        this.totalScore = 0;
        this.timeRemaining = this.startTime;
        this.pairedGridItem = [];
        this.busy = true; //
    }
    gridItemAvailable(gridItem) {

    }

    gridItemUnavailable(gridItem) {
        return !this.busy && !this.pairedGridItem.includes(gridItem) && gridItem !== this.gridItemCheck;
    }
}

var screen = $(".screen-cover").toArray();
var gridItems = $(".grid-item").toArray();

$(screen).click(function() {
    //start game
    $(this).fadeOut("slow");

    //timer
    
    //time up/game over

    //count matches
    //keep matched items visible
});

$(gridItems).click(function(turnOver) {
    //turn card
})

//shuffle cards

//