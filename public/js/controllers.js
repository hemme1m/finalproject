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

// app.controller("totalController", function($scope, totalService) {
//     totalService.getAllItems().then(function(items) {
//         $scope.items = items;
//         getCalTotal(items);
//         $scope.calTotal = totals.calTotal;
//         $scope.carbTotal = totals.carbTotal;
//         $scope.proteinTotal = totals.proteinTotal;
//         $scope.fatTotal = totals.fatTotal;
//     });

//     var totals = {};

//     function getCalTotal(foods){
//         var calTotal = 0;
//         var carbTotal = 0;
//         var proteinTotal = 0;
//         var fatTotal = 0;
//         foods.forEach(function (food){
//             calTotal += food.cal;
//             carbTotal += food.carbs;
//             proteinTotal += food.protein;
//             fatTotal += food.fat;
//         });
//         totals = {calTotal, carbTotal, proteinTotal, fatTotal};
//         return totals;
//     };
// });

