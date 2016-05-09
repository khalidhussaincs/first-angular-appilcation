/**
 * Created by HP on 4/29/2016.
 */
angular.module('scotchApp')
    .controller('aboutController', function($scope,$http) {
        $scope.message = 'Look! I am an about page.';
        $scope.studentData = [];
        $scope.studentObj = {};

       $scope.getDataFromServer = function  () {
            $http.get("database.json")
                .then(function(response) {
                    console.log(response.data.student);
                    $scope.studentData = response.data.student
                });
        };


        $scope.addStudent = function  () {
            $scope.studentData.push($scope.studentObj)
        };

        $scope.deleteStudent = function  (index) {
            $scope.studentData.splice([0,index])
        };


        //$scope.addStudent = function  () {
        //    $http.post("database.json",$scope.studentObj)
        //        .then(function(response) {
        //            console.log(response);
        //            //$scope.studentData.push(response);
        //        });
        //}

    });