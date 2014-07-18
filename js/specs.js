describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("creates a new Space object", function() {
      var testSpace = Space.create(1, 1);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.newBoard.should.eql([{xCoordinate: 1, yCoordinate: 1}, {xCoordinate: 1, yCoordinate: 2}, {xCoordinate: 1, yCoordinate: 3}, {xCoordinate: 2, yCoordinate: 1}, {xCoordinate: 2, yCoordinate: 2}, {xCoordinate: 2, yCoordinate: 3}, {xCoordinate: 3, yCoordinate: 1}, {xCoordinate: 3, yCoordinate: 2}, {xCoordinate: 3, yCoordinate: 3}]);
    });
  });
});
