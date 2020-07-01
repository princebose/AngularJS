var app = angular.module('app', []);

// app.controller("AppCtrl", function ($scope, $timeout) {
//     // function add(x, y, callback) {
//     function add(x, y) {
//         $timeout(function () {
//             //callback(x + y);
//             return x + y
//         }, 100);
//     }
//     var startTime = Date.now();

//     add(5, 2, function (result) {
//         // $scope.result = result
//         // $scope.elapsedTime = Date.now() - startTime;
//         //Nested Calls
//         add(result, 3, function (result) {
//             add(result, 1, function (result) {
//                 $scope.result = result
//                 $scope.elapsedTime = Date.now() - startTime;
//             }, function (error) {/**Some Error Handling */ });
//         }, function (error) {/**Some Error Handling */ });
//     }, function (error) {/**Some Error Handling */ });
// }, function (error) {/**Some Error Handling */ 
//USING PROMISE
//$timeout in AngularJS by default returns a promise

//promise chaining
// app.controller("AppCtrl", function ($scope, $timeout) {
//     function add(x, y) {
//       return $timeout(function () { //$timeout by default returns a promise
//         return (x + y);
//       }, 100);
//     }

//     var startTime = Date.now();

//     //alternate way -- promise chaining
//     add(5,2)
//           .then(function(result){
//             return add(result, 3);//.then block always return a promise
//           })
//           .then(function(result){
//             return add(result, 1);
//           })
//           .then(function(result){
//             $scope.result = result;
//             $scope.elapsedTime = Date.now() - startTime;
//           })


//using $q promise from angular
// app.controller("AppCtrl", function ($scope, $q) {
//     function add(x, y) {
//         var q = $q.defer();
//         setTimeout(function () { //$timeout by default returns a promise
//             q.resolve(x+y)
//         }, 100);
//         return q.promise;
//     }

//     var startTime = Date.now();

//     //alternate way -- promise chaining
//     add(5, 2)
//         .then(function (result) {
//             return add(result, 3);//.then block always return a promise
//         })
//         .then(function (result) {
//             return add(result, 1);
//         })
//         .then(function (result) {
//             $scope.result = result;
//             $scope.elapsedTime = Date.now() - startTime;
//         })

// });


// with reject
app.controller("AppCtrl", function ($scope, $q) {
    function add(x, y) {
        var q = $q.defer();
        setTimeout(function () { //$timeout by default returns a promise
            var result = x + y;
            if (result >= 0) {
                q.resolve(x + y)
            }
            else {
                q.reject('Negative Value ' + result);
            }

        }, 100);
        return q.promise;
    }

    var startTime = Date.now();

    //alternate way -- promise chaining
    add(5, 2)
        .then(function (result) {
            return add(result, -10);//.then block always return a promise
        })
        .then(function (result) {
            return add(result, 1);
        })
        .then(function (result) {
            $scope.result = result;

        })
        .catch(function (failure) {
            $scope.failure = failure;
        })
        .finally(function () {
            $scope.elapsedTime = Date.now() - startTime;
        })

});