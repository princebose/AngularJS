var app = angular.module('app', []);
app.controller("emp", function ($scope,$q){
    $scope.msg = "This is a message from directive"
});

app.directive("myInfoMsg", function(){
    return{
        template:"<strong>{{msg}}</strong>"
    }
})