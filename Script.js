// var myApp = angular
//     .module('myModule', [])
//     .controller("myController", function ($scope) {
        // var technologies = [
        //     {name:"Java", likes:0, dislikes:0},
        //     {name:"Python", likes:0, dislikes:0},
        //     {name:"C++", likes:0, dislikes:0},
        //     {name:"ES6", likes:0, dislikes:0},
        //     {name:"TS", likes:0, dislikes:0}  
        // ]
        // // var employees = [
        // //     { firstName: "Tim", lastName: "Lee", gender: "Male", salary: 1000 },
        // //     { firstName: "Jude", lastName: "Ying", gender: "Female", salary: 12000 },
        // //     { firstName: "paul", lastName: "losbs", gender: "Male", salary: 41000 },
        // //     { firstName: "Matt", lastName: "ponders", gender: "Male", salary: 551000 }
        // // ];
        // $scope.technologies = technologies

        // //fn expressions - easy to pass fn to others
        // $scope.incrementLikes = function(technology){
        //     technology.likes++;
        //     technology.avg  = technology.likes - technology.dislikes
        // }

        // $scope.incrementDisikes = function(technology){
        //     technology.dislikes++;
        //     technology.avg  = technology.likes - technology.dislikes
        // }

    //     var employees = [
    //         {
    //             name: "Ben", dateOfBirth: new Date("November 23, 1980"),
    //             gender: "Male", salary: 55000.788
    //         },
    //         {
    //             name: "Sara", dateOfBirth: new Date("May 05, 1970"),
    //             gender: "Female", salary: 68000
    //         },
    //         {
    //             name: "Mark", dateOfBirth: new Date("August 15, 1974"),
    //             gender: "Male", salary: 57000
    //         },
    //         {
    //             name: "Pam", dateOfBirth: new Date("October 27, 1979"),
    //             gender: "Female", salary: 53000
    //         },
    //         {
    //             name: "Todd", dateOfBirth: new Date("December 30, 1983"),
    //             gender: "Male", salary: 60000
    //         }
    //     ];
    //     $scope.employees = employees
    //     // $scope.rowList = 3;
    //     $scope.employeeView = "EmployeeTable.html"
    // });

    var myApp=angular
    .module('myModule',[])
    .controller('myController',function($scope){
        // var technologies=[
        //     {name:"Java", likes:0, dislikes:0},
        //     {name:"es6", likes:0, dislikes:0},
        //     {name:"TS", likes:0, dislikes:0},
        //     {name:"Python", likes:0, dislikes:0},
        //     {name:"C++", likes:0, dislikes:0}

        // ];
        // $scope.technologies=technologies

        // //function expressions
        // $scope.incrementLikes=function(technology){
        //     technology.likes++;
        // }
        // $scope.incrementDislikes=function(technology){
        //     technology.dislikes++;
        // }
        var employees = [
            {
                name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                gender: "Male", salary: 55000.788
            },
            {
                name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                gender: "Female", salary: 68000
            },
            {
                name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                gender: "Male", salary: 57000
            },
            {
                name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                gender: "Female", salary: 53000
            },
            {
                name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                gender: "Male", salary: 60000
            }
        ];
        $scope.employees=employees
        $scope.emloyeeView="EmployeeTable.html";
    });