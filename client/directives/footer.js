/**
 * Created by HP on 5/2/2016.
 */
angular.module('scotchApp')
    .directive('khalidFooter', function() {
        return {
            restrict: 'AE',
            templateUrl: 'pages/footer.html',
            link: link
        };

        function link(scope, elem, attrs) {

        }
    });