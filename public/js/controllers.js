var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

    var totals = {};
    var servingTotals = {};
    var randomItem = {};
    $scope.randDairyItems = [];
    $scope.randFruitItems = [];
    $scope.randGrainItems = [];
    $scope.randProteinItems = [];
    $scope.randVegItems = [];
    $scope.randMealItems = [];

    $scope.dairyBar = 0;

	$scope.dairyItems = foodSelectionService.getDairyItems();
	$scope.fatItems = foodSelectionService.getFatItems();
	$scope.fruitItems = foodSelectionService.getFruitItems();
	$scope.grainItems = foodSelectionService.getGrainItems();
	$scope.proteinItems = foodSelectionService.getProteinItems();
	$scope.vegItems = foodSelectionService.getVegItems();
    $scope.allItems = $scope.dairyItems.concat($scope.fatItems).concat($scope.fruitItems).concat($scope.grainItems).concat($scope.proteinItems).concat($scope.vegItems);
    $scope.mealItems = foodSelectionService.getRandomMeals();

    foodSelectionService.getAllItems().then(function(items) {
        $scope.items = items;
        getServingTotals(items);
        getTotals(items);
        recalculateItems();
    });

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

    $scope.randMeals = function() {
        var randomMeal = [];
        $scope.randMealItems = [];
            randomMeal = $scope.mealItems[Math.floor(Math.random() * $scope.mealItems.length)];
            if (!$scope.randMealItems.includes(randomMeal)) {
                $scope.randMealItems.push(randomMeal);
            };
            //console.log(randomMeal);
            console.log($scope.randMealItems);
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
        servingTotals = {dairyServings, fruitServings, grainServings, proteinServings, vegServings};

        foods.forEach(function(food) {
            if (food.foodgroup === "dairy") {
                servingTotals.dairyServings++;
            } else if (food.foodgroup === "fruit") {
                servingTotals.fruitServings++;
            } else if (food.foodgroup === "grains") {
                servingTotals.grainServings++;
            } else if (food.foodgroup === "proteins") {
                servingTotals.proteinServings++;
            } else if (food.foodgroup === "vegetable") {
                servingTotals.vegServings++;
            }
            return servingTotals;
        });
    };

    function recalculateItems() {
        $scope.calTotal = totals.calTotal;
        $scope.carbTotal = totals.carbTotal;
        $scope.proteinTotal = totals.proteinTotal;
        $scope.fatTotal = totals.fatTotal;
        $scope.dairyServings = servingTotals.dairyServings;
        $scope.fruitServings = servingTotals.fruitServings;
        $scope.grainServings = servingTotals.grainServings;
        $scope.proteinServings = servingTotals.proteinServings;
        $scope.vegServings = servingTotals.vegServings;
        $scope.dairyBar = ($scope.dairyServings / 3) * 100;
        $scope.grainBar = ($scope.grainServings / 6) * 100;
        $scope.fruitBar = ($scope.fruitServings / 2) * 100;
        $scope.vegBar = ($scope.vegServings / 3) * 100;
        $scope.proteinBar = ($scope.proteinServings / 2) * 100;
        $scope.foodLabels = ["Carbohydrates", "Protein", "Fat"];
        $scope.foodData = [$scope.carbTotal, $scope.proteinTotal, $scope.fatTotal];
    };

    $scope.addItem = function(item) {
        foodSelectionService.addItem(item).then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getServingTotals(items);
                getTotals(items);
                recalculateItems();
            });
        });
    };

    $scope.addMeals = function(item) {
        foodSelectionService.addMeals(item).then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getServingTotals(items);
                getTotals(items);
                recalculateItems();
            });
            console.log(item);
        });
       
    };    

    $scope.deleteItem = function (item) {
        foodSelectionService.deleteItem(item.id).then(function() {
            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getServingTotals(items);
                getTotals(items);
                recalculateItems();
            });
        });
    };

    $scope.clearLog = function(){
        foodSelectionService.deleteItems().then(function(){

            foodSelectionService.getAllItems().then(function(items) {
                $scope.items = items;
                getServingTotals(items);
                getTotals(items);
                recalculateItems();
            });
        });
    };

    $scope.saveCurrentLog = function() {
        foodSelectionService.saveCurrentLog($scope.logday);
    };

    $scope.loadSavedLog = function() {
        foodSelectionService.loadSavedLog($scope.savedLogday).then(function(items) {
            $scope.items = items;
            getServingTotals(items);
            getTotals(items);
            recalculateItems();
        });
    };

    $scope.newLog = function() {
        foodSelectionService.newLog().then(function(items) {
            $scope.items = items;
            getServingTotals(items);
            getTotals(items);
            recalculateItems();
        });
    };

});


