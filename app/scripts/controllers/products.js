(function(){

        angular
                .module('products', [ 'ngMaterial' ])
                .controller('ProductController', [
                        '$log', '$q', ProductController
                ]);

        function ProductController($log, $q) {
                var self = this;
        }

})();
