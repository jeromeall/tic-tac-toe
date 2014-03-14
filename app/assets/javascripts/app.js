var ticToeApp = angular.module("ticToeApp",[
  "ticToeControllers",
  "ngRoute",
  ]);

ticToeApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
      when("/", {
        templateUrl: "views/main.html",
        controller: "ticToeCtrl"
      });
}]);
