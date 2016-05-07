(function(){
	var app = angular.module("productsApp",[]);
	
	var productController = function($scope, $http, $window){
		$scope.getMenTeesProducts = function(){			
			$http({
				method: 'GET',
				url: '/TeesProducts',
			}).success(function(data){	
				$window.location.assign('/TeesProducts');																							
				}).error(function(data){
			})			
		}		
		
		$scope.getWomenTopsProducts = function(){			
			$http({
				method: 'GET',
				url: '/TopsProducts',
			}).success(function(data){	
				$window.location.assign('/TopsProducts');																							
				}).error(function(data){
			})			
		}		
		
		$scope.getWomenJeansProducts = function(){			
			$http({
				method: 'GET',
				url: '/WomenJeansProducts',
			}).success(function(data){	
				$window.location.assign('/WomenJeansProducts');																							
				}).error(function(data){
			})			
		}		
		
		$scope.getWomenDressProducts = function(){			
			$http({
				method: 'GET',
				url: '/WomenDressProducts',
			}).success(function(data){	
				$window.location.assign('/WomenDressProducts');																							
				}).error(function(data){
			})			
		}		
	}
	app.controller("products-controller",productController);
}());