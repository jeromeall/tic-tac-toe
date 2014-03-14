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

  $scope.turn = 0;
  
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
      img_url:   'images/ernie.jpg'
      // indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'images/bert.jpg'
      // indicator: $(status_indicators[1])
    }
  ];

  $scope.addMarker = function(index){
    console.log($scope.currentPlayer(), $scope.turn);
    for(var i in $scope.tiles){
      if($scope.tiles[i].id === String(index)){
        $scope.tiles[i].letter = $scope.currentPlayer().marker;
        $scope.turn += 1;
      }
    }
  };

}]);