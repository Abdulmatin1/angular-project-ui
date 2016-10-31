"use strict";
angular.module("appName")
    .controller("personCtrl",["$scope",function($scope){
        $scope.tests="sample";
        //Creating model for person form
        $scope.personModel = {
            firstName:"",
            lastName:"",
            address:"",
            phoneNumber:""
        };
        
        $scope.forNgShow = true;
        $scope.forNgIf =true;
        
        $scope.toggleForShow = function(){
            $scope.forNgShow = !$scope.forNgShow;
        }
        
        $scope.toggleForIf = function(){
             $scope.forNgIf = !$scope.forNgIf;
        }
        $scope.personModel.firstName="John";
        $scope.personModel.lastName="Doe";
        $scope.personModel.address="Some Address";
        $scope.personModel.phoneNumber="123-123-1234";
    }]);