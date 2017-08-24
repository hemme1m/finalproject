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

    var vegItems = foodSelectionService.getVegItems();

        $scope.vegRandItems = [];


            var item = {};
            var vegItems = foodSelectionService.getVegItems();
            

            for (var i = 0; i < 5; i++) {
            item = vegItems[Math.floor(Math.random() * vegItems.length)];    
            $scope.vegRandItems.push(item);
            console.log($scope.vegRandItems);
            }




        $scope.randVegItems = function () {
            $scope.vegRandItems = [];

            var item = {};
            var vegItems = foodSelectionService.getVegItems();
        

            for (var i = 0; i < 5; i++) {
            item = vegItems[Math.floor(Math.random() * vegItems.length)];    
            $scope.vegRandItems.push(item);
            console.log($scope.vegRandItems);
        }
        }


    var Items = foodSelectionService.getFruitItems();

        $scope.fruitRandItems = [];


            var item = {};
            var fruitItems = foodSelectionService.getFruitItems();
            

            for (var i = 0; i < 5; i++) {
            item = fruitItems[Math.floor(Math.random() * fruitItems.length)];    
            $scope.fruitRandItems.push(item);
            console.log($scope.fruitRandItems);
            }




        $scope.randFruitItems = function () {
            $scope.fruitRandItems = [];

            var item = {};
            var fruitItems = foodSelectionService.getFruitItems();
        

            for (var i = 0; i < 5; i++) {
            item = fruitItems[Math.floor(Math.random() * fruitItems.length)];    
            $scope.fruitRandItems.push(item);
            console.log($scope.fruitRandItems);
        }
        }

     var Items = foodSelectionService.getGrainItems();

        $scope.grainRandItems = [];


            var item = {};
            var grainItems = foodSelectionService.getGrainItems();
            

            for (var i = 0; i < 5; i++) {
            item = grainItems[Math.floor(Math.random() * grainItems.length)];    
            $scope.grainRandItems.push(item);
            console.log($scope.grainRandItems);
            }




        $scope.randGrainItems = function () {
            $scope.grainRandItems = [];

            var item = {};
            var grainItems = foodSelectionService.getGrainItems();
        

            for (var i = 0; i < 5; i++) {
            item = grainItems[Math.floor(Math.random() * grainItems.length)];    
            $scope.grainRandItems.push(item);
            console.log($scope.grainRandItems);
        }
        }

    var Items = foodSelectionService.getProteinItems();

        $scope.proteinRandItems = [];


            var item = {};
            var proteinItems = foodSelectionService.getProteinItems();
            

            for (var i = 0; i < 5; i++) {
            item = proteinItems[Math.floor(Math.random() * proteinItems.length)];    
            $scope.proteinRandItems.push(item);
            console.log($scope.proteinRandItems);
            }




        $scope.randProteinItems = function () {
            $scope.proteinRandItems = [];

            var item = {};
            var proteinItems = foodSelectionService.getProteinItems();
        

            for (var i = 0; i < 5; i++) {
            item = proteinItems[Math.floor(Math.random() * proteinItems.length)];    
            $scope.proteinRandItems.push(item);
            console.log($scope.proteinRandItems);
        }
        }

        


});