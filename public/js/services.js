var app = angular.module('nutrientApp');

app.factory("foodSelectionService", function($http) {

	function getDairyItems() {
		var dairyItems = [
			{name: "1% Milk", servings: 1, servSize: "1 cup", group: "dairy",
			cal: 103, carbs: 12, protein: 8, fat: 2.4, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/dairy/milk.jpeg"},
			{name: "Almond Milk", servings: 1, servSize: "1 cup", group: "dairy",
			cal: 30, carbs: 1, protein: 1, fat: 2.5, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/dairy/almondmilk.jpeg"},
			{name: "Coconut Milk", servings: 1, servSize: "1 cup", group: "dairy",
			cal: 45, carbs: 1, protein: 0, fat: 2.5, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/dairy/coconutmilk.jpeg"},
			{name: "Soy Milk", servings: 1, servSize: "1 cup ", group: "dairy",
			cal: 110, carbs: 9, protein: 8, fat: 4.5, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/dairy/soymilk.jpeg"},
			{name: "Greek Yogurt", servings: 1, servSize: "170g", group: "dairy",
			cal: 100, carbs: 6, protein: 17, fat: 0.7, meal: ['breakfast', 'lunch'], img: "imgs/dairy/yogurt.jpeg"},
			{name: "Cheddar Cheese", servings: 1, servSize: "1oz", group: "dairy",
			cal: 114, carbs: 0.4, protein: 7, fat: 9, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/dairy/cheese.jpeg"},
			{name: "Cream Cheese", servings: 1, servSize: "1oz", group: "dairy",
			cal: 100, carbs: 1, protein: 2, fat: 10, meal: ['breakfast'], img: "imgs/dairy/creamcheese.jpeg"}
		];
		return dairyItems;
	};

	function getFatItems() {
		var fatItems = [
			{name: "Reese's", servings: 1, servSize: "45g", group: "fats and sugar",
			cal: 232, carbs: 25, protein: 4.6, fat: 14, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/reeses.jpg"},
			{name: "Nutella", servings: 1, servSize: "37g", group: "fats and sugar",
			cal: 200, carbs: 23, protein: 2, fat: 12, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/nutella.jpg"},
			{name: "Butter", servings: 1, servSize: "1 tbs", group: "fats and sugar",
			cal: 102, carbs: 0, protein: 0.1, fat: 12, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/butter.jpg"},
			{name: "Olive Oil", servings: 1, servSize: "13.5g", group: "fats and sugar",
			cal: 119, carbs: 0, protein: 0, fat: 14, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/oliveOil.jpg"},
			{name: "Vanilla Ice Cream", servings: 1, servSize: "66g", group: "fats and sugar",
			cal: 137, carbs: 16, protein: 2.3, fat: 7, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/icecream.jpg"},
			{name: "Cookies", servings: 1, servSize: "16g", group: "fats and sugar",
			cal: 78, carbs: 9, protein: 0.9, fat: 4.5, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/cookies.jpg"},
			{name: "Cake", servings: 1, servSize: "64g", group: "fats and sugar",
			cal: 239, carbs: 38, protein: 2.2, fat: 9, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/cake.jpg"},
			{name: "Sugar", servings: 1, servSize: "1 tsp", group: "fats and sugar",
			cal: 16, carbs: 4.2, protein: 0, fat: 0, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/sugar.jpg"},
			{name: "Maple Syrup", servings: 1, servSize: "1 tsp", group: "fats and sugar",
			cal: 52, carbs: 13, protein: 0, fat: 0, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/maplesyrup.jpg"},
			{name: "Honey", servings: 1, servSize: "1 tbs", group: "fats and sugar",
			cal: 64, carbs: 17, protein: 0.1, fat: 0, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/fats/honey.jpg"}
		];
		return fatItems;
	};

	function getFruitItems() {
		var fruitItems = [
			{name: "Apple", servings: 1, servSize: 242, group: "fruit",
			cal: 126, carbs: 33, protein: 0.6, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/apple.jpeg"},
			{name: "Banana", servings: 1, servSize: 126, group: "fruit",
			cal: 112, carbs: 29, protein: 1.4, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/banana.jpeg"},
			{name: "Cantaloupe", servings: 1, servSize: 134, group: "fruit",
			cal: 45, carbs: 11, protein: 1.1, fat:0.3, meal: ['breakfast','lunch'], img: "imgs/fruits/cantalope.jpeg"},
			{name: "Grapes", servings: 1, servSize: 100, group: "fruit",
			cal: 67, carbs: 17, protein: 0.6, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/grapes.jpeg"},
			{name: "Grapefruit", servings: 1, servSize: 154, group: "fruit",
			cal: 65, carbs: 16, protein: 1.2, fat: 0.2, meal: ['breakfast','lunch'], img: "imgs/fruits/grapefruit.jpeg"},
			{name: "Cherries", servings: 1, servSize: 100, group: "fruit",
			cal: 50, carbs: 12, protein: 1, fat: 0.3, meal: ['breakfast','lunch'], img: "imgs/fruits/cherries.jpeg"},
			{name: "Kiwi", 	servings: 1, servSize: 148, group: "fruit",
			cal: 90, carbs: 22, protein: 1.7, fat: 0.8, meal: ['breakfast','lunch'], img: "imgs/fruits/kiwi.jpeg"},
			{name: "Oranges", servings: 1, servSize: 100, group: "fruit",
			cal: 47, carbs: 12, protein: 0.9, fat: 0.1, meal: ['breakfast','lunch'], img: "imgs/fruits/oranges.jpeg"},
			{name: "Plum", servings: 1, servSize: 151, group: "fruit",
			cal: 69, carbs: 17, protein: 1.1, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/plums.jpeg"},
			{name: "Pineapple", servings: 1, servSize: 100, group: "fruit",
			cal: 50, carbs: 13, protein: 0.5, fat: 0.1, meal: ['breakfast','lunch'], img: "imgs/fruits/pineapple.jpeg"},
			{name: "Strawberries", servings: 1, servSize: 147, group: "fruit",
			cal: 48, carbs: 11, protein: 1, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/strawberries.jpeg"},
			{name: "Cranberries", servings: 1, servSize: 100, group: "fruit",
			cal: 46, carbs: 12, protein: 0.4, fat: 0.1, meal: ['breakfast','lunch'], img: "imgs/fruits/cranberries.jpeg"},
			{name: "Mango", servings: 1, servSize: 100, group: "fruit",
			cal: 60, carbs: 15, protein: 0.8, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/mangoes.jpeg"},
			{name: "Peaches", servings: 1, servSize: 147, group: "fruit",
			cal: 58, carbs: 14, protein: 1.3, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/peaches.jpeg"},
			{name: "Dates", servings: 1, servSize: 100, group: "fruit",
			cal: 282, carbs: 75, protein: 2.5, fat: 0.4, meal: ['breakfast','lunch'], img: "imgs/fruits/dates.jpeg"},
		];
		return fruitItems;
	};

	function getGrainItems() {
		var grainItems = [
			{name: "Oatmeal", servings: 1, servSize: "1/2 cup", group: "grains",
			cal: 150, carbs: 27, protein: 5, fat: 3, meal: ['breakfast'], img: "imgs/grains/oatmeal.jpeg"},
			{name: "Quinoa", servings: 1, servSize: "100g", group: "grains",
			cal: 274, carbs: 49, protein: 6, fat: 7, meal: ['lunch', 'dinner'], img: "imgs/grains/quinoa.jpeg"},
			{name: "Wheat Bread", servings: 1, servSize: "2 slices", group: "grains",
			cal: 138, carbs: 24, protein:7.2, fat: 1.8, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/grains/wholewheatbread.jpeg"},
			{name: "White Bread", servings: 1, servSize: "2 slices", group: "grains",
			cal: 158, carbs: 30, protein: 5.4, fat: 2, meal: ['breakfast', 'lunch', 'dinner'], img: "imgs/grains/whitebread.jpeg"},
			{name: "Plain Bagel", servings: 1, servSize: "1 bagel", group: "grains",
			cal: 300, carbs: 26, protein: 15, fat: 16, meal: ['breakfast', 'lunch'], img: "imgs/grains/bagels.jpeg"},
			{name: "Ramen Noodles", servings: 1, servSize: "1.5oz", group: "grains",
			cal: 190, carbs: 26, protein: 5, fat: 7, meal: ['lunch', 'dinner'], img: "imgs/grains/ramen.jpeg"},
			{name: "Corn Flakes", servings: 1, servSize: "1 cup", group: "grains",
			cal: 100, carbs: 24, protein: 2, fat: 0, meal: ['breakfast'], img: "imgs/grains/cornflakes.jpeg"},
			{name: "Crackers", servings: 1, servSize: "16g", group: "grains",
			cal: 81, carbs: 10, protein: 1.1, fat: 4.1, meal: ['lunch'], img: "imgs/grains/crackers.jpeg"},
			{name: "Pasta", servings: 1, servSize: "2oz", group: "grains",
			cal: 120, carbs: 42, protein: 7, fat: 1, meal: ['lunch', 'dinner'], img: "imgs/grains/pasta.jpeg"},
			{name: "White Rice", servings: 1, servSize: "1 cup", group: "grains",
			cal: 206, carbs: 45, protein: 4.3, fat: 0.4, meal: ['lunch', 'dinner'], img: "imgs/grains/whiterice.jpeg"},
			{name: "Brown Rice", servings: 1, servSize: "1 cup", group: "grains",
			cal: 216, carbs: 45, protein: 5, fat: 1.8, meal: ['lunch', 'dinner'], img: "imgs/grains/brownrice.jpeg"},
			{name: "Waffles (frozen)", servings: 1, servSize: "2 waffles", group: "grains",
			cal: 180, carbs: 27, protein: 4, fat: 6, meal: ['breakfast'], img: "imgs/grains/waffles.jpeg"},
			{name: "Pancakes", servings: 1, servSize: "2 pancakes", group: "grains",
			cal: 160, carbs: 22, protein: 4.8, fat: 7.4, meal: ['breakfast'], img: "imgs/grains/pancakes.jpeg"},
			{name: "English Muffin", servings: 1, servSize: "1 cup", group: "grains",
			cal: 134, carbs: 26, protein: 4.4, fat: 1, meal: ['breakfast'], img: "imgs/grains/englishmuffins.jpeg"},
			{name: "Flour Tortilla", servings: 1, servSize: "2 tortillas", group: "grains",
			cal: 150, carbs: 24, protein: 3, fat: 4, meal: ['lunch', 'dinner'], img: "imgs/grains/flourtortilla.jpeg"},
			{name: "Corn Tortilla", servings: 1, servSize: "2 tortillas", group: "grains",
			cal: 110, carbs: 22, protein: 2, fat: 1.5, meal: ['lunch', 'dinner'], img: "imgs/grains/corntortilla.jpeg"}
		];
		return grainItems;
	};

	function getProteinItems() {
		var proteinItems = [
			{name: "Tofu", servings: 1, servSize: "1/2 cup", group: "proteins",
			cal: 94, carbs: 2.3, protein: 10, fat: 6, meal: ['lunch', 'dinner'], img: "imgs/proteins/tofu.jpeg"},
			{name: "Chicken Breast", servings: 1, servSize: "1 cup", group: "proteins",
			cal: 231, carbs: 0, protein: 43, fat: 5, meal: ['lunch', 'dinner'], img: "imgs/proteins/chicken.jpeg"},
			{name: "Turkey Breast", servings: 1, servSize: "3 oz", group: "proteins",
			cal: 120, carbs: 0, protein: 26, fat: 1, meal: ['lunch', 'dinner'], img: "imgs/proteins/turkey.jpeg"},
			{name: "Ground Beef", servings: 1, servSize: "1 oz", group: "proteins",
			cal: 93, carbs: 0, protein: 4, fat: 8, meal: ['dinner'], img: "imgs/proteins/beef.jpeg"},
			{name: "Sirloin", servings: 1, servSize: "3 oz", group: "proteins",
			cal: 207, carbs: 0, protein: 23, fat: 12, meal: ['dinner'], img: "imgs/proteins/steak.jpeg"},
			{name: "Eggs", servings: 1, servSize: "2 large eggs", group: "proteins",
			cal: 156, carbs: 1.2, protein: 12, fat: 10, meal: ['breakfast', 'lunch'], img: "imgs/proteins/eggs.jpeg"},
			{name: "Lamb", servings: 1, servSize: "3 oz", group: "proteins",
			cal: 250, carbs: 0, protein: 21, fat: 18, meal: ['dinner'], img: "imgs/proteins/lamb.jpeg"},
			{name: "Ham", servings: 1, servSize: "1 cup", group: "proteins",
			cal: 203, carbs: 2.1, protein: 29, fat: 8, meal: ['lunch', 'dinner'], img: "imgs/proteins/ham.jpeg"},
			{name: "Pork Chop", servings: 1, servSize: "219g (or 1 pork chop)", group: "proteins",
			cal: 505, carbs: 0, protein: 52, fat: 31, meal: ['dinner'], img: "imgs/proteins/pork.jpeg"},
			{name: "Pork Sausage", servings: 1, servSize: "2 oz", group: "proteins",
			cal: 190, carbs: 1, protein: 10, fat: 17, meal: ['dinner'], img: "imgs/proteins/porksausage.jpeg"},
			{name: "Turkey Sausage", servings: 1, servSize: "2 oz", group: "proteins",
			cal: 120, carbs: 0, protein: 12, fat: 7, meal: ['dinner'], img: "imgs/proteins/turkeysausage.jpeg"},
			{name: "Pork Bacon", servings:1, servSize: "2 slices", group: "proteins",
			cal: 180, carbs: 0, protein: 3, fat: 19, meal: ['dinner'], img: "imgs/proteins/bacon.jpg"},
			{name: "Turkey Bacon", servings: 1, servSize: "2 slices", group: "proteins",
			cal: 70, carbs: 0, protein: 4, fat: 6, meal: ['breakfast', 'lunch'], img: "imgs/proteins/bacon.jpg"},
			{name: "Salmon", servings: 1, servSize: "3 oz", group: "proteins",
			cal: 177, carbs: 0, protein: 17, fat: 11, meal: ['lunch', 'dinner'], img: "imgs/proteins/salmon.jpeg"},
			{name: "Tuna", servings: 1, servSize: "3 oz", group: "proteins",
			cal: 157, carbs: 0, protein: 25, fat: 5, meal: ['lunch', 'dinner'], img: "imgs/proteins/tuna.jpeg"},
			{name: "Shrimp", servings: 1, servSize: "4 oz", group: "proteins",
			cal: 112, carbs: 0, protein: 24, fat: 1, meal: ['lunch', 'dinner'], img: "imgs/proteins/shrimp.png"},
			{name: "Lobster", servings: 1, servSize: "1 cup", group: "proteins",
			cal: 129, carbs: 0, protein: 28, fat: 1.2, meal: ['dinner'], img: "imgs/proteins/lobster.jpeg"}
		];
		return proteinItems;
	};

	function getVegItems () {
		var vegItems = [
			{name: "Broccoli", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 30, carbs: 5.8, protein: 2.5, fat: 0.3, meal: ["lunch","dinner"], img: "imgs/veg/broccoli.jpeg"},
			{name: "Carrot", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 52, carbs: 12.3, protein: 1.2, fat: 0.3, meal: ["lunch", "dinner"], img: "imgs/veg/carrots.jpeg"},
			{name: "Tomato", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 32, carbs: 7.1, protein: 1.6, fat: 0.4, meal: ["breakfast", "lunch", "dinner"], img: "imgs/veg/tomatoes.jpeg"},
			{name: "Cucumber", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 16, carbs: 3.8, protein: 0.7, fat: 0.1, meal: ["lunch", "dinner"], img: "imgs/veg/cucumber.jpeg"},
			{name: "Lettuce", servings: 1, servSize: "2 cups", group: "vegetable",
			cal: 11, carbs: 2, protein: 1, fat: 0.1, meal: ["lunch", "dinner"], img: "imgs/veg/lettuce.jpeg"},
			{name: "Bell Peppers", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 30, carbs: 7, protein: 1.3, fat: 0.3, meal: ["lunch", "dinner"], img: "imgs/veg/peppers.jpeg"},
			{name: "Sweet Potato", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 180, carbs: 41.4, protein: 4, fat: 0.3, meal: ["lunch", "dinner"], img: "imgs/veg/sweetpotatoes.jpeg"},
			{name: "Potato", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 108, carbs: 23.9, protein: 2.8, fat: 0.2, meal: ["lunch", "dinner"], img: "imgs/veg/potatoes.jpeg"},
			{name: "Corn", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 128, carbs: 31.3, protein: 5.1, fat: 2.2, meal: ["lunch", "dinner"], img: "imgs/veg/corn.jpeg"},
			{name: "Avocado", servings: 1, servSize: "1/3 avocado", group: "vegetable",
			cal: 84, carbs: 4.3, protein: 1, fat: 7.7, meal: ["breakfast", "lunch", "dinner"], img: "imgs/veg/avocado.jpeg"},
			{name: "Black Beans", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 227, carbs: 40.8, protein: 15.2, fat: 0.9, meal: ["lunch", "dinner"],  img: "imgs/veg/blackbeans.jpeg"},
			{name: "Celery", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 14, carbs: 3.5, protein: 0.7, fat: 0.2, meal: ["lunch", "dinner"], img: "imgs/veg/celery.jpeg"},
			{name: "Butternut Squash", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 63, carbs: 16.4, protein: 1.4, fat: 0.1, meal: ["lunch", "dinner"], img: "imgs/veg/squash.jpeg"},
			{name: "Cabbage", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 21, carbs: 5, protein: 1.3, fat: 0.1, meal: ["lunch", "dinner"], img: "imgs/veg/cabbage.jpeg"},
			{name: "Green Beans", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 44, carbs: 9.9, protein: 2.4, fat: 0.4, meal: ["lunch", "dinner"], img: "imgs/veg/greenbeans.jpeg"},
			{name: "Peas", servings: 1, servSize: "1 cup", group: "vegetable",
			cal: 117, carbs: 21, protein: 7.9, fat: 0.6, meal: ["lunch", "dinner"], img: "imgs/veg/peas.jpeg"}
		];
		return vegItems;
	};

	function addItem(item) {
		return $http.post("/api/item", item);
		console.log("service: item added");
	};

	function getAllItems() {
		return $http.get("/api/total").then(function(response) {
			return response.data;
		});
	};

	function deleteItems(){
		return $http.delete("/api/total");
	};

	return {
		getDairyItems: getDairyItems,
		getFatItems: getFatItems,
		getFruitItems: getFruitItems,
		getGrainItems: getGrainItems,
		getProteinItems: getProteinItems,
		getVegItems: getVegItems,
		addItem: addItem,
		getAllItems: getAllItems,
		deleteItems: deleteItems
	};
});
