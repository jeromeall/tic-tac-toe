var ticToeControllers = angular.module("ticToeControllers", []);

ticToeControllers.controller('ticToeCtrl',['$scope', function($scope){
  $scope.tiles = [];  

  $scope.players = [                         // player data
    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'images/ernie.jpg',
      // indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'images/bert.jpg',
      // indicator: $(status_indicators[1])
    }
  ];
}]);