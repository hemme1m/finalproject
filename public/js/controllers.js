var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

    foodSelectionService.getAllItems().then(function(items) {
        $scope.items = items;
        getTotals(items);
        getServingTotals(items);
        $scope.calTotal = totals.calTotal;
        $scope.carbTotal = totals.carbTotal;
        $scope.proteinTotal = totals.proteinTotal;
        $scope.fatTotal = totals.fatTotal;
        $scope.dairyServings = servingTotals.dairyServings;
        $scope.fruitServings = servingTotals.fruitServings;
        $scope.grainServings = servingTotals.grainServings;
        $scope.proteinServings = servingTotals.proteinServings;
        $scope.vegServings = servingTotals.vegServings;

        $scope.foodLabels = ["Carbohydrates", "Protein", "Fat"];
        $scope.foodData = [$scope.carbTotal, $scope.proteinTotal, $scope.fatTotal];
    });

	$scope.dairyItems = foodSelectionService.getDairyItems();
	$scope.fatItems = foodSelectionService.getFatItems();
	$scope.fruitItems = foodSelectionService.getFruitItems();
	$scope.grainItems = foodSelectionService.getGrainItems();
	$scope.proteinItems = foodSelectionService.getProteinItems();
	$scope.vegItems = foodSelectionService.getVegItems();

    $scope.allItems = $scope.dairyItems.concat($scope.fatItems).concat($scope.fruitItems).concat($scope.grainItems).concat($scope.proteinItems).concat($scope.vegItems);

    var totals = {};
    var servingTotals = {};
    var randomItem = {};
    $scope.randDairyItems = [];
    $scope.randFruitItems = [];
    $scope.randGrainItems = [];
    $scope.randProteinItems = [];
    $scope.randVegItems = [];

    //functions to re-randomize suggested food arrays
    $scope.randDairy = function() {
        var randomItem = {};
        $scope.randDairyItems = [];
        while ($scope.randDairyItems.length < 5) {
            randomItem = $scope.dairyItems[Math.floor(Math.random() * $scope.dairyItems.length)];
            if (!$scope.randDairyItems.includes(randomItem)){
                $scope.randDairyItems.push(randomItem);
            };
        };
    };

    $scope.randFruit = function() {
        var randomItem = {};
        $scope.randFruitItems = [];
        while ($scope.randFruitItems.length < 5) {
            randomItem = $scope.fruitItems[Math.floor(Math.random() * $scope.fruitItems.length)];
            if (!$scope.randFruitItems.includes(randomItem)){
                $scope.randFruitItems.push(randomItem);
            };
        };
    };

    $scope.randGrain = function() {
        var randomItem = {};
        $scope.randGrainItems = [];
        while ($scope.randGrainItems.length < 5) {
            randomItem = $scope.grainItems[Math.floor(Math.random() * $scope.grainItems.length)];
            if (!$scope.randGrainItems.includes(randomItem)){
                $scope.randGrainItems.push(randomItem);
            };
        };
    };

    $scope.randProtein = function() {
        var randomItem = {};
        $scope.randProteinItems = [];
        while ($scope.randProteinItems.length < 5) {
            randomItem = $scope.proteinItems[Math.floor(Math.random() * $scope.proteinItems.length)];
            if (!$scope.randProteinItems.includes(randomItem)){
                $scope.randProteinItems.push(randomItem);
            };
        };
    };

    $scope.randVeg = function() {
        var randomItem = {};
        $scope.randVegItems = [];
        while ($scope.randVegItems.length < 5) {
            randomItem = $scope.vegItems[Math.floor(Math.random() * $scope.vegItems.length)];
            if (!$scope.randVegItems.includes(randomItem)){
                $scope.randVegItems.push(randomItem);
            };
        };
    };

    $scope.randDairy();
    $scope.randFruit();
    $scope.randGrain();
    $scope.randProtein();
    $scope.randVeg();

    function getTotals(foods) {
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

    function getServingTotals(foods) {
        var dairyServings = 0;
        var fruitServings = 0;
        var grainServings = 0;
        var proteinServings = 0;
        var vegServings = 0;
        foods.forEach(function(food) {
            if (food.foodgroup === "dairy") {
                dairyServings++;
            } else if (food.foodgroup === "fruit") {
                fruitServings++;
            } else if (food.foodgroup === "grains") {
                grainServings++;
            } else if (food.foodgroup === "proteins") {
                proteinServings++;
            } else if (food.foodgroup === "vegetable") {
                vegServings++;
            }

            servingTotals = {dairyServings, fruitServings, grainServings, proteinServings, vegServings};
            return servingTotals;
        });
    };

    $scope.addItem = function(item) {
        foodSelectionService.addItem(item).then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getTotals(items);
                getServingTotals(items);
                $scope.calTotal = totals.calTotal;
                $scope.carbTotal = totals.carbTotal;
                $scope.proteinTotal = totals.proteinTotal;
                $scope.fatTotal = totals.fatTotal;
                $scope.dairyServings = servingTotals.dairyServings;
                $scope.fruitServings = servingTotals.fruitServings;
                $scope.grainServings = servingTotals.grainServings;
                $scope.proteinServings = servingTotals.proteinServings;
                $scope.vegServings = servingTotals.vegServings;
            });
        });
    };

    $scope.clearLog = function(){
        foodSelectionService.deleteItems().then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getServingTotals(items);
                $scope.calTotal = totals.calTotal;
                $scope.carbTotal = totals.carbTotal;
                $scope.proteinTotal = totals.proteinTotal;
                $scope.fatTotal = totals.fatTotal;
                $scope.dairyServings = servingTotals.dairyServings;
                $scope.fruitServings = servingTotals.fruitServings;
                $scope.grainServings = servingTotals.grainServings;
                $scope.proteinServings = servingTotals.proteinServings;
                $scope.vegServings = servingTotals.vegServings;
                $scope.foodData = [$scope.carbTotal, $scope.proteinTotal, $scope.fatTotal];
            });
        });
    };
});