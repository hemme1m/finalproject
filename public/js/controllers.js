var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

	$scope.dairyItems = foodSelectionService.getDairyItems();
	$scope.fatItems = foodSelectionService.getFatItems();
	$scope.fruitItems = foodSelectionService.getFruitItems();
	$scope.grainItems = foodSelectionService.getGrainItems();
	$scope.proteinItems = foodSelectionService.getProteinItems();
	$scope.vegItems = foodSelectionService.getVegItems();

    $scope.allItems = $scope.dairyItems.concat($scope.fatItems).concat($scope.fruitItems).concat($scope.grainItems).concat($scope.proteinItems).concat($scope.vegItems);

    $scope.foodForm = false;

    $scope.sendFood = function() {
        $scope.foodForm = false;
    };

    $scope.cancel = function() {
        console.log("cancel function");
    };

    $scope.addItem = function(item){
        // item = $scope.item;
        foodSelectionService.addItem(item);
        console.log(item);
    };
});

app.controller("totalController", function($scope, totalService) {
    // $scope.formItem = {};

    // Load the cart data on page load.
    totalService.getAllItems().then(function(items) {
        $scope.items = items;
    });
});

