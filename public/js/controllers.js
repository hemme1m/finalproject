var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

    //$scope.items = [];

	$scope.dairyItems = foodSelectionService.getDairyItems();
	$scope.fatItems = foodSelectionService.getFatItems();
	$scope.fruitItems = foodSelectionService.getFruitItems();
	$scope.grainItems = foodSelectionService.getGrainItems();
	$scope.proteinItems = foodSelectionService.getProteinItems();
	$scope.vegItems = foodSelectionService.getVegItems();

    $scope.allItems = $scope.dairyItems.concat($scope.fatItems).concat($scope.fruitItems).concat($scope.grainItems).concat($scope.proteinItems).concat($scope.vegItems);

    var totals = {};

    function getTotals(foods){
        var calTotal = 0;
        var carbTotal = 0;
        var proteinTotal = 0;
        var fatTotal = 0;
        foods.forEach(function (food){
            calTotal += food.cal;
            carbTotal += food.carbs;
            proteinTotal += food.protein;
            fatTotal += food.fat;
        });
        totals = {calTotal, carbTotal, proteinTotal, fatTotal};
        return totals;
    };

    $scope.addItem = function(item){
        foodSelectionService.addItem(item).then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getTotals(items);
                $scope.calTotal = totals.calTotal;
                $scope.carbTotal = totals.carbTotal;
                $scope.proteinTotal = totals.proteinTotal;
                $scope.fatTotal = totals.fatTotal;
            });
        });
    };

    $scope.clearLog = function(){
        foodSelectionService.deleteItems().then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getTotals(items);
                $scope.calTotal = totals.calTotal;
                $scope.carbTotal = totals.carbTotal;
                $scope.proteinTotal = totals.proteinTotal;
                $scope.fatTotal = totals.fatTotal;
                $scope.foodData = [$scope.carbTotal, $scope.proteinTotal, $scope.fatTotal];
            });
        });
    };

    foodSelectionService.getAllItems().then(function(items) {
        $scope.items = items;
        getTotals(items);
        $scope.calTotal = totals.calTotal;
        $scope.carbTotal = totals.carbTotal;
        $scope.proteinTotal = totals.proteinTotal;
        $scope.fatTotal = totals.fatTotal;

        $scope.foodLabels = ["Carbohydrates", "Protein", "Fat"];
        $scope.foodData = [$scope.carbTotal, $scope.proteinTotal, $scope.fatTotal];
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

