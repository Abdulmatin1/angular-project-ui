"use strict";
angular.module("appName")
    .controller("appCtrl",["$scope",function($scope){
        $scope.header="Hello World";
        $scope.test=function(){
            $scope.header="OH look it changed";
        }
    }]);