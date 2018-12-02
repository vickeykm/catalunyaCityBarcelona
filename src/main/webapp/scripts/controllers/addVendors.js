'use strict';

angular.module('angularjsSimpleWebsiteApp')
  .controller('myCtrl', function($scope) {
    $scope.types = ["Sewage", "Water", "Lift","STP","Gym","Swimmingpool"];
});