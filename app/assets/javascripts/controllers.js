var ticToeControllers = angular.module("ticToeControllers", []);

ticToeControllers.controller('ticToeCtrl',['$scope', function($scope){
  $scope.tiles = [];  

  $scope.players = [                         // player data
    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'img/ernie.jpg',
      // indicator: $(status_indicators[0])
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'img/bert.jpg',
      // indicator: $(status_indicators[1])
    }
  ];
}]);