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

app.controller("suggestionController", function($scope, foodSelectionService) {
    var dairyItems = foodSelectionService.getDairyItems();

    $scope.dairyRandItems = [];


        var item = {};
        var dairyItems = foodSelectionService.getDairyItems();
        

        for (var i = 0; i < 5; i++) {
        item = dairyItems[Math.floor(Math.random() * dairyItems.length)];    
        $scope.dairyRandItems.push(item);
        console.log($scope.dairyRandItems);
        }

        $scope.randDairyItems = function () {
            $scope.dairyRandItems = [];

            var item = {};
            var dairyItems = foodSelectionService.getDairyItems();
        

            for (var i = 0; i < 5; i++) {
            item = dairyItems[Math.floor(Math.random() * dairyItems.length)];    
            $scope.dairyRandItems.push(item);
            console.log($scope.dairyRandItems);
            }
        }



/*
        $scope.randVegItems = function () {
            $scope.totalRandItems = [];

            var item = {};
            var vegItems = foodSelectionService.getVegItems();
        

            for (var i = 0; i < 5; i++) {
            item = vegItems[Math.floor(Math.random() * vegItems.length)];    
            $scope.totalRandItems.push(item);
            console.log($scope.totalRandItems);
        }
        }

        $scope.randDairyItems = function () {
            $scope.totalRandItems = [];

            var item = {};
            var dairyItems = foodSelectionService.getDairyItems();
        

            for (var i = 0; i < 5; i++) {
            item = dairyItems[Math.floor(Math.random() * dairyItems.length)];    
            $scope.totalRandItems.push(item);
            console.log($scope.totalRandItems);
        }
        }

        
 */   


});