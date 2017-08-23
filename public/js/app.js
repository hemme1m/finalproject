var app = angular.module("nutrientApp", ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'chart.js']);

app.config(function($routeProvider) {

    $routeProvider.when("/suggestions", {
        templateUrl: "partials/suggestions.html",
        // controller: "suggestionController"
    });

    $routeProvider.when("/total", {
        templateUrl: "partials/total.html",
        controller: "foodGrpController"
    });

    $routeProvider.when("/grps/all", {
    	templateUrl: "partials/grps/all.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/dairy", {
    	templateUrl: "partials/grps/dairy.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/fats", {
    	templateUrl: "partials/grps/fats.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/fruits", {
    	templateUrl: "partials/grps/fruits.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/grains", {
    	templateUrl: "partials/grps/grains.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/proteins", {
    	templateUrl: "partials/grps/proteins.html",
    	controller: "foodGrpController"
    });

    $routeProvider.when("/grps/vegetables", {
    	templateUrl: "partials/grps/vegetables.html",
    	controller: "foodGrpController"
    });

    $routeProvider.otherwise({
        templateUrl: "partials/landing.html"
    });

});

app.directive("nutritionInfo", function() {
    return {
        templateUrl: 'partials/nutrinfo.html',
        replace: false
    }
});

app.directive("runningTotal", function() {
    return {
        templateUrl: 'partials/runningtotal.html',
        replace: false
    }
});