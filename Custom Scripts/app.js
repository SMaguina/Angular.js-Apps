var app = angular.module("myApp", []);

app.controller("testCtrl", function($scope) {
	$scope.userText = "My default text!";

	$scope.users = [
	{
		firstname: "Bob",
		lastname: "Jones",
		age: 24,
		username: "bjones"
	},
	{
		firstname: "Joan",
		lastname: "Randell",
		age: 35,
		username: "jrandell"
	}
	];
});