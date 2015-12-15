'use strict';

/**
 * @ngdoc overview
 * @name kmFinancialApp
 * @description
 * # kmFinancialApp
 *
 * Main module of the application.
 */
angular
        .module('kmFinancialApp', [
                'ngAnimate',
                'ngAria',
                'ngCookies',
                'ngMessages',
                'ngResource',
                'ngRoute',
                'ngSanitize',
                'ngTouch',
                'ngMaterial',
                "angular-svg-round-progress",
                "products"
        ])
        .config(function ($mdThemingProvider, $routeProvider) {
                $routeProvider
                        .when("/", {
                                templateUrl: 'views/products.html',
                                controller: 'ProductController'
                        })
                        .when("/detail", {
                                templateUrl: 'views/product_detail.html',
                                controller: 'ProductController'
                        })
                        .otherwise({
                                redirectTo: "/"
                        });
                $mdThemingProvider.theme('default')
                        .primaryPalette('blue')
                        .accentPalette('yellow');
        });
