'use strict';

/**
 * @ngdoc function
 * @name protractorPhantomJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the protractorPhantomJsApp
 */
angular.module('protractorPhantomJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
