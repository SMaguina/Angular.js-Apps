var app = angular.module("myApp", []);

app.controller("testCtrl", function($scope, $http) {
	$scope.userText = "My default text!";

	//HTTP Request Types

	//GET -> Read
	//POST -> Create
	//PUT -> Update
	//DELETE -> Delete

	$http.get("http://daretodiscover.herokuapp.com/users")
		.success(function(users) {
			console.log(users);
				//Step 1: Loop through users array
				//Step 2: Take specific user and input their information into HTML template
				//Step 3: $.append() to add new HTML to DOM
				$scope.users = users;
		})
		.error(function() {
			alert("Error getting data");
		});

	/*$scope.users = [
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
	];*/
});