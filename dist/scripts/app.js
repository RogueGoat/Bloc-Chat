(function() {
    // this file and function control the means necessary to show the app at all. We connect main templates and controllers here and initialize them
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: false,
                requireBase: false
            });
        // makes the homectrl and home template what appears when all this information is passed into the index html page
        $stateProvider
            .state('home', {
                url: '',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
        
    }
    // configures entire app
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();

