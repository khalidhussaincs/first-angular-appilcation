/**
 * Created by HP on 4/29/2016.
 */
angular.module('scotchApp')
    .controller('mainController', function($scope) {

        //angular ui bootstrap datapikcer

        // create a message to display in our view
        $scope.message2 = 'Everyone come and see how good I look!';
        var vm = this;

        vm.valuationDate = new Date();
        vm.valuationDatePickerIsOpen = false;
        vm.opens = [];

        $scope.$watch(function () {
            return vm.valuationDatePickerIsOpen;
        },function(value){
            vm.opens.push("valuationDatePickerIsOpen: " + value + " at: " + new Date());
        });

        vm.valuationDatePickerOpen = function ($event) {

            if ($event) {
                $event.preventDefault();
                $event.stopPropagation(); // This is the magic
            }
            this.valuationDatePickerIsOpen = true;
        };

        //************************Angular checkbox modal***********************************

        $scope.roles = [
            'guest',
            'user',
            'customer',
            'admin'
        ];
        $scope.user = {
            roles: ['user']
        };
        $scope.checkAll = function() {
            $scope.user.roles = angular.copy($scope.roles);
        };
        $scope.uncheckAll = function() {
            $scope.user.roles = [];
        };
        $scope.checkFirst = function() {
            $scope.user.roles.splice(0, $scope.user.roles.length);
            $scope.user.roles.push('guest');
        };
    });
