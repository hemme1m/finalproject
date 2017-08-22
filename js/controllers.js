var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

	$scope.dairyItems = foodSelectionService.getDairyItems();
	$scope.fatItems = foodSelectionService.getFatItems();
	$scope.fruitItems = foodSelectionService.getFruitItems();
	$scope.grainItems = foodSelectionService.getGrainItems();
	$scope.proteinItems = foodSelectionService.getProteinItems();
	$scope.vegItems = foodSelectionService.getVegItems();

});


    // var app = angular.module("kitchsinkApp");

    // app.controller("primeFactorsController", function($scope, $timeout, primeFactorsService) {

	   //  $scope.factors = [];

    //     $scope.setFactors = function(num) {
    //     	var holder = primeFactorsService.setPrimeFactors(num);
    //         $scope.factors = [];
    //         //setTimeout...
    //         // $timeout(function() {
    //     	holder.forEach(function(factor) {
    //     		$timeout(function() {
    //     			$scope.factors.push(factor);
    //     		}, 250);
    //         });
	   //      // }, 250);
    //     }

    //     $scope.removeDivs = function() {
    //     	for (var i = 0; i <= $scope.factors.length; i++) {
	   //      	var el = angular.element(document.querySelector(".primeFactors"));
	   //      	el.remove();
	   //      	console.log("Hey");
	   //      }
    //     }

    //     $scope.allTheFunctions = function(num) {
    //     	$scope.removeDivs();
    //     	$scope.setFactors(num);
    //     }
    // })