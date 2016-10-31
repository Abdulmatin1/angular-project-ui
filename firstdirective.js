angular.module("appName").directive("sampleheader"),function(){
    return{
        //E->Elements
        restrict"EAMC",
        template:"<h1> this is a header from sample header directive {{header}}</h1>",
       //controller:'appCtrl'
       // controller:function($scope){
       // $scope.header="HEAD FROM DIRECTIVE;
       // $scope.XYZ=15;
        
        link:function($scope){

        };
    }
        
    };
    
}};