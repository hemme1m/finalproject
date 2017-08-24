var app = angular.module("nutrientApp");

app.controller("foodGrpController", function($scope, foodSelectionService) {

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

				while ($scope.dairyRandItems.length < 5){
					item = dairyItems[Math.floor(Math.random() * dairyItems.length)];
					if (!$scope.dairyRandItems.includes(item)){
						$scope.dairyRandItems.push(item);
					}
				}

        $scope.randDairyItems = function () {
            $scope.dairyRandItems = [];
            var item = {};
								while ($scope.dairyRandItems.length < 5){
									item = dairyItems[Math.floor(Math.random() * dairyItems.length)];
									if (!$scope.dairyRandItems.includes(item)){
									 	$scope.dairyRandItems.push(item);
									}
								}
					}

    var vegItems = foodSelectionService.getVegItems();

        $scope.vegRandItems = [];

            var item = {};
            var vegItems = foodSelectionService.getVegItems();

						$scope.vegRandItems = [];
						var item = {};
								while ($scope.vegRandItems.length < 5){
									item = vegItems[Math.floor(Math.random() * vegItems.length)];
									if (!$scope.vegRandItems.includes(item)){
										$scope.vegRandItems.push(item);
									}
								}

						$scope.randVegItems = function () {
		            $scope.vegRandItems = [];
		            var item = {};
										while ($scope.vegRandItems.length < 5){
											item = vegItems[Math.floor(Math.random() * vegItems.length)];
											if (!$scope.vegRandItems.includes(item)){
											 	$scope.vegRandItems.push(item);
											}
										}
							}

    var Items = foodSelectionService.getFruitItems();

        $scope.fruitRandItems = [];

            var item = {};
            var fruitItems = foodSelectionService.getFruitItems();

						while ($scope.fruitRandItems.length < 5){
							item = fruitItems[Math.floor(Math.random() * fruitItems.length)];
							if (!$scope.fruitRandItems.includes(item)){
								$scope.fruitRandItems.push(item);
							}
						}

						$scope.randFruitItems = function () {
		            $scope.fruitRandItems = [];
		            var item = {};
										while ($scope.fruitRandItems.length < 5){
											item = fruitItems[Math.floor(Math.random() * fruitItems.length)];
											if (!$scope.fruitRandItems.includes(item)){
											 	$scope.fruitRandItems.push(item);
											}
										}
							}

     var Items = foodSelectionService.getGrainItems();

        $scope.grainRandItems = [];

            var item = {};
            var grainItems = foodSelectionService.getGrainItems();

						while ($scope.grainRandItems.length < 5){
							item = grainItems[Math.floor(Math.random() * grainItems.length)];
							if (!$scope.grainRandItems.includes(item)){
								$scope.grainRandItems.push(item);
							}
						}

						$scope.randGrainItems = function () {
		            $scope.grainRandItems = [];
		            var item = {};
										while ($scope.grainRandItems.length < 5){
											item = grainItems[Math.floor(Math.random() * grainItems.length)];
											if (!$scope.grainRandItems.includes(item)){
											 	$scope.grainRandItems.push(item);
											}
										}
							}

    var Items = foodSelectionService.getProteinItems();

        $scope.proteinRandItems = [];

            var item = {};
            var proteinItems = foodSelectionService.getProteinItems();

						while ($scope.proteinRandItems.length < 5){
							item = proteinItems[Math.floor(Math.random() * proteinItems.length)];
							if (!$scope.proteinRandItems.includes(item)){
								$scope.proteinRandItems.push(item);
							}
						}

						$scope.randProteinItems = function () {
		            $scope.proteinRandItems = [];
		            var item = {};
										while ($scope.proteinRandItems.length < 5){
											item = proteinItems[Math.floor(Math.random() * proteinItems.length)];
											if (!$scope.proteinRandItems.includes(item)){
											 	$scope.proteinRandItems.push(item);
											}
										}
							}

});
