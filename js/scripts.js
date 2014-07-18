var Player = {
  initialize: function(inputSymbol) {
    this.symbol = inputSymbol;
  },
  create: function(inputSymbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(inputSymbol);
    return newPlayer;
  }
}

var Space = {
  initialize: function(xTemp, yTemp) {
    this.xCoordinate = xTemp;
    this.yCoordinate = yTemp;
  },
  create: function(xTemp, yTemp) {
    var newSpace = Object.create(Space);
    newSpace.initialize(xTemp, yTemp);
    return newSpace;
  },
  markBy: function(testPlayer) {
    this.markedBy = testPlayer;
  }
}

var Board = {
  initialize: function() {
    this.newBoard = [];
    for(var x = 1; x <=3; x++) {
      for(var y = 1; y <=3; y++) {
        this.newBoard.push(Space.create(x, y));
        console.log(Space.create(x, y));
      }
    }
  }
}

$(document).ready(function() {
  var remainder = 0;
  var count = 0;
  $(".btn").click(function(event) {
    if (count < 8) {
    var player = ["X", "O"];

    $(this).text(player[remainder]);
    count++;
    remainder++;
    if(count % 2 === 0){
      remainder = 0;
    }

  } else {
    $("#game").slideUp();
    $("#game-over").fadeIn();
  }
  event.preventDefault();
  });
});
