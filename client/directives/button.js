/**
 * Created by HP on 5/2/2016.
 */
angular.module('scotchApp')
    .directive('khalidButton', function() {
        return {
            restrict: 'AE',
            template:
            '<div class="container-fluid">' +
                '<div class="row">' +
                    '<div class=" btn-group">'+
                        '<button class="btn btn-primary" ng-click="getDataFromServer()">View</button>' +
                        '<button class="btn btn-info" ng-click="addStudent()">Add</button>' +
                        '<button class="btn btn-success">update</button>' +
                        //'<button class="btn btn-danger" ng-click="deleteStudent($index)">delete</button>' +
                    '</div>' +
                '</div>' +
            '</div>',
            link: link
        };

        function link(scope, elem, attrs) {

        }
    });