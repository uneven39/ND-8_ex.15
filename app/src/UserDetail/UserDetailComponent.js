'use strict';

userApp.component('userDetail', {

	bindings: {
		user: '<'
	},
	
	controller: function UserDetailCtrl($routeParams, UsersService) {

		this.userLoaded = false;
		var vm = this;

		vm.user = UsersService.get({
			userId: $routeParams['userId']
		}, function(successResult) {
			// Окей!
			vm.notfoundError = false;
			vm.userLoaded = true;

			vm.activeTab = 1;
			vm.disableControlTab = true;
		}, function(errorResult) {
			// Не окей..
			vm.notfoundError = true;
			vm.userLoaded = true;


		});

		this.user.$promise.then(function(result) {
			//vm.userLoaded = true;
		});

		this.deleteUser = function(userId) {

			vm.user.$delete({
				userId: userId
			}, function(successResult) {
				// Окей!
				vm.deletionSuccess = true;
			}, function(errorResult) {
				// Не окей..
				vm.deletionError = true;
			});

		}

	},

	templateUrl: './src/UserDetail/UserDetail.html'

});
