var ticToeControllers = angular.module("ticToeControllers", []);

ticToeControllers.controller('ticToeCtrl',['$scope', function($scope){
  $scope.tiles = [ 
    {letter: "", id: "0", name: "tile0"},
    {letter: "", id: "1", name: "tile1"},
    {letter: "", id: "2", name: "tile2"},
    {letter: "", id: "3", name: "tile3"},
    {letter: "", id: "4", name: "tile4"},
    {letter: "", id: "5", name: "tile5"},
    {letter: "", id: "6", name: "tile6"},
    {letter: "", id: "7", name: "tile7"},
    {letter: "", id: "8", name: "tile8"}
    ];

  $scope.win_combos = [ 
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
  ];

  $scope.message= "";

  $scope.turn = 0;

  $scope.tieOrWin = true;

  $scope.activeTiles = [];

  
  $scope.currentPlayer = function(){
    return $scope.players[$scope.playerIndex()];
  };

  $scope.playerIndex = function(){
    return $scope.turn % 2;
  };
  

  $scope.players = [                         // player data
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'ernie.jpg',
      indicator: 0,
      moves: []
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'bert.jpg',
      indicator: 1,
      moves: []
    }
  ];

  $scope.addMarker = function(index){
    console.log($scope.currentPlayer(), $scope.turn);
    for(var i in $scope.tiles){
      if($scope.tiles[i].id === String(index) && $scope.tiles[i].letter === '' ){
        $scope.tiles[i].letter = $scope.currentPlayer().marker;
        $scope.currentPlayer().moves.push(index);
        $scope.activeTiles.push(index);
        $scope.isWin($scope.currentPlayer().moves);
        $scope.turn += 1;
      }
    }
  };

  $scope.isWin = function(moves) {
    for(var combo in $scope.win_combos){
      console.log(_.intersection($scope.win_combos[combo], moves), $scope.win_combos[combo] );
      if(_.intersection($scope.win_combos[combo], moves).length == $scope.win_combos[combo].length){
        console.log("It's a win!");
        $scope.handleWin();
        return true;
      }
    }
   $scope.isTie(moves);
  };

  $scope.handleWin = function(){
    $scope.tieOrWin = false;
    $scope.message = $scope.currentPlayer().name + " wins!";
  };

  $scope.isBoardFull = function(){
    if($scope.activeTiles.length === 9){
      console.log("Board Full");
      return true;
    }
  };

  $scope.isTie = function(moves){
    if($scope.isBoardFull()){
      console.log("it's a tie!");
      $scope.handleTie();
      return true;
    }else {
      console.log("not a tie", $scope.activeTiles);
    }
  };

  $scope.handleTie = function(){
    $scope.tieOrWin = false;
    $scope.message = "it's a tie!";
  };

  $scope.playAgain = function(){
    $scope.tieOrWin = true;
    for (var tile in $scope.tiles){
      $scope.tiles[tile].letter = '';
    }
    for(var player in $scope.players){
      $scope.players[player].moves = [];
    }
    $scope.activeTiles = [];
  };

}]);



//////////////////////SINGLE PLAYER CONTROLLER////////////////////////




ticToeControllers.controller('spTicToeCtrl',['$scope', function($scope){
  $scope.tiles = [ 
    {letter: "", id: "0", name: "tile0"},
    {letter: "", id: "1", name: "tile1"},
    {letter: "", id: "2", name: "tile2"},
    {letter: "", id: "3", name: "tile3"},
    {letter: "", id: "4", name: "tile4"},
    {letter: "", id: "5", name: "tile5"},
    {letter: "", id: "6", name: "tile6"},
    {letter: "", id: "7", name: "tile7"},
    {letter: "", id: "8", name: "tile8"}
    ];

  $scope.win_combos = [ 
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
  ];

  $scope.message= "";

  $scope.turn = 0;

  $scope.tieOrWin = true;

  $scope.activeTiles = [];
  $scope.emptyTiles = [];

  $scope.currentPlayer = function(){
    return $scope.players[$scope.playerIndex()];
  };

  $scope.playerIndex = function(){
    return $scope.turn % 2;
  };
  

  $scope.players = [                         // player data
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'ernie.jpg',
      indicator: 0,
      moves: []
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'bert.jpg',
      indicator: 1,
      moves: []
    }
  ];

  $scope.addMarker = function(index){
    console.log($scope.currentPlayer(), $scope.turn);
    for(var i in $scope.tiles){
      if($scope.tiles[i].id === String(index) && $scope.tiles[i].letter === '' ){
        $scope.tiles[i].letter = $scope.currentPlayer().marker;
        $scope.currentPlayer().moves.push(index);
        $scope.activeTiles.push(index);
        $scope.isWin($scope.currentPlayer().moves);
      }
    }
  };

  $scope.computerMove = function(){
    var emptyTiles= [];
    for(var tile in $scope.tiles){
      if($scope.tiles[tile].letter === ''){
        emptyTiles.push($scope.tiles[tile].id);
      }
    }
    var randNumber = $scope.getRandomArbitrary(emptyTiles.length);
    var compChoice = emptyTiles[randNumber];
    console.log(emptyTiles, compChoice);
    $scope.tiles[compChoice].letter = $scope.currentPlayer().marker;
    $scope.currentPlayer().moves.push(parseInt($scope.tiles[compChoice].id));
    $scope.activeTiles.push($scope.tiles[compChoice].id);
    $scope.isWin($scope.currentPlayer().moves);    
    console.log("empty tiles:",emptyTiles, "active tiles: ", $scope.activeTiles, "comp choice: ", $scope.tiles[compChoice].id, "current player moves: ", $scope.currentPlayer().moves, "turn: ", $scope.turn, "computer moves: ", $scope.players[1].moves);
  };

  $scope.getRandomArbitrary= function(length) {
    return Math.floor(Math.random() * (length - 1));
  };

  $scope.isWin = function(moves) {
    for(var combo in $scope.win_combos){
      console.log(_.intersection($scope.win_combos[combo], moves), $scope.win_combos[combo] );
      if(_.intersection($scope.win_combos[combo], moves).length == $scope.win_combos[combo].length){
        console.log("It's a win!");
        $scope.handleWin();
        $scope.turn += 1;
        return true;
      }
    }
   $scope.isTie(moves);
  };

  $scope.handleWin = function(){
    $scope.tieOrWin = false;
    $scope.message = $scope.currentPlayer().name + " wins!";
  };

  $scope.isBoardFull = function(){
    if($scope.activeTiles.length === 9){
      console.log("Board Full");
      return true;
    }
  };

  $scope.isTie = function(moves){
    if($scope.isBoardFull()){
      console.log("it's a tie!");
      $scope.handleTie();
      $scope.turn +=1;
      return true;
    }else {
      $scope.turn += 1;
      if($scope.currentPlayer().indicator === 1){
        $scope.computerMove();
      }
      
    }
  };

  $scope.handleTie = function(){
    $scope.tieOrWin = false;
    $scope.message = "it's a tie!";
  };

  $scope.playAgain = function(){
    $scope.tieOrWin = true;
    for (var tile in $scope.tiles){
      $scope.tiles[tile].letter = '';
    }
    for(var player in $scope.players){
      $scope.players[player].moves = [];
    }
    $scope.activeTiles = [];
    if($scope.currentPlayer().indicator === 1){
      $scope.computerMove();
    }
  };

}]);