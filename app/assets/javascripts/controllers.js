var ticToeControllers = angular.module("ticToeControllers", []);

ticToeControllers.controller('ticToeCtrl',['$scope', function($scope){
  $scope.tiles = ['tile0','tile1','tile2','tile3','tile4','tile5','tile6','tile7','tile8'];  

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

  $scope.alert = function(){
    console.log("hey");
  };

}]);