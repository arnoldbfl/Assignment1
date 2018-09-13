angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
      $scope.listings = Listings;
      $scope.detailedInfo = undefined;
      $scope.addListing = function () {
          var newListing = {
              "code": $scope.code,
              "name": $scope.name,
              "coordinates": {
                  "latitude": $scope.latitude,
                  "longitude": $scope.longitude
              }
              "address": $scope.address
          };
          $scope.listings.push(newListing);
        };
      $scope.deleteListing = function (index) {
          $scope.listings.splice(index,1);                     
      };
      $scope.showDetails = function (index) {
          $scope.detailedInfo = {
              "code" : "Code- " + $scope.listings[index].code,
              "name" : "Name- " + $scope.listings[index].name;
              "latitude": "Latitude- " + $scope.listings[index].latitude,
              "longitude": "Longitude- " + $scope.listings[index].longitude,
              "address": "Address- " + $scope.listings[index].address
          }
      };
  }
]);