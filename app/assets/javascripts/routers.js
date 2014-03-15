ticToeRouter = angular.module("ticToeRouter", ["ngRoute"]);


ticToeRouter.config(['$routeProvider',function($routeProvider){
  $routeProvider.
      when("/", 
      {
        templateUrl: "../templates/tic_toe_template.html.erb",
        controller: "ticToeCtrl"
      }).
      when("/sp",{
        templateUrl: "../templates/tic_toe_template.html.erb",
        controller: "spTicToeCtrl"
      });
}]);