(function(){
	var app = angular.module("productsApp",[]);
	
	var productController = function($scope, $http, $window){
		//MEN
		$scope.getMenTeesProducts = function(){			
			$http({
				method: 'GET',
				url: '/TeesProducts',
			}).success(function(data){	
				$window.location.assign('/TeesProducts');																							
				}).error(function(data){
			})			
		}		
		
		$scope.getMenJeansProducts = function(){			
			$http({
				method: 'GET',
				url: '/JeansProducts',
			}).success(function(data){	
				$window.location.assign('/JeansProducts');																							
				}).error(function(data){
			})			
		}	
		
		$scope.getMenHoodsProducts = function(){			
			$http({
				method: 'GET',
				url: '/HoodsProducts',
			}).success(function(data){	
				$window.location.assign('/HoodsProducts');																							
				}).error(function(data){
			})			
		}	
		
		
		//WOMEN
		
		
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