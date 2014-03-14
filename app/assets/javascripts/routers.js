ticToeRouter = angular.module("ticToeRouter", ["ngRoute"]);


ticToeRouter.config(['$routeProvider',function($routeProvider){
  $routeProvider.
      when("/", 
      {
        templateUrl: "/tic_toe_template",
        controller: "ticToeCtrl"
      });
}]);