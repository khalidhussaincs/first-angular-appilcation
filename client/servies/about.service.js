/**
 * Created by HP on 4/29/2016.
 */
angular.module('scotchApp')
    .service('studentService', function($http) {
alert("studentService")
        this.getStudent = function getStudent (successFn) {
            $http.get("database.json")
                .then(function(response) {
                    successFn(response);
                    //console.log(response.data.student);
                    //$scope.studentData = response.data.student
                });
        };

        this.addStudent = function (data) {
            $http.get("database.json")
                .then(function(response) {
                    console.log(response.data.student);
                    $scope.studentData = response.data.student
                });
        };
        this.deleteStudent = function () {
            $http.get("database.json")
                .then(function(response) {
                    console.log(response.data.student);
                    $scope.studentData = response.data.student
                });
        };
        this.updateStudent = function () {
            $http.get("database.json")
                .then(function(response) {
                    console.log(response.data.student);
                    $scope.studentData = response.data.student
                });
        };

        //return {
        //    getStudent:this.getStudent,
        //    addStudent:addStudent,
        //    updateStudent:updateStudent,
        //    deleteStudent:deleteStudent
        //}
    });
