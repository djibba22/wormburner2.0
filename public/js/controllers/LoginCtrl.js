app.controller('LoginCtrl', ['$scope' , '$http', '$firebaseArray','$location', function ($scope,$http,$firebaseArray,$location){
// this is firebase auth with password and email
		$scope.login= function(){
				var ref = new Firebase("https://wormburnerapp.firebaseio.com");
			ref.authWithPassword({
			  email    : $scope.login.email,
			  password : $scope.login.password
			}, function(error, authData) {
			  if (error) {
			  	alert("Login Failed! Bad Combination");
			    console.log("Login Failed!", error);
			  } else {
			  	// alert("Logged in as: ",authData);
			    // console.log("Authenticated successfully with payload:", authData);
			    $location.path('/userdashboard');
			  }
		});
 	}
}]);




	







